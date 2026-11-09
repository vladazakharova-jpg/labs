function iterate(object, callback){
    for(const key in object){
        if(Object.prototype.hasOwnProperty.call(object, key)){
            callback(key, object[key], object);
        }
    }
}

function store(value){
    return function(){
        return value;
    };
}
function contract(fn, ...types){
    const resultType = types.pop();
    return function(...args){
        for(let i = 0; i < args.length; i++){
            if(typeof args[i] !== types[i].name.toLowerCase()){
                throw new TypeError('Invalid argument type');
            }
        }
        const result = fn(...args);
        if(typeof result !== resultType.name.toLowerCase()){
            throw new TypeError('Invalid result type');
        }
        return result;
    };
}