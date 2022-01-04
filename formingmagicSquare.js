function formingMagicSquare(s) {

    const allMagiqSquares = [
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2]
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4]
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6]
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8]
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2]
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6]
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4]
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8]
        ]
    ];

    const resultsArray = allMagiqSquares.map(subtrMatrices);
    return resultsArray.sort((a, b) => a - b)[0];

    function subtrMatrices(m) {
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                m[i][j] = Math.abs(m[i][j] - s[i][j]);
            }
        }
        return sumMatrix(m);
    
        function sumMatrix(m){
            const result = m.reduce((ac, c) => ac + c.reduce((x, y) => x + y), 0);
            return result;
        }
    }
}
console.log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]]));