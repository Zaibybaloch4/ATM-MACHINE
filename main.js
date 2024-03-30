#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPinCode = 5678;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: " enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPinCode) {
    console.log("your pin code is correct!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What you want to do",
            type: "list",
            choices: ["withdraw", "fastcash", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`"The remaining balance is ${balance}"`);
        }
        else {
            console.log("INSUFFICIENT BALANCE");
        }
    }
    else if (operationAns.operation === "fastcash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["5000", "10000", "20000", "50000", "100000"],
            },
        ]);
        if (fastcashAns.amount <= myBalance) {
            let balance2 = myBalance - fastcashAns.amount;
            console.log(`your remaining balance is ${balance2}`);
        }
        else {
            console.log("INSUFFICIENT BALAANCE");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("your pin code is wrong!");
}
