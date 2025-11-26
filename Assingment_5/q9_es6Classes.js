class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Hi, I am ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`I study ${this.branch}`);
    }
}

const studentES6 = new Student("Sarah", "Information Technology");
studentES6.introduce();
studentES6.showBranch();