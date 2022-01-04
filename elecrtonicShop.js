function getMoneySpent(keyboards, drives, b) {

    const budgets = keyboards.map(mapSums).flat(1).sort((a, b) => b - a).filter(x => x <= b);

    if (budgets.length == 0) {
        return -1;
    } else {
        return budgets[0];
    }

    function mapSums(kb) {
        const budgets = drives.map(dr => dr + kb);
        return budgets;
    }

}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([4], [5], 5));
