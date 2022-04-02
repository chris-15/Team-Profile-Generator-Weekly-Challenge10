// declaring variables for file dependencies needed
const managerCard = require("./managerCard");
const engineerCard = require("./engineerCard");
const internCard = require("./internCard");
const body = require("./bodyHtml");

//function to generate html page
function generateHtml(data) {
    let cards = "";

    // loop through each team constructor 
    for(let i=0; i< data.length; i++) {
        const employee = data[i];

        if(employee.getRole()=== "Manager") {
            cards += managerCard(employee)
        } else if(employee.getRole() === "Engineer"){   
            cards+= engineerCard(employee)
        } else {
            cards += internCard(employee)
        }
    }

    const html = body(cards);

    return html
}

module.exports = generateHtml;