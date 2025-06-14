// file-receiver.js
const net = require('net');
const fs = require('fs');

const server = net.createServer(socket => {
  console.log(' Connection received from:', socket.remoteAddress);

  const fileStream = fs.createWriteStream('received_file');
  socket.pipe(fileStream);

  socket.on('end', () => {
    console.log(' File received successfully!');
    fileStream.close();
  });

  socket.on('error', err => {
    console.error(' Error:', err.message);
  });
});

const PORT = 9000;
server.listen(PORT, () => {
  console.log(` Waiting for files on port ${PORT}...`);
});
