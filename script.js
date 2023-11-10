//  start node.js server

const net = require('net');
const crypto = require('crypto');
const {Server} = require("socket.io");


const server = net.createServer();
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Implement data isGeneratorFunction, encryption and transmission.Implement
server.on('connection', (socket) => {
    console.log('A new client connected.');

    socket.on('data', (data) => {
        const hash = crypto.createHash('sha256');
        hash.update(data);
        const hashedData = hash.digest('hex');

        const encryptedData = encrypt(hashedData);

        socket.write(encryptedData);
    });

    socket.on('end', () => {
        console.log('Client disconnected.');
    });
});

// function encrypt(data) {
//     const cipher = crypto.createCipher('aes-256-cbc', 'my password');
//     let encrypted = cipher.update(data, 'utf8', 'hex');
//     encrypted += cipher.final('hex');
//     return encrypted;
// }

// // to decrypted thw received dT on the client side .

// function decrypt(data) {
//     // Create a decipher with the algorithm and password.
//     const decipher = crypto.createDecipher('aes-256-cbc', 'my password');
    
//     // Update the decrypted data and convert from hex to utf8.
//     let decrypted = decipher.update(data, 'hex', 'utf8');
    
//     // Finalize the decryption process and add to the decrypted data.
//     decrypted += decipher.final('utf8');
    
//     // Return the decrypted data.
//     return decrypted;
// }