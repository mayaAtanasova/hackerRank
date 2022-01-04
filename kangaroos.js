function kangaroo(x1, v1, x2, v2) {
    let n = (x1 - x2)/(v2 - v1);
    if (n % 1 === 0 && n > 0) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}



kangaroo(0, 3, 4, 2);
kangaroo(0, 2, 5, 3);
