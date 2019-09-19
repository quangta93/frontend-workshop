# Arrow Function

## Syntax
Alternative to function declaration
```javascript
function sum(a, b) {
  return (a + b);
}

// equivalent
const equivalentSum = (a, b) => (a + b);
```

## this
- `function` declaration: `this` depends on caller & called context
- arrow function: `this` depends on declaration context
  - ez to read
  - program work as intended. no surprises.

```javascript
class Person {
  constructor(cp) {
    this.catchphrase = cp;
  }

  speak() {
    console.log(this.catchphrase);
  }
}

const whenGreeted = (response) => {
  response();
};

const person = new Person('goof');
person.speak();

whenGreeted(person.speak);
```
