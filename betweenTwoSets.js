function getTotalX(a, b) {
    const result = [];
    const start = a[a.length - 1];
    const end = b[0];

    for (let i = start; i <= end; i++) {
        let all = true;
        for (let j = 0; j < a.length; j++) {
            all = all && (i % a[j] === 0);
        }
        for(let k = 0; k < b.length; k ++){
            all = all && (b[k] % i === 0);
        }
        if (all == true) {
            result.push(i);
        }
    }
    return result;
}

console.log(getTotalX([3, 4], [24, 48]));