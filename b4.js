function fn() {
    const constObject = { name: 'Vlada'};
    let letObject = { name: 'Ira'};
    
    constObject.name = 'Darina';
    letObject.name = 'Katya';
    letObject = { name: 'another'};
    console.log(constObject, letObject);
}
fn();

function createUser(name, city) {
    return { name, city };
}

console.log(createUser('Vlada Zakharova', 'Ukraine'));