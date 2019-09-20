# Async/Await

## Promise
Represent an asynchronous operation that will return a value in the future.

3 states:
- pending
- fulfilled
- rejected

```javascript
const promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');

    new Promise().then().catch();
  }, 1000);

  // reject(new Error('explanation'));
});

promise
  .then(function(value) {
    console.log(value);
    // expected output: "foo"
  })
  .catch(error => {
    // errror = Error('explanation')
  });
```

## Async/Await
An `async` function can contain an `await` expression that pauses the execution of the async function and waits for the passed Promise's resolution, and then resumes the async function's execution and evaluates as the resolved value.

The best way to make an asynchronous function i.e. a function that will return a value sometime in the future.

```javascript
const getGoogleResponseHeader = async () => {
  const response = await fetch('https://www.google.com'); // fetch returns a promise
  return response.header; // not executed until await resolves
};

getGoogleResponseHeader = () => new Promise(
  (resolve, reject) => {
    try {
      const response = await fetch('https://www.google.com');
      await fetch('https://facebook.com');
      resolve(response.header);
    } catch(error) {
      reject(error);
    }
  }
);

getGoogleResponseHeader();
```
