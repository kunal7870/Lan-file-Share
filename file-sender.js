// file-sender.js
const net = require('net');
const fs = require('fs');

function sendFile(filePath, host = 'localhost', port = 9000) {
  const client = new net.Socket();
  const readStream = fs.createReadStream(filePath);

  client.connect(port, host, () => {
    console.log(' Connected to receiver at', host + ':' + port);
    readStream.pipe(client);
  });

  client.on('close', () => {
    console.log(' File sent and connection closed!');
  });

  client.on('error', err => {
    console.error(' Error:', err.message);
  });
}

// Example usage:
sendFile('./kunaleg.txt', '192.168.24.237', 9000);
