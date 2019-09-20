# Array Utilities

## map
```javascript
const calculateSquare = num => (num * num);
const nums = [1, 2, 3, 4, 5];

// find squares
const cppSquares = [];

for (let i = 0; i < nums.length; i++) {
  cppSquares.push(calculateSquare(nums[i]));
}

// equivalent
const jsSquares = nums.map(calculateSquare); // [1, 4, 9, 16, 25] -- new array
```

## forEach
same but synchronous

## filter
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const isEven = num => (num % 2 === 0);

const evenNums = nums.filter(isEven); // [2, 4, 6, 8] -- new array
```

## reduce
```javascript
const miniReduce = (accumulator, num) => (accumulator + num);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let accumulator = 0;
for (let i = 0; i < nums.length; i++) {
  accumulator = miniReduce(accumulator, nums[i]);
}

// equivalent
nums.reduce( miniReduce, 0 ); // 45
```

## every
```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const isPositive = num => (num > 0):

nums.every(isPositive); // true
```
