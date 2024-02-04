import { Server } from "socket.io"

const io = new Server({
  cors: {
    origin: [ "http://15.164.215.83:3000","http://localhost:3000"]
  },
})

io.listen(5000)

const backEndPlayers = {}
var numClients = 2
let clientReadyCount = 0;
const allPings = {}

io.on("connection", (socket)=>{

  // 접속시 알림
  console.log(`${socket.id} user connect`)
  
  let position;

  // 접속시 socket.id
  if(Object.keys(backEndPlayers).length === 0){
    position = [-0.5, 0.3, 0]
  } else {
    position = [0.5, 0.3, 0]
  }
  
  backEndPlayers[socket.id] = {
    id: socket.id,
    position: position,
    rotation: [0, 0, 0],
    color: `hsl(${360 * Math.random()}, 100%, 50%)`,
  }
  console.log(backEndPlayers);

  // 원하는 클라이언트 수와 배열 수 같으면 서버 시간을 보냄
  if(Object.keys(backEndPlayers).length === numClients){
    const serverTimeStart = Date.now()
    // console.log(serverTimeStart);
    io.emit("clientCount", serverTimeStart)
  }

  // new player update
  io.emit('updatePlayers', backEndPlayers);

  // 각 소켓에서 보낸 위치 정보를 받고 다른 유저에게 전달
  socket.on('currentState',(data) => {
    // console.log(data);
    socket.broadcast.emit('updateAnotherPlayer', data)
    // io.emit('updateAnotherPlayer', "data")
  })


  socket.on("ping", (callback) => {
    callback();
  });

  socket.on("pingResult", (averagePing) => {
    // 자신의 아이디와 핑을 상대방에게 보내기 위해 JSON 으로 만듦
    if(averagePing === null){
      averagePing = 0
    }
    
    allPings[socket.id] = {
      id: socket.id,
      ping : averagePing
    }

    console.log(allPings);

    //상대방에게 핑데이터 보냄 이는 Scene.jsx 에서 받을거임
    socket.broadcast.emit("opponentPing", allPings[socket.id])
    // 모든 유저가 상대에게 핑데이터를 보냈다면 스타트 시그널을 보냄
    // 이는 Scene.jsx 에서 받을거임 
    if (Object.keys(allPings).length === numClients) {
      io.emit("startSignal", allPings)
    }
  })

  // 접속 해제시 
  socket.on('disconnect', (reason) => {
    console.log(reason)
    delete backEndPlayers[socket.id]
    delete allPings[socket.id]
    console.log(backEndPlayers);
    console.log(allPings);
    io.emit('updatePlayers', backEndPlayers)
  })
})