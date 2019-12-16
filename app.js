const inquirer = require("inquirer");
let MenuController = require("./controllers/MenuController");
const menu = new MenuController();

menu.clear();
menu.main();
