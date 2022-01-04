function pageCount(n, p) {
    const totalFlips = Math.floor((n) / 2);

    const flipsFromStart = Math.floor((p) / 2);

    if ((totalFlips - flipsFromStart) < flipsFromStart){
        return totalFlips - flipsFromStart;
    } else {
        return flipsFromStart;
    }
}

console.log(pageCount(6, 2));
console.log(pageCount(6, 5));
