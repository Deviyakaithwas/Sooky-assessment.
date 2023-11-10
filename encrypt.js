
function encrypt(data) {
    const cipher = crypto.createCipher('aes-256-cbc', 'my password');
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}