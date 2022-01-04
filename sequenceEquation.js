function permutationEquation(p) {
    let result = [];
    let len = p.length;
    for (let x = 1; x <= len; x++) {
        let index = p.indexOf(x);
        let index2 = p.indexOf(index + 1);
        result.push(index2 + 1);
    }
    return result;
}
permutationEquation([4, 3, 5, 1, 2])