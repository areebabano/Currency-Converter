#!/usr/bin/env node
import inquirer from "inquirer";

let currency: any = {
    USD: 1, // base currency
    KWD: 0.31,
    OMR: 0.38,
    EUR: 0.92,
    PKR: 277.54,
    JPY: 151.61,
    INR: 83.30
};

let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD","KWD","OMR","EUR","PKR","JPY","INR"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD","KWD","OMR","EUR","PKR","JPY","INR"]
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number"
    }
]); 

let userFromCurrency = answer.from;
let userToCurrency = answer.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let Amount = answer.amount;
let baseAmount = Amount / fromAmount;
let converterAmount = baseAmount * toAmount

console.log(converterAmount);