class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working in ${this.department}.`);
    }
}

class Manager extends Employee {
    work() {
        console.log(`${this.name} is managing the ${this.department} team.`);
    }
}

const emp = new Employee("John", "IT");
const mgr = new Manager("Sarah", "Sales");

emp.work();
mgr.work();