function generateUser() {
    const randomNumber = Math.round(Math.random(1000) * 1000);
    const username = 'user${randomNumber}';
    const email = '${username}@mail.com';
    const password = '1234Qwert1';

    return { username, email, password };
    
}

module.exports = { generateUser };