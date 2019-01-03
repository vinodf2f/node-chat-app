const moment = require('moment');

// let date = moment();

// console.log(date.format('MMM Do, YYYY'));

let createdAt =1;
let g = 1235445;
 let date = moment(createdAt);
console.log(date.format('h:mm a'));

console.log(moment(g).format('h:mm a'));
console.log(moment().valueOf());