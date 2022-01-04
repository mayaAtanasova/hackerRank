function pickingNumbers(a) {

    const ordered = a.reduce((a, c) => Object.assign(a, { [c]: (a[c] || 0) + 1 }), {});
    let sorted = Object.entries(ordered).sort((a,b) => b[1] - a[1]);
    let result = sorted[0][1];
    for (let [k, v] of sorted) {
            result = Math.max(result, v + ordered[k - 1] || 0, v + ordered[k + 1] || 0);
    }
    return result;
}

console.log(pickingNumbers([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]));

// function pickingNumbers(a){

//     let sorted = a.sort((a, b) => a - b);
    
//     let i = 0;
//     let j = 1;
    
//     while(i < sorted.length && j < sorted.length) {
//         if(Math.abs(sorted[i] - sorted[j]) > 1) {
//             i++;
//             j++;
//         } else {
//             j++;
//         }
//     }
//     return Math.abs(i - j);
// }