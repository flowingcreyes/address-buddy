let inquirer = require("inquirer");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new contact", "Exit"]
      }
    ];
    this.contacts = [];
  }
  main() {
    console.log("Welcome to AddressBuddy!");
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
        }
    })
  }
  clear() {
    console.log("\x1Bc");
  }
  addContact() {
    this.clear();
    console.log("addContact called");
    this.main();
  }

  exit() {
    console.log("AddressBuddy says goodbye!");
    process.exit();
  }
};
