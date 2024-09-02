#!/usr/bin/env node
import chalk from "chalk";
console.log(chalk.bold.blue("\t-----------------------------"));
console.log(chalk.bold.blue("\n\t Welcome to Karachi Bank \n"));
console.log(chalk.bold.blue("\t-----------------------------"));
class BankAccount {
    accountBalance;
    constructor() {
        this.accountBalance = 100;
    }
    debit(amount) {
        let statment = chalk.bold.green("Sorry! you have insufficiant Balance");
        if (amount > 0) {
            statment = chalk.bold.green("The amount you entered is wrong");
            if (this.accountBalance > amount) {
                this.accountBalance -= amount;
                statment = chalk.bold.green(`\n Transaction Successful New Account Balance is ${this.accountBalance} \n`);
            }
            else {
                statment = chalk.bold.green("You don't have enough Money to do this Transaction");
            }
        }
        console.log(statment);
        return statment;
    }
    credit(amount) {
        let statment = chalk.bold.green("Transaction Failed!");
        if (amount > 0) {
            this.accountBalance += amount;
            if (amount > 100) {
                this.accountBalance -= 1;
            }
            statment = chalk.bold.green(`\n Your Account has been Credited successfully, New Account Balance is ${this.accountBalance} \n`);
        }
        console.log(statment);
        return statment;
    }
}
class Customer {
    firstName;
    lastName;
    gender;
    age;
    mobileNumber;
    balance;
    constructor(fName, lName, gender, age, mobNo, bal) {
        this.firstName = fName;
        this.lastName = lName;
        this.gender = gender;
        this.age = age;
        this.mobileNumber = mobNo;
        this.balance = bal;
    }
}
let bankAccount = new BankAccount();
bankAccount.debit(10);
bankAccount.credit(500);
let customer = new Customer("Kashaf", "Fahim", "Female", 20, 322587488, bankAccount);
console.log(chalk.bold.blue("\t-------------------"));
console.log(chalk.bold.blue("\n\t Customer Data \n"));
console.log(chalk.bold.blue("\t-------------------"));
console.log(customer);
