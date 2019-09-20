# Spread, Rest, and Destructuring

## Destructure
```javascript
const httpRequest = {
  baseUrl: 'https://localhost:3000',
  url: '/info',
  method: 'post',
  body: {
    firstName: 'Quang',
    lastName: 'Tran',
  },
};

const url = httpRequest.url;

// Equivalent
const { url, baseUrl, method } = httpRequest; // destructure

const nums = [1, 2, 3, 4];
const [firstNum, secondNum, thirdNum] = nums;
// 1, 2, 3
```

## Rest
Represent an infinite number of arguments as array or object.
```javascript
const { url, ...rest } = httpRequest;

rest = {
  baseUrl,
  method,
  body,
};

const nums = [1, 2, 3, 4];
const [firstNum, secondNum, thirdNum, ...rest] = nums;
rest = [4]

const sum = (...args) => (first * args.reduce((acc, num) => (acc + num), 0));
sum(1, 2, 3, 4); // valid
sum(1, 2); // valid
sum(1, 2, 3, 4, 5, 6, 7, 8); // valid
```

## Spread
Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```javascript
const nums = [1, 2, 3, 5];

// insert 4 in the right place
const newNums = [];
for (let i = 0; i < nums.length; i++) {
  if (i !== 3) {
    newNums.push(nums[i]);
  } else {
    newNums.push(4);
    newNums.push(nums[3]);
  }
}

// alternative
const newNums = [
  ...nums.slice(0, 3), // 1, 2, 3
  4, // 4
  ...nums.slice(3), // 5
]; // [1, 2, 3, 4, 5]

// merge 2 arrays
const first = [1, 2, 3];
const second = [4, 5, 6];
const final = [...first, ...second];

const arr = [1, 2, 3, 4];
const clonedArr = [...arr]; // arr.slice(0)
```
