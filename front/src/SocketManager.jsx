import { useAtom, atom } from "jotai"
import { useEffect } from "react"
import {io} from "socket.io-client"

export const socket = io("http://localhost:3000")
export const PlayerAtom = atom([])

const SocketManager = () => {
  const [_players, setPlayers] = useAtom(PlayerAtom)

  useEffect(()=>{
    function onHello(){
      console.log("hello do you hear me!!!!")
    }

    function updatePlayers(backEndPlayers){ 
      const playersArray = Object.values(backEndPlayers);
      setPlayers(playersArray)
    }

    socket.on("updatePlayers", updatePlayers)
    socket.on("hello", onHello)
    
    return ()=>{
      socket.off("updatePlayers", onPlayers)
    }
  })
}

export default SocketManager();

function onPlayers(backEndPlayers){ 
  const playersArray = Object.values(backEndPlayers);
  setPlayers(playersArray)
}

return (() =>{
  socket.on("updatePlayers", onPlayers)
})