const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    },
    notAFunction: 'line'
};

function introspect(obj) {
    const result = [];
    for(const key in obj) {
        const value = obj[key];
        if(typeof value === 'function') {
            result.push([key, value.length]);
        }
    }
    return result;
}

console.log(introspect(iface));