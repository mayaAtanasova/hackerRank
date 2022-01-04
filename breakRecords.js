function breakingRecords(scores) {
    let min = scores[0];
    let max = scores[0];
    let minCount = 0; let maxCount = 0;

    scores.forEach(nr => {
        if (nr < min) {
            min = nr;
            minCount++;
        }
        if (nr > max) {
            max = nr;
            maxCount++;
        }
    });

    console.log([maxCount, minCount]);
}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);