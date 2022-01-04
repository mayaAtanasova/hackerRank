function jumpingOnClouds(c) {
    let counter = 0;
    let i = 0;
    while (i < c.length - 1) {
        if (c[i + 2] != 1) {
            i += 2;
        } else {
            i += 1;
        }
        counter ++;
    }
    return counter;
}
console.log(jumpingOnClouds([0,0,0,0,1,0]));