/*
 *  Elections.ts
 *  Project: First Exercise
 *
 *  Author: Seth Gage
 *  Created on: Jan 17, 2023
 */

type Candidate = {
  name: string;
  votes: Array<number>;
  funding: number;
};

const edward: Candidate = {
  name: 'Edward Underwood',
  votes: [192, 147, 186, 114, 267],
  funding: 58182890,
};

// Make the other three candidates
const rose: Candidate = {
  name: 'Rose Olson',
  votes: [48, 90, 12, 21, 13],
  funding: 78889263,
};

const leonard: Candidate = {
  name: 'Leonard Willis',
  votes: [206, 312, 121, 408, 382],
  funding: 36070689,
};
const nathaniel: Candidate = {
  name: 'Nathaniel Taylor',
  votes: [37, 21, 38, 39, 29],
  funding: 6317921937,
};

// Add your other three candidates to this array
const candidates: Array<Candidate> = [edward, rose, leonard, nathaniel];

const edwardsVotes =
  candidates[0].votes[0] +
  candidates[0].votes[1] +
  candidates[0].votes[2] +
  candidates[0].votes[3] +
  candidates[0].votes[4];

const roseVotes =
  candidates[1].votes[0] +
  candidates[1].votes[1] +
  candidates[1].votes[2] +
  candidates[1].votes[3] +
  candidates[1].votes[4];

const leonardVotes =
  candidates[2].votes[0] +
  candidates[2].votes[1] +
  candidates[2].votes[2] +
  candidates[2].votes[3] +
  candidates[2].votes[4];

const nathanielVotes =
  candidates[3].votes[0] +
  candidates[3].votes[1] +
  candidates[3].votes[2] +
  candidates[3].votes[3] +
  candidates[3].votes[4];

const totalVotes = edwardsVotes + roseVotes + leonardVotes + nathanielVotes;

const precinct1Votes =
  candidates[0].votes[0] + candidates[1].votes[0] + candidates[2].votes[0] + candidates[3].votes[0];

const precinct2Votes =
  candidates[0].votes[1] + candidates[1].votes[1] + candidates[2].votes[1] + candidates[3].votes[1];

const precinct3Votes =
  candidates[0].votes[2] + candidates[1].votes[2] + candidates[2].votes[2] + candidates[3].votes[2];

const precinct4Votes =
  candidates[0].votes[3] + candidates[1].votes[3] + candidates[2].votes[3] + candidates[3].votes[3];

const precinct5Votes =
  candidates[0].votes[4] + candidates[1].votes[4] + candidates[2].votes[4] + candidates[3].votes[4];

console.log(
  candidates[0].name,
  ' -- ',
  candidates[0].votes[0] +
    candidates[0].votes[1] +
    candidates[0].votes[2] +
    candidates[0].votes[3] +
    candidates[0].votes[4],
  'votes -- ',
  ((edwardsVotes / totalVotes) * 100).toFixed(2),
  '%'
);

console.log(
  candidates[1].name,
  ' -- ',
  candidates[1].votes[0] +
    candidates[1].votes[1] +
    candidates[1].votes[2] +
    candidates[1].votes[3] +
    candidates[1].votes[4],
  'votes -- ',
  ((roseVotes / totalVotes) * 100).toFixed(2),
  '%'
);

console.log(
  candidates[2].name,
  ' -- ',
  candidates[2].votes[0] +
    candidates[2].votes[1] +
    candidates[2].votes[2] +
    candidates[2].votes[3] +
    candidates[2].votes[4],
  'votes -- ',
  ((leonardVotes / totalVotes) * 100).toFixed(2),
  '%'
);

console.log(
  candidates[3].name,
  ' -- ',
  candidates[3].votes[0] +
    candidates[3].votes[1] +
    candidates[3].votes[2] +
    candidates[3].votes[3] +
    candidates[3].votes[4],
  'votes -- ',
  ((nathanielVotes / totalVotes) * 100).toFixed(2),
  '%',
  '\n'
);

console.log(
  candidates[0].name,
  ':',
  '\n\tPrecinct 1 -- ',
  ((candidates[0].votes[0] / precinct1Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 2 -- ',
  ((candidates[0].votes[1] / precinct2Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 3 -- ',
  ((candidates[0].votes[2] / precinct3Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 4 -- ',
  ((candidates[0].votes[3] / precinct4Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 5 -- ',
  ((candidates[0].votes[4] / precinct5Votes) * 100).toFixed(2),
  '%',
  '\n'
);

console.log(
  candidates[1].name,
  ':',
  '\n\tPrecinct 1 -- ',
  ((candidates[1].votes[0] / precinct1Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 2 -- ',
  ((candidates[1].votes[1] / precinct2Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 3 -- ',
  ((candidates[1].votes[2] / precinct3Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 4 -- ',
  ((candidates[1].votes[3] / precinct4Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 5 -- ',
  ((candidates[1].votes[4] / precinct5Votes) * 100).toFixed(2),
  '%',
  '\n'
);

console.log(
  candidates[2].name,
  ':',
  '\n\tPrecinct 1 -- ',
  ((candidates[2].votes[0] / precinct1Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 2 -- ',
  ((candidates[2].votes[1] / precinct2Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 3 -- ',
  ((candidates[2].votes[2] / precinct3Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 4 -- ',
  ((candidates[2].votes[3] / precinct4Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 5 -- ',
  ((candidates[2].votes[4] / precinct5Votes) * 100).toFixed(2),
  '%',
  '\n'
);

console.log(
  candidates[3].name,
  ':',
  '\n\tPrecinct 1 -- ',
  ((candidates[3].votes[0] / precinct1Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 2 -- ',
  ((candidates[3].votes[1] / precinct2Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 3 -- ',
  ((candidates[3].votes[2] / precinct3Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 4 -- ',
  ((candidates[3].votes[3] / precinct4Votes) * 100).toFixed(2),
  '%',
  '\n\tPrecinct 5 -- ',
  ((candidates[3].votes[4] / precinct5Votes) * 100).toFixed(2),
  '%',
  '\n'
);

console.log(
  candidates[0].name,
  'spent $',
  (candidates[0].funding / edwardsVotes).toFixed(2),
  'per vote'
);
console.log(
  candidates[1].name,
  'spent $',
  (candidates[1].funding / roseVotes).toFixed(2),
  'per vote'
);
console.log(
  candidates[2].name,
  'spent $',
  (candidates[2].funding / leonardVotes).toFixed(2),
  'per vote'
);
console.log(
  candidates[3].name,
  'spent $',
  (candidates[3].funding / nathanielVotes).toFixed(2),
  'per vote'
);
