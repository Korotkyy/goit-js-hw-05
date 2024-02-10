// const doMath = (a, b, vinypooh) => {
// const result = vinypooh(a, b);
// console.log(result);
// };
// const add = (x, y) => x + y;
// const sub = (x, y) => y - x;
// const multiply = (a, b) => a * b;

// doMath(1, 5, add);
// doMath(2, 10, sub);
// doMath(5, 10, multiply);

const fruits = [
    { name: 'apples', quantity: 200, isFresh: true },
    { name: 'grapes', quantity: 150, isFresh: true },
    { name: 'bananas', quantity: 100, isFresh: true },
  ];

  const filter = (array, sumCallback) => {
    const newFilterFruit = [];
    for(const fruit of array) {
    const allowed = sumCallback(fruit);
     if (allowed) {
        newFilterFruit.push(fruit)
        }
    } 
    return newFilterFruit
  }
  const callback2 = (fruit) => fruit.quantity >= 100;
  const callback3 = (fruit) => fruit.quantity >= 150;

console.log(filter(fruits, callback2));
console.log(filter(fruits, callback3));