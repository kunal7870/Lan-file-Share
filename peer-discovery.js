// peer-discovery.js
const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

function broadcastPresence() {
  const message = Buffer.from('HELLO from Kunal');
  socket.bind(() => {
    socket.setBroadcast(true);
    socket.send(message, 0, message.length, 8888, '255.255.255.255', () => {
      console.log('Broadcast sent');
      socket.close();
    });
  });
}

function listenForPeers() {
  socket.on('message', (msg, rinfo) => {
    console.log(`Received: ${msg} from ${rinfo.address}`);
  });

  socket.bind(8888, () => {
    console.log('Listening for peer broadcasts...');
  });
}
//one-among these
broadcastPresence();
// listenForPeers();
