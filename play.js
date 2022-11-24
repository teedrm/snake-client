const { connect } = require('./client');

// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",
//     port: 50541,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("data", ()=>{
//     console.log("you ded cuz you idled")
// });

//   return conn;
// };

console.log("Connecting ...");
connect();

const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
};

const handleUserInput = function (key) {
    // \u0003 maps to ctrl+c input
    if (key === '\u0003') {
        process.exit();
    } else if (key === 'w') {
        conn.write('Move: up');
    } else if (key === 'd') {
        conn.write('Move: right');
    } else if (key === 's') {
        conn.write('Move: down');
    } else if (key === 'a') {
        conn.write('Move: left')
    } else if (key === 'q') {
        conn.write('Hi');
    } else if (key === 'w') {
        conn.write('Hello');
    } else if (key === 'e') {
        conn.write('Bye');
    }
};



