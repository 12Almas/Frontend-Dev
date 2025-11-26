function Person(name) {
    this.name = name;
}
Person.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
};

function Faculty(name, id) {
    Person.call(this, name);
    this.id = id;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function () {
    console.log(`${this.name} is teaching.`);
};

function Professor(name, id, subject) {
    Faculty.call(this, name, id);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.publishPaper = function () {
    console.log(`${this.name} published a paper in ${this.subject}.`);
};

const prof = new Professor("Dr. Smith", 101, "Physics");
prof.eat();
prof.teach();
prof.publishPaper();