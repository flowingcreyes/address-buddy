let inquirer = require("inquirer");
let ContactController = require("./ContactController");

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
    this.book = new ContactController();
  }
  main() {
    console.log("Welcome to AddressBuddy!");
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch (response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
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
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!")
        this.main()
      }).catch((err) => {
        console.log(err)
        this.main()
      })
    })
  }

  exit() {
    console.log("See you really soon!");
    process.exit();
  }

  getContactCount() {
    return this.contacts.length;
  }
};
