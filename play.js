const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost', // IP ADDRESS HERE
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', message => {
    console.log(message);
  });
  
  return conn;
}

console.log('Connecting ...');
connect();