# Exercises for Unit 9: Asynchronous control flow

## Exercise 1: Use a method with a callback

> _After Unit 9, Lesson 1: Callbacks_

Create a script that uses the Node.js core `fs.writeFile()` (callback API) method to write a text file. The documentation for this method is on the [Node.js File system](https://nodejs.org/api/fs.html#fswritefilefile-data-options-callback) page.

## Exercise 2: Promises lucky draw

> _After Unit 9, Lesson 2: Promises_

The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

Log out the resolved value for each promise and handle any promise rejections in the chain.

```javascript
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
```

## Exercise 3: await the lucky draw results

> _After Unit 9, Lesson 3: async and await_

Create a `getResults` function that uses `async` and `await`. Inside of the function, call the `luckyDraw` function for each of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle any promise rejections.

```javascript
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}
```

## Exercise 4: Listen to the news

> _After Unit 9, Lesson 5: Other asynchronous patterns_

The `newsEvent` object continuously emits three different events: `newsEvent`, `breakingNews` and `error`

Attach event listeners for each event and log out their data.

```javascript
const { EventEmitter } = require("node:events");

function createNewsFeed() {
  const emitter = new EventEmitter();

  setInterval(() => {
    emitter.emit("newsEvent", "News: A thing happened in a place.");
  }, 1000);

  setInterval(() => {
    emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
  }, 4000);

  setTimeout(() => {
    emitter.emit("error", new Error("News feed connection error"));
  }, 5000);

  return emitter;
}

const newsFeed = createNewsFeed();
```
