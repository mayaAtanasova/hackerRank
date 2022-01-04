function sockMerchant(n, ar) {
    const result = {};

    ar.forEach(nr => {
        result[nr] = (result[nr] || 0) + 1;
    });
    // console.log(result);

    const counts = Object.values(result).map(x => Math.floor(x / 2)).reduce((acc, c) => acc + c, 0);
    return counts;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);