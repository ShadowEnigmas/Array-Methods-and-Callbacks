import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const worldFinals2014 = fifaData.filter( (element) => {return element.stage == "Final", element.Year === 2014} );
//Task 1, part (a)
console.log(worldFinals2014.HomeTeamName);
//Task 1, part (b)
console.log(worldFinals2014.AwayTeamName);
//Task 1, part (c)
console.log(worldFinals2014.HomeTeamGoals);
//Task 1, part (d)
console.log(worldFinals2014.AwayTeamGoals);
//Task 1, part (e)
if (worldFinals2014.HomeTeamGoals > worldFinals2014.AwayTeamGoals){
    console.log(worldFinals2014.HomeTeamName);
} else {
    console.log(worldFinals2014.AwayTeamName);
}
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals() {
    const worldFinals = fifaData.filter( (element) => {return element.stage == "Final"} );
    return worldFinals;
};
console.log(getFinals());

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callFunction) {
    const finalYears = [];
    finalYears.push(callFunction().years);
    console.log(finalYears);
}
getYears();

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callFunction) {
    const winners = [];
    if(callFunction.HomeTeamGoals > callFunction.AwayTeamGoals){
        winners.push(callFunction.HomeTeamName);
    } else{
        winners.push(callFunction.AwayTeamName);
    }
    console.log(winners);
};

getWinners();

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
