import { Server } from "socket.io"
import express from "express"; // express를 가져와 변수에 저장
import http from "http"; // 서버의 정보
import cors from "cors"
import bodyParser from "body-parser"
import auth from "./utils/auth.js";
import dotenv from 'dotenv';

dotenv.config();

// import {fileURLToPath} from 'url';
// import path from "path";
// const __dirname = fileURLToPath(path.dirname(import.meta.url));

const app = express(); // express를 실행한 값을 app에 저장
const server = http.createServer(app);

server.listen(5000, () => {
  console.log(`서버가 5000번 포트에서 실행 중입니다.`);
});

// Cors 관련
const io = new Server(server, {
  cors: {
    origin: "*",
  }
});

const corsOptions = {
  origin: "*",
  credential: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// auth 관리 라우터
app.use("/auth", auth)
// db 관리 라우터
// app.use("/database", database)

const rooms = {}
var numClients = 2

io.on('connection', (socket) => {

  // 접속시 룸리스트 출력
  socket.on("roomlist", () => {
    console.log(rooms);
    socket.emit("getRoomlist", rooms)
  })

  //룸 접속
  socket.on("joinRoom", (roomData) => {

    // 만들때는 유저이메일을 쓰고, 접속할때는 방의 roomName으로 접속한다.
    const roomName = roomData.userEmail
    // 타입이 0이면 플레이어 1이면 관전자
    const type = roomData.type
    console.log(type);
    // 클라이언트를 해당 방에 조인
    console.log(`${roomData.userName} user connected to ${roomName}`);
    socket.join(roomName);

    // 해당 방이 없을 경우, 새로운 방을 생성하고 플레이어 배열 초기화
    if (!rooms[roomName]) {
      rooms[roomName] = {
        roomName : roomName,
        roomHost : roomData.userName,
        players: [], // 해당 방에 있는 플레이어들의 배열
        allPings: {},
        spectators:[]
      }
      // 방 생성시 전체유저에게 방 바뀌었다고 신호
      io.emit("getRoomlist", rooms);
    }
    
    // 방에 사람 많으면 거절 신호 접속 type 0일 때만
    if(type === 0) {
      if (rooms[roomName].players.length >= 2) {
        // 최대 인원 초과 메시지 전송
        io.to(roomName).emit("joinRoomSign", "fail");
        socket.leave(roomName);
        return;
      } else {
        io.to(roomName).emit("joinRoomSign", "success");
      }
    
      // 플레이어 정보 생성 및 추가
      const position = rooms[roomName].players.length === 0 ? [-1, 0.3, -12] : [1, 0.3, -12];
      const player = {
          id: socket.id,
          name: roomData.userName,
          position: position,
          rotation: [0, 0, 0],
          color: `hsl(${360 * Math.random()}, 100%, 50%)`,
          roomName: roomName
      };

      // 이미 같은 유저가 있는지 확인
      const existingPlayer = rooms[roomName].players.find(p => p.id === socket.id);
      if (!existingPlayer) {
        rooms[roomName].players.push(player);
      }  
    }
    // 관전자로 입장했을때
    if(type === 1) {
      if (rooms[roomName].spectators.length >= 1) {
        // 최대 인원 초과 메시지 전송
        io.to(roomName).emit("joinRoomSign", "fail");
        socket.leave(roomName);
        return;
      } else {
        io.to(roomName).emit("joinRoomSign", "success");
      }

      const spectator = {
        id: socket.id,
        name: roomData.userName,
        roomName: roomName
      };

      // 이미 같은 유저가 있는지 확인
      const existingSpectator = rooms[roomName].spectators.find(p => p.id === socket.id);
      if (!existingSpectator) {
        rooms[roomName].spectators.push(spectator);
      } 
    }

    socket.on("getRoomData", () => {
      io.to(roomName).emit("updateRoomData", rooms[roomName])
    })

    io.to(roomName).emit("updateRoomData", rooms[roomName])

    console.log(rooms);

    // socket.on("getRoomData", () => {
    //   console.log("roomName : ",roomName);
    //   socket.to(roomName).emit("sendRoomData", rooms[roomName])
    // })

    // 게임 시작 사인
    socket.on("startGameInRoom", () => {
      io.to(roomName).emit("startGameSignInRoom")
    })

    // 게임 시작후 
    socket.on("startGame", () => {

      console.log("startGame 받음");
      // 해당 방의 플레이어 정보 업데이트
      io.to(roomName).emit("updatePlayers", rooms[roomName]);

      // 원하는 플레이어 수와 배열 수 같으면 서버 시간을 보냄
      if (rooms[roomName].players.length === numClients) {
        const serverTimeStart = Date.now();
        console.log("server Time: ", serverTimeStart);
        io.to(roomName).emit("clientCount", serverTimeStart);
      }

      // 각 소켓에서 보낸 위치 정보를 받고 다른 유저에게 전달
      socket.on('currentState', (data) => {
        // console.log(data);
        socket.broadcast.to(roomName).emit('updateAnotherPlayer', data);
        // io.emit('updateAnotherPlayer', "data")
      });

      // 플레이어와 관전자 모두가 핑 체크함
      socket.on("ping", (callback) => {
        callback();
      });

      socket.on("pingResult", (averagePing) => {
        // 자신의 아이디와 핑을 상대방에게 보내기 위해 JSON 으로 만듦
        if (averagePing === null) {
          averagePing = 0;
        }
        
        rooms[roomName].allPings[socket.id] = {
            id: socket.id,
            ping: averagePing,
        };
      
        console.log(rooms[roomName].allPings);
        //상대방에게 핑데이터 보냄 이는 Scene.jsx 에서 받을거임
        socket.broadcast.to(roomName).emit("opponentPing", rooms[roomName].allPings[socket.id]);
        // 모든 유저가 상대에게 핑데이터를 보냈다면 스타트 시그널을 보냄
        // 이는 Scene.jsx 에서 받을거임 
        console.log(Object.keys(rooms[roomName].allPings).length); 
        if (Object.keys(rooms[roomName].allPings).length === numClients) {
          io.to(roomName).emit("startSignal", rooms[roomName].allPings);
        }
      });

      // host user가 역전시
      socket.on("overtaking", () => {
        io.to(roomName).emit("rankingChange", "호스트가1등");
      });

      // host user가 역전 당할시
      socket.on("overtaken", () => {
        io.to(roomName).emit("rankingChange", "호스트가2등");
      });

      // 카메라 컨트롤 구역
      socket.on("prevCameraButton", () => {
        console.log('prev');
        io.to(roomName).emit("prevCameraMove")
      })
      socket.on("1pCameraButton", () => {
        io.to(roomName).emit("1pCameraMove")
      })
      socket.on("2pCameraButton", () => {
        io.to(roomName).emit("2pCameraMove")
      })
      socket.on("nextCameraButton", () => {
        console.log('next');
        io.to(roomName).emit("nextCameraMove")
      })
      
    })
    // 플레이어가 방을 나갈 때
    socket.on("leaveRoom", (roomName) => {
      // 해당 방에서 클라이언트를 나가게 함
      socket.leave(roomName);
      console.log(`${socket.id} left room ${roomName}`);

      // 해당 방에서 클라이언트의 정보를 제거
      if (rooms[roomName]) {
        rooms[roomName].players = rooms[roomName].players.filter(player => player.id !== socket.id);
        // 해당 방의 플레이어 정보 업데이트

        io.to(roomName).emit("updateRoomData", rooms[roomName]);
      }
    });

    // 연결이 끊어질경우
    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
  
      // 클라이언트가 속한 모든 방을 반복하면서 해당 클라이언트를 제거합니다.
      for (const roomName in rooms) {
          // 해당 방에서 플레이어를 제거합니다.
          rooms[roomName].players = rooms[roomName].players.filter(player => player.id !== socket.id);
          // 해당 방의 플레이어 정보 업데이트를 방에 속한 모든 클라이언트에게 전송합니다.
          io.to(roomName).emit("updatePlayers", rooms[roomName]);
      }
    });

    // 방장이 나갈 경우 전부다 내보냄
    socket.on('hostLeft', (roomName) => {
      console.log("호스트 레프트");

      handleHostLeaving(roomName);
    });

    //방장이 나가면 다 나가게 하는 함수
    function handleHostLeaving(roomName) {
      if (rooms[roomName] && rooms[roomName].players.length > 0) {
        const hostId = rooms[roomName].players[0].id; // 방장은 항상 players 배열의 첫 번째 요소
        const hostSocket = io.sockets.sockets.get(hostId);

        socket.broadcast.to(roomName).emit("leftCommand")
        // 방장만 호출할수 있으니까 모두에게 나가라고 신호
        if (hostSocket) {
          // 방장을 제외한 플레이어들과 관전자들을 로비로 이동
          rooms[roomName].players.slice(1).forEach(player => {
              const playerSocket = io.sockets.sockets.get(player.id);
              if (playerSocket) {
                  playerSocket.leave(roomName);
              }
          });
          if(rooms[roomName].spectator){
            rooms[roomName].spectator.forEach(spectator => {
                const spectatorSocket = io.sockets.sockets.get(spectator.id);
                if (spectatorSocket) {
                    spectatorSocket.leave(roomName);
                }
            });
          }
          // 방 제거
          delete rooms[roomName];
          console.log(`Room ${roomName} has been removed.`);
        
          // 방 정보 업데이트
          io.emit('getRoomList', rooms);
        }
      }
    }
  });
})



