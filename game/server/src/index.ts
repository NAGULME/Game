import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

interface PlayerState {
  x: number;
  y: number;
  username: string;
}

const players = new Map<string, PlayerState>();

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  socket.on('playerMove', (data: PlayerState) => {
    players.set(socket.id, data);
    socket.broadcast.emit('playerMoved', { id: socket.id, ...data });
  });

  socket.on('disconnect', () => {
    players.delete(socket.id);
    io.emit('playerDisconnected', socket.id);
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});