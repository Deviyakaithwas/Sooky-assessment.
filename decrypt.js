function decrypt(data) {
    // Create a decipher with the algorithm and password.
    const decipher = crypto.createDecipher('aes-256-cbc', 'my password');
    
    // Update the decrypted data and convert from hex to utf8.
    let decrypted = decipher.update(data, 'hex', 'utf8');
    
    // Finalize the decryption process and add to the decrypted data.
    decrypted += decipher.final('utf8');
    
    // Return the decrypted data.
    return decrypted;
}