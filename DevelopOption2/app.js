// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const path = require("path");
const inquirer = require("inquirer")
const fs = require("fs");
const engineerCard = require("./htmlRender/engineerCard");
const internCard = require("./htmlRender/internCard");
const managerCard = require("./htmlRender/managerCard");
const mainRender = require("./htmlRender/mainRender");


const outputPath = path.resolve(__dirname, "output", "team.html"); //this html file will go into output folder

const teamMember = []; // empty array-- each card will go into this array

function mainApp() { //you are asking the questions
    // create a manager
    inquirer    
        .prompt([
        
        ])
        .then(answers =>{
            
        })

}
// this function create a list to add teammembers
function createTeam(){ // this is where we do a switch statement--first is the manager question this will give you the option to select the team of intern, engineer etc.

    inquirer
        .prompt([ //list choice of the options for the team 
            
        ])
        .then(answers => {
            // create a switch statement to choose between engineer, intern, or build team
           
        })
}

// a function that create an engineer
function getEngineer() {

    inquirer    
        .prompt([
            

        ])
        .then(answers =>{
           
        })

}
// a function that create an intern
function getIntern() {

    inquirer    
        .prompt([
          

        ])
        .then(answers =>{
          
        })

}

function buildTeam() {
fs.writeFileSync(outputPath, mainRender(teamMember), "utf-8");
}

mainApp()


