class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateAverage() {
    const total = this.marks.reduce((sum, mark) => sum + mark, 0);
    const average = total / this.marks.length;

    if (average >= 90) return 'A';
    if (average >= 75) return 'B';
    if (average >= 50) return 'C';
    return 'F';
  }
}

const student1 = new Student("Alice", [95, 88, 92]);
const student2 = new Student("Bob", [70, 65, 80]);
const student3 = new Student("Charlie", [40, 50, 45]);

console.log(`${student1.name}: Grade ${student1.calculateAverage()}`);
console.log(`${student2.name}: Grade ${student2.calculateAverage()}`);
console.log(`${student3.name}: Grade ${student3.calculateAverage()}`);