function catAndMouse(x, y, z) {
    const distAM = Math.abs(z - x);
    const distBM = Math.abs(z - y);

    if (distAM < distBM) {
        return 'Cat A';
    } else if (distBM < distAM) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }

}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
