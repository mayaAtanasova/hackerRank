function gradingStudents(grades) {
    grades.shift();
    return grades.map(x => x < 38 || (5 - x % 5) >= 3 ? x : x + 5 - x % 5);

}

console.log(gradingStudents([4, 73, 67, 38, 33]));