const marks = [88, 92, 75, 60, 95];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const percentage = totalMarks / marks.length;
let isDetained = false;

for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        isDetained = true;
        break;
    }
}

if (isDetained) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}