"use strict";
let Age = "27";
Age = 5;
console.log(Age);
let arr1 = ["ali", 1];
let namee = "ali";
namee = 5;
var Move;
(function (Move) {
    Move[Move["Comedy"] = 0] = "Comedy";
    Move[Move["Drama"] = 1] = "Drama";
    Move[Move["Action"] = 2] = "Action";
})(Move || (Move = {}));
console.log(Move.Action);
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log('add', add(5, 4));
console.log('sub', sub(10, 4));
