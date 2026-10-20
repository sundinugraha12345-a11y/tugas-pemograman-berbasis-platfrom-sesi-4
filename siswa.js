let studentScore = [
    {name: 'andy', score: 90},
    {name: 'rudi', score: 80},
    {name: 'caca', score: 100}
];

let highestScore = studentScore.reduce((max, student) => 
    student.score > max.score ? student : max
);
console.log("==========================");
console.log(`highest score ${highestScore.score} by ${highestScore.name}`);
console.log("==========================");