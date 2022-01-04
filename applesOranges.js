/* Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.reduce(countA, 0);
    oranges = oranges.reduce(countB, 0);

    function countA(counter, dist) {
        if (a + dist >= s && a + dist <= t){
            counter ++;
        }
        return counter;
    }
    function countB(counter, dist) {
        if (b + dist >= s && b + dist <= t){
            counter ++;
        }
        return counter;
    }
    return [apples, oranges];
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, - 6]));