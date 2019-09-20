# Default Arguments

```javascript
// old way
function sumOfList(list) {
  if (!list) {
    // sumOfList() crashes without this
    list = []
  }

  return list.reduce((sum, num) => (sum + num), 0);
}

// new way
const sumOfList2 = (list = []) => list.reduce((sum, num) => (sum + num), 0);

const sum = (a = 0, b = 0) => (a + b);
sum(); // 0
sum(2); // 2
```
