let Age: string = "27";

Age = 5;
console.log(Age);

let arr1: [number, string] = ["ali", 1];

let namee: string | number = "ali";

namee = 5;

enum Move {
  Comedy,
  Drama,
  Action,
}

console.log(Move.Action);

interface Mathfunc {
  (x: number, y: number): number;
}

const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

console.log('add', add(5,4))
console.log('sub', sub(10,4))
