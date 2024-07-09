#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000 ;  //dolars
let myPin= 4321;

let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type :"number",
        message:"Enter your pin"
    }
]);

if (pinAnswer.pin=== myPin){
    console.log("correct pin number!");
    let operationAns = await inquirer.prompt([
        {
            name:"operation",
            message:"choose operation to perform",
            type:"list",
            choices: [ 
                { name: "Withdraw", value: "withdraw" },
                { name: "Fast Cash", value: "fast cash" },
                { name: "Check Balance", value: "check balance" }
            ]
        }, 

    ]);
    console.log(operationAns);
    if(operationAns.operation === "withdraw"){
        let amountAns =await inquirer.prompt([
            {
                name :"amount",
                type:"number",
                message:"enter your amount"
            }
        ])
        
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance. Please try again.");
          } else {
            console.log(`Your remaining balance is: ${myBalance -= amountAns.amount}`);
          } 
    }  

    else if (operationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt([
          {
            name: "fastCash",
            message: "Choose fast cash amount",
            type: "list",
            choices: [
              { name: "$00", value: 500 },
              { name: "$1000", value: 1000 },
              { name: "$1500", value: 1500 }
            ]
          }
        ]);
        if (fastCashAns.fastCash > myBalance) {
          console.log("Insufficient balance. Please try again.");
        } else {
          console.log(`You withdrew ${fastCashAns.fastCash}. Your remaining balance is: ${myBalance -= fastCashAns.fastCash}`);
        }
    }
    else if(operationAns.operation === "check balance"){
        console.log("your balance is: " + myBalance);
    }

}
else{
    console.log("incorrect pin number");
}
