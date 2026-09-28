function incScalar(n) {
    return n + 1;
}
const a = 5;
const b = incScalar(a);
console.dir({a, b});

function incReference(num) {
    num.n += 1;
}
const obj = {n: 5};
incReference(obj);
console.dir(obj);
