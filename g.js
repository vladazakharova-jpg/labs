function removeElement(array, item){
    const index = array.indexOf(item);
    if(index !== -1){
        array.splice(index, 1);
    }
}

function removeElements(array, ...items){
    for(const item of items){
        let index = array.indexOf(item);
        while(index !== -1){
            array.splice(index, 1);
            index = array.indexOf(item);
        }
    }
}
function unique(array){
    return Array.from(new Set(array));
}
function difference(array1, array2){
    const set2 = new Set(array2);
    return array1.felter(item => !set2.has(item));
}