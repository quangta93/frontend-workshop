# const & let


## const
```javascript
const constantVariable = 'constant variable should never change';
constantVariable = 'failed attempt'; // TypeError

const httpRequest = {
  protocol: 'https',
  url: 'google.com',
  data: {
    username: 'admin',
    password: '12345678',
  },
};

httpRequest.url = 'facebook.com'; // acceptable
// constant = constant reference/memory address

const fruits = ['banana', 'orange', 'apple'];
fruits.push('peach'); // acceptable
```

## let
```javascript
let mutableVariable = 'will change later';
mutableVariable = 'changing without errors';
```

## Why const & let?
- program work as intended
  - cannot use before declaration (no hoisting)
  - cannot use after the block scope is over i.e. expected variables to be destroyed
- avoid name collision. reusable variable names.
  - function vs block scope

```javascript
const num = 12; // global

function() {
  let num = 11; // change this num doesn't change the global's num
  num = 99 * 12;
}
```
