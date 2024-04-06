#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n**********WELLCOME TO RAJPOOT CURRENCY CONVERTER**********\n"));
let currency = {
    USD: 1,
    MYR: 4.75,
    CNY: 7.23,
    HKD: 7.83,
    MVR: 15.46,
    THB: 36.52,
    PHP: 56.59,
    AFG: 71.23,
    BTN: 83.17,
    INR: 83.30,
    BDT: 109.60,
    NPR: 133.08,
    PKR: 277.54,
    LKR: 298.61,
    IDR: 15887.75,
    MMK: 2097.05,
    IRR: 42075.00
};
let user_ans = await inquirer.prompt([
    {
        name: "from",
        message: (chalk.cyanBright.bold("Enter From Currency?")),
        type: "list",
        choices: ["USD", "MYR", "CNY", "HKD", "MVR", "THB", "PHP", "AFG", "BTN", "INR", "BDT", "NPR", "PKR", "LKR", "IDR", "MMK", "IRR"]
    },
    {
        name: "to",
        message: (chalk.greenBright.bold("Enter To Currency?")),
        type: "list",
        choices: ["USD", "MYR", "CNY", "HKD", "MVR", "THB", "PHP", "AFG", "BTN", "INR", "BDT", "NPR", "PKR", "LKR", "IDR", "MMK", "IRR"]
    },
    {
        name: "amount",
        message: (chalk.redBright.bold("Enter Your Amount?")),
        type: "number"
    }
]);
let fromAmount = user_ans.from;
let toAmount = user_ans.to;
let amount = user_ans.amount;
let answer = (amount / currency[fromAmount] * currency[toAmount]);
console.log(chalk.blackBright.bold(answer));
console.log(chalk.blueBright.bold("\n!!!!!!!!!!THANK YOU!!!!!!!!!!\n"));
// let baseAmount = amount / fromAmount;
// let convertedAmount = baseAmount * toAmount;
// console.log(convertedAmount)
