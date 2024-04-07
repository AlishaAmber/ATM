import inquirer from "inquirer";
let myBalance = 27000; // Dollar
let pinCode = 4545;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    },
]);
if (pinAnswer.pin == pinCode) {
    console.log("Correct pin code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["Withdraw", "Fast cash", "Check balance"],
        },
    ]);
    //console.log(operationAns);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        // = += -=
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Fast cash") {
        let fast = await inquirer.prompt([
            {
                name: "Fastcash",
                message: "select the amount which you withdrawal",
                type: "list",
                choices: [1000, 2000, 5000, 27000],
            },
        ]);
        myBalance -= fast.Fastcash;
        console.log(`You have successfully withdrawal ${fast.Fastcash} \nYour remaining balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code");
}
