const pipe = (...fns) => {
    for(const fn of fns){
        if(typeof fn !== 'function'){
            throw new Error('All arguments must be functions');
        }
    }
    return(x) => fns.reduce((acc, fn) => fn(acc), x);
};

const compose = (...fns) => {
    const listeners = [];
    const fn = (x) => {
        let current = x;
        for(let i = fns.length - 1; i >= 0; i--){
            try{
                current = fns[i](current);
            }
            catch(e){
                listeners.forEach((l) => l('error', e));
                return undefined;
            }
        }
        return current;
    };
    fn.on = (event, callback) => {
        if(event === 'error'){
            listeners.push(callback);
        }
    };
    return fn;
};