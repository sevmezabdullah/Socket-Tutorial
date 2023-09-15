import { createServer } from "http";
import { Server } from "socket.io";


const httpServer = createServer()


const io = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

io.on("connection", (socket) => {
    console.log("Bir Kullanıcı Sunucuya Bağlandı.", socket.id)

    socket.on("disconnect", () => {
        console.log("Kullanıcı socket bağlantısını terketti.")
    })
})

httpServer.listen(3000)