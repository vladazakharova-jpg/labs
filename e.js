function seq(...fns){
    return function chain(arg){
        if(typeof arg === 'number'){
            return fns.reduce((acc, fn) => fn(acc), arg);
        }
        return seq(...fns, arg);
    };
}

function array(){
    const data = [];
    const fn = function(index){
        return data[index];
    };
    fn.push = function(value){
        return data.push(value);
    };
    fn.pop = function(){
        return data.pop();
    };
    return fn;
}