import express from "express"
import http from "http"
import {Server} from "socket.io"

const app = express()
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    socket.on('message', (message)=>{
        io.emit("message", message)
    })
})



app.use(express.static('./public'))

app.get('/', (req, res) => {
  return res.sendFile('./public/index.js')
}
)

server.listen(5000, ()=>{
    console.log('Server is listening at port 5000');
    
})