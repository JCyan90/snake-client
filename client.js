const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.102', // IP ADDRESS HERE
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', message => {
    console.log(message);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JA");
  });
  
  return conn;
}

module.exports = { connect };