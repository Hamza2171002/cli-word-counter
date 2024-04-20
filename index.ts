#! /usr/bin/env node

import inquirer from "inquirer"

const answers: {
    Sentence: string
} = await inquirer.prompt([{
    name: "Sentence",
    message: "Enter your sentence to count words.",
    type: "input",

}])

const words = answers.Sentence.trim().split(" ")
console.log(words);
console.log(`Your Sentence count is ${words.length}`)
