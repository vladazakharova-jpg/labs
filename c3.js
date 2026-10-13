const ipToInt = (ip = '127.0.0.1') => {
    return ip
    .split('.')
    .map(Number)
    .reduce((acc, byte, index, arr) => {
        const shift = (arr.length - 1 - index) * 8;
        return acc + (byte << shift);
    }, 
    0);
};

console.log(ipToInt('127.0.0.1'));
console.log(ipToInt('10.0.0.1'));  
console.log(ipToInt());         