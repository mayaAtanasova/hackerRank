function repeatedString(s, n) {
    let asInString = getA(s);
    let count = Math.floor(n / s.length);
    let remainder = n % s.length;
    let cut = remainder != 0 ? s.substring(0, remainder) : '';
    let wholeCount = count * asInString;
    let remainderCount = getA(cut);
    return wholeCount + remainderCount;

    function getA(str) {
        let count = str.split('').filter(x => x == 'a').length;
        return count;
    }

}

console.log(repeatedString('aab', 882787));
//588526 wrong
//588525 right

//588524