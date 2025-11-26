const user = {
    name: "John",
    showName: () => {
        console.log("Arrow Function Name:", this.name);
    }
};

user.showName();

console.log("Explanation: Arrow functions do not have their own 'this'. They inherit it from the global scope, where 'name' is undefined.");

const fixedUser = {
    name: "John",
    showName: function () {
        console.log("Normal Function Name:", this.name);
    }
};

fixedUser.showName();