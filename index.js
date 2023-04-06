#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow("Lets start calculation");
    await sleep();
    rainbowTitle.stop();
    console.log();
    console.log(chalk.blue(`_____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|)`));
}
await welcome();
async function askQuestion() {
    await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "Which operation you want to perform",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your first number:",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second number:",
        },
    ])
        .then((answers) => {
        if (answers.operator == "Addition") {
            console.log(`${answers.num1} + ${answers.num2}= ${answers.num1 + answers.num2} `);
        }
        else if (answers.operator == "Subtraction") {
            console.log(`${answers.num1} - ${answers.num2}= ${answers.num1 - answers.num2} `);
        }
        else if (answers.operator == "Multiplication") {
            console.log(`${answers.num1} * ${answers.num2}= ${answers.num1 * answers.num2} `);
        }
        else if (answers.operator == "Division") {
            console.log(`${answers.num1} / ${answers.num2}= ${answers.num1 / answers.num2} `);
        }
    });
}
//askQuestion();
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to contine press y or n:",
            },
        ]);
    } while (again.restart == "y" ||
        again.restart == "Y" ||
        again.restart == "yes" ||
        again.restart == "YES");
}
startAgain();
