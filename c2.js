const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, chars) {
    let result = '';
    const charsLength = chars.length;
    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charsLength);
        result += chars[randomIndex];
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key); 