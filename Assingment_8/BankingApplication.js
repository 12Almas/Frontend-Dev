class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: ${amount}. New Balance: ${this.#balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient funds.");
        }
        this.#balance -= amount;
        console.log(`Withdrawn: ${amount}. Remaining Balance: ${this.#balance}`);
    }

    getBalance() {
        return this.#balance;
    }
}

const myAccount = new BankAccount(1000);

try {
    myAccount.deposit(500);
    myAccount.withdraw(200);
    myAccount.withdraw(2000);
} catch (error) {
    console.log("Transaction Failed:", error.message);
}