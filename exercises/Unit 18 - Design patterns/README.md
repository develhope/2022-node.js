# Exercises for Unit 18: Design patterns

## Exercise 1: Apply the singleton pattern

> _After Unit 18, Lesson 2: Singleton pattern_

Create a module containing a class, with a method named `output` that logs any value that's passed to it.

Apply the singleton pattern to export a single instance of the class from the module.

## Exercise 2: Fix the adapter

> _After Unit 18, Lesson 3: Adapter pattern_

The `Logger` class expects any `logStorage` object it receives to implement a `write` and a `read` method.

Fix the `LogStorageFSAdapter` class so that it provides the methods the `Logger` class expects.

```javascript
const fs = require("node:fs/promises");

class Logger {
  constructor(logStorage) {
    this.logStorage = logStorage;
  }

  async info(message) {
    await this.logStorage.write(`[INFO] ${message}\n`);
  }

  async error(message) {
    await this.logStorage.write(`[ERROR] ${message}\n`);
  }

  async replay() {
    console.log(await this.logStorage.read());
  }
}

class LogStorageFSAdapter {
  constructor(filepath) {
    this.filepath = filepath;
  }

  async appendFile(message) {
    try {
      await fs.appendFile(this.filepath, `[INFO] ${message}\n`);
    } catch (error) {
      console.error(error);
    }
  }

  async readFile() {
    try {
      return await fs.readFile(this.filepath, { encoding: "utf-8" });
    } catch (error) {
      console.error(error);
    }
  }
}

const fsStorage = new LogStorageFSAdapter("output.log");

const logger = new Logger(fsStorage);

logger.info("Some information");

logger.error("A bit of an issue");

logger.error("A catastrophic error!");

logger.info("The best information");

logger.replay();
```

## Exercise 3: Shout with a decorator

> _After Unit 18, Lesson 4: Decorator pattern_

Implement a `toString` method on the `Shout` class that decorates the `toString` method for a `Text` class instance.

It should use the [toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) method to convert the `Text` instance string to uppercase.

```javascript
class Text {
  constructor(text) {
    this.string = text;
  }

  toString() {
    return this.string;
  }
}

class Shout {
  constructor(text) {
    this.text = text;
  }
}

console.log(new Text("Hello, I'm talking").toString());

console.log(new Shout(new Text("Hello, I'm shouting!")).toString());
```

## Exercise 4: Inject the bike dependencies

> _After Unit 18, Lesson 5: Dependency injection pattern_

Complete this code to inject the `Wheel` instance dependencies into the `Bike` instance.

```javascript
class Bike {
  constructor() {}

  specification() {
    let message = `${this.wheel1.label} wheel diameter = ${this.wheel1.diameter}`;
    message += `, ${this.wheel2.label} wheel diameter = ${this.wheel2.diameter}`;

    return message;
  }
}

class Wheel {
  constructor(label, diameter) {
    this.label = label;
    this.diameter = diameter;
  }
}

const frontWheel = new Wheel("Front", 126);
const backWheel = new Wheel("Back", 42);

const bike = new Bike();

console.log(bike);

console.log("Bike specification:", bike.specification());
```
