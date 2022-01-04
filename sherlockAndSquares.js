function squares(a, b) {
    let counter = 0;
    let n = 0;
    for(let i = 0; i < b; i++){
        if(Math.sqrt(a + i) % 1 == 0){
            n = Math.sqrt(a + i);
            break;
        }
    }
    let squareN = n * n;
    while( squareN <= b ) {
        counter ++;
        n ++;
        squareN = n * n;
    }
    return counter;
}
console.log(squares(24, 49));
console.log(squares(3, 9));
console.log(squares(17, 24));

