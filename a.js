function Hoisting() {
    console.dir(a);
    var a = 42;
    console.dir(a);
}
Hoisting();
