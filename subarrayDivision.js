function birthday(s, d, m) {
    let counter = 0;
    if (m <= s.length){
        if (m == s.length){
            if(sum(s) == d){
                counter++;
            }
        }else{
            for (let i = 0; i <= s.length - m; i++) {
                let current = s.slice(i, i + m);
                if (sum(current) === d) {
                    counter++;
                }
            }
        }
    }
    function sum (array){
        return array.reduce((ac, c) => ac + c, 0);
    } 
    return counter;
}

console.log(birthday([2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1], 18, 7));