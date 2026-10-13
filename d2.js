function max(matrix) {
    let maximum = matrix[0][0];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > maximum) {
                maximum = matrix[i][j];
            }
        }
    }
    return maximum;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); 