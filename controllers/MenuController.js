let inquirer = require("inquirer");

module.exports = class MenuController {
  constructor() {
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below: ",
        choices: ["Add new contact", "Get date", "Exit"]
      }
    ];
    this.contacts = [];
  }
  main() {
    console.log("Welcome to AddressBuddy!");
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch (response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
          break;
        case "Get date":
          this.getDate();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("invalid input");
          this.main();
      }
    })
      .catch((err) => {
        console.log(err)
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
    console.log("Hope to see you soon!");
    process.exit();
  }
  getDate() {
    let date = new Date();
    console.log(date)
    this.main()
  }
};
