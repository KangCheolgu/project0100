import { Server } from "socket.io"

const io = new Server({
  cors: {
    origin: [ "http://15.164.215.83:3000","http://localhost:3000"]
  },
})

io.listen(5000)

const backEndPlayers = {}
var numClients = 2

io.on("connection", (socket)=>{

  console.log(`${socket.id} user connect`)

  let position;

  // 접속시 socket.id
  if(Object.keys(backEndPlayers).length === 0){
    position = [-28.5, 0.3, 39]
  } else {
    position = [-27.5, 0.3, 39]
  }
  
  backEndPlayers[socket.id] = {
    id: socket.id,
    position: position,
    rotation: [0, 0, 0],
    color: `hsl(${360 * Math.random()}, 100%, 50%)`
  }
  console.log(backEndPlayers);

  //원하는 클라이언트 수와 배열 수 같으면 게임 시작
  if(Object.keys(backEndPlayers).length === numClients){
    io.emit("clientCount", Object.keys(backEndPlayers).length)
  }


  socket.emit("hello")
  // new player update
  io.emit('updatePlayers', backEndPlayers);

  // 각 소켓에서 보낸 위치 정보를 받고 다른 유저에게 전달
  socket.on('currentState',(data) => {
    // console.log(data);
    socket.broadcast.emit('updateAnotherPlayer', data)
    // io.emit('updateAnotherPlayer', "data")
  })

  // 접속 해제시 
  socket.on('disconnect', (reason) => {
    console.log(reason)
    delete backEndPlayers[socket.id]
    console.log(backEndPlayers);
    io.emit('updatePlayers', backEndPlayers)
  })

  socket.on("ping", (callback) => {
    callback();
  });
})