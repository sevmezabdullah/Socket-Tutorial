
import { useEffect, useState } from 'react'
import './App.css'
import {io} from 'socket.io-client'

function App() {
  
const serverURL = "http://localhost:3000"
const socket = io(serverURL)



const [isConnected,setIsConnected]=useState(false)

useEffect(()=>{

  function onConnect(){
    console.log("Kullanıcı Bağlandı")
    setIsConnected(true)
  }

  function onDisconnect(){
    setIsConnected(false)
  }

  socket.on("connect",onConnect)
  socket.on("disconnect",onDisconnect)


  return ()=>{
    socket.off("connect")
    socket.off("disconnect")
  }

},[])


  return (
    <>

    <div>
      <h1>Socket Durumu</h1>
      <p>Socket Status {isConnected?"Bağlandı":"Bağlantı Kesildi"}</p>
    </div>
  
    </>
  )
}

export default App
