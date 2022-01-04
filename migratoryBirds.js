function migratoryBirds(arr) {
    const counts = arr.reduce((acc, c) => Object.assign(acc, { [c]: (acc[c] || 0) + 1 }), {});
    const result = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    
    return Number(result[0][0]);

}

console.log(migratoryBirds([1, 4, 4, 4, 3, 3, 5, 3]));