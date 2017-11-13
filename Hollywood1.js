/**
 *   @author Essmaker, Jo'Anne (joannessmaker@gmail.com)
 *   @summary Project 3 || created: 10/15/2017
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movieRating1, movieRating2, movieRating3, totalRatingSum, averageRating;
let movieTitle;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    if (continueResponse === 1) {
        setMovieTitle();
        setMovieRating1();
        setMovieRating2();
        setMovieRating3();
        setTotalRatingSum();
        setAverageRating();
        printAverageRating();
        setContinueResponse();
    }
    printGoodbye();
}

main();

/**
 * @method setMovieTitle
 * @desc Input Movie Title
 */
function setMovieTitle() {
    movieTitle = PROMPT.question(`\nPlease Enter the Movie Title You Would Like to Rate: `);
}

/**
 * @method setMovieRating1
 * @desc Rating of Action Sequences
 */
function setMovieRating1() {
    movieRating1 = Number(PROMPT.question(`\tHow Many Stars Would You Rate the Action Sequences for ${movieTitle}? `));
    if (movieRating1 < 0 || movieRating1 > 5) {
        console.log(`I'm Sorry, Please rate this Movie from 0-5 Stars. Please Try Again. `);
        return setMovieRating1();
    }
}

/**
 * @method setMovieRating2
 * @desc Rating of Plot
 */
function setMovieRating2() {
    movieRating2 = Number(PROMPT.question(`\tHow Many Stars Would You Rate the Plot for ${movieTitle}? `));
    if (movieRating2 < 0 || movieRating2 > 5) {
        console.log(`I'm Sorry, Please rate this Movie from 0-5 Stars. Please Try Again. `);
        return setMovieRating2();
    }
}

/**
 * @method setMovieRating3
 * @desc Rating of Main Character
 */
function setMovieRating3() {
    movieRating3 = Number(PROMPT.question(`\tHow Many Stars Would You rate the Main Character in ${movieTitle}? `));
    if (movieRating3 < 0 || movieRating3 > 5) {
        console.log(`I'm Sorry, Please rate this Movie from 0-5 Stars. Please Try Again. `);
        return setMovieRating3();
    }
}

/**
 * @method setTotalRatingSum
 * @desc Sum of all three ratings
 */
function setTotalRatingSum() {
    totalRatingSum = (movieRating1 + movieRating2 + movieRating3);
}

/**
 * @method setAverageRating
 * @desc Average of all three ratings
 */
function setAverageRating() {
    averageRating = totalRatingSum / 3;
}

/**
 * @method printAverageRating
 * @desc Print Average Rating To Screen
 */
function printAverageRating() {
    console.log(`\tThe Average Rating for ${movieTitle} is ${averageRating} `)
}

/**
 * @method setContinueResponse
 * @desc Continue Response
 */
function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method printGoodbye
 * @desc
 */
function printGoodbye() {
    console.log(`\nThank You! Goodbye.`);
}

/*
Design a program for the Hollywood Movie Rating Guide, in which users continuously enter
a value from 0 to 5 that indicates the number of stars they are awarding to a movie title
they are prompted for. The program executes continuously until a user decides to quit.
If a user enters a star value that does not fall in the correct range, re-prompt the user
three (3) times until a correct value is entered. At the end of the program, display the
average star rating for the movie.
 */