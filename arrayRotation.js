function circularArrayRotation(a, k, queries) {
    k = k % a.length;
    for(let i = 1; i <= k; i++){
        a.unshift(a.pop());
    }
    const result = queries.map(ind => a[ind]);
    return result;
}

console.log(circularArrayRotation([1,2,3], 2, [0, 1, 2]));