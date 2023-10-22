//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let input = require('readline-sync');

let startingFuelLevel = 10000;
let astronautsAboard = 5;
let altitudeReached = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */


while (true) {
  let userInput = input.question("Enter the starting fuel level (between 5000 and 30000):");
  startingFuelLevel = parseInt(userInput);

  if (!Number.isNaN(startingFuelLevel) && startingFuelLevel > 5000 && startingFuelLevel < 30000) {
    break; // Exit the loop if the input is valid
  } else {
    ("Please enter a number between 5000 and 30000.");
  }
}

console.log("Starting fuel level:", startingFuelLevel);





//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  

while (true) {
  let userInput = input.question("Enter the number of astronauts (up to a maximum of 7):");
  astronautsAboard = parseInt(userInput);

  if (!Number.isNaN(astronautsAboard) && astronautsAboard >= 0 && astronautsAboard <= 7) {
    break;
  } else {
    alert("Please enter a valid positive integer up to a maximum of 7.");
  }
}

console.log("Number of astronauts aboard:", astronautsAboard);

  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuelLevel > 0) {
 
  let fuelConsumption = astronautsAboard * 100;

  
  startingFuelLevel -= fuelConsumption;


  altitudeReached += 50;

  console.log("Altitude: " + altitudeReached + " km");
  console.log("Fuel Level: " + startingFuelLevel + " units");

  if (startingFuelLevel <= 0) {
    console.log("Out of fuel. The shuttle can't ascend further.");
    break;
  }
}

console.log("Shuttle has reached its final altitude of " + altitudeReached + " km.");


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/


while (startingFuelLevel > 0) {

  const fuelConsumption = astronautsAboard * 100;


  startingFuelLevel -= fuelConsumption;

  
  altitudeReached += 50;

  console.log("Altitude: " + altitudeReached + " km");
  console.log("Fuel Level: " + startingFuelLevel + " units");

  if (altitudeReached >= 2000) {
    console.log("Orbit achieved!");
    break;
  }

  if (startingFuelLevel <= 0) {
    console.log("Failed to reach orbit.");
    break;
  }
}

console.log("The shuttle gained an altitude of " + altitudeReached + " km.");
