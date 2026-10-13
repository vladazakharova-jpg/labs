const mixArray = [
    true, 'hello', 5, 12, -200, false, false, 'word',
    {x: 1}, [1, 2, 3], null, undefined, 3,14
]
const collection = {};
for (const item of mixArray) {
    const type = typeof item;
    if (!(type in collection)) {
        collection[type] = 0;
    }
    collection[type] += 1;
} 
console.dir(collection);
