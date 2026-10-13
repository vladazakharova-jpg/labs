const phoneBookArray = [
    {name: 'Vlada Zakharova', phone: '+380445554433'},
    {name: 'Ivan Ivanovich', phone: '+380441112233'},
    {name: 'Lana Del Rey', phone: '+380449998877'}
];

function findPhoneByNameArray(nameToFind) {
    for(let i = 0; i < phoneBookArray.length; i++) {
        if(phoneBookArray[i].name === nameToFind) {
            return phoneBookArray[i].phone;
        }
    }
    return 'can not find((';
}

console.log(findPhoneByNameArray('Vlada Zakharova'));

const phoneBookHash = {
    'Vlada Zakharova': '+380445554433',
    'Ivan Ivanovich': '+380441112233',
    'Lana Del Rey': '+380449998877'
};

function findPhoneByNameHash(nameToFind) {
    return phoneBookHash[nameToFind];
}

console.log(findPhoneByNameHash('Vlada Zakharova'));