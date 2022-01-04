function countingValleys(steps, path) {
    const pathArr = path.split('');
    let current = pathArr[0];
    let currentAltitude = 0;
    let altitude = 0;
    let counter = 0;

    pathArr.forEach(el => {
        if (el == 'U'){
            altitude ++;
        } else if (el == 'D'){
            altitude --;
        }
        if (altitude == 0){
            if (currentAltitude < 0) {
                counter ++;
            }
        }
        currentAltitude = altitude;
    });

    return counter;
}

console.log(countingValleys(8, 'UDDDUDUU'));