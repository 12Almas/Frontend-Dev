function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Hi, I am ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`I study ${this.branch}`);
};

const student1 = new Student("Mike", "Computer Science");
student1.introduce();
student1.showBranch();