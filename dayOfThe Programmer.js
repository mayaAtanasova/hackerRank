function dayOfProgrammer(year) {

    let date = 256 - 215 - daysInFeb(year);

    console.log(`${date}.09.${year}`);

    function daysInFeb(year) {
        if (year <= 1917) {
            if (year % 4 == 0) {
                return 29;
            } else { return 28; }
        } else if (year == 1918) {
            return 15;
        } else if (year >= 1919 && year <= 2700) {
            if (year % 4 == 0 && year % 100 != 0) {
                return 29;
            }
            if (year % 100 == 0){
                if (year % 400 == 0){
                    return 29;
                }
                return 28;
            }
        }
        return 28;
    }
}


dayOfProgrammer(1918);