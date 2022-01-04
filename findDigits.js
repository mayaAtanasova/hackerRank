function findDigits(n) {

    let countDiv = 0;
    let nrAsString = n.toString();
    let divisors = nrAsString.split('');
    divisors.forEach(divisor => {
        if (n % divisor === 0) {
            countDiv++
        }
    })
    console.log(countDiv);
    return countDiv;
}
findDigits(1012)