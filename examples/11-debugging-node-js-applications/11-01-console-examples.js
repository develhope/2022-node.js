console.log("Hello");

const value1 = "Hello";

console.log(value1);
console.log("Value 1:", value1);
console.log({ value1 });

// ----

const value2 = {
    name: "Mars",
    diameter: 1234,
    stats: {
        stat1: 5678,
        stat2: "another stat",
        stat3: {
            speed: { unit: "mph" },
        },
    },
};

console.log("diameter = %s", value2.diameter);
console.log(
    "diameter = %s and stat2 = %s",
    value2.diameter,
    value2.stats.stat2
);

// ----

console.error(value1);

const valueA = "Hello there (stdout)";
const valueB = "Hello there (stderr)";
console.log(valueA);
console.error(valueB);

// ----

console.assert(value2.name === "Mars", "The planet is not Mars");

// ----

console.log(JSON.stringify(value2));
console.log(JSON.stringify(value2, null, 2));

// ----

console.dir(value2);
console.dir(value2, { depth: 0 });
console.dir(value2, { depth: null });

// ----

const value3 = [
    { name: "Mercury", diameter: 123 },
    { name: "Venus", diameter: 321 },
    { name: "Saturn", diameter: 456 },
    { name: "Neptune", diameter: 654 },
];

console.log(value3);
console.table(value3);

const value4 = [
    123, 321, 456, 654, 123, 321, 456, 654, 123, 321, 456, 654, 123, 321, 456,
    654, 123, 321, 456, 654, 654, 123, 321, 456, 654, 654, 123, 321, 456, 654,
    654, 123, 321, 456, 654, 654, 123, 321, 456, 654, 654, 123, 321, 456, 654,
];

console.log(value4);
console.table(value4);

// ----

function doSomething1() {
    doSomethingElse();
}

function doSomethingElse() {
    console.trace("A helpful message");
}

doSomething1();

// ----

function doSomething2() {
    console.count("doSomethingCalled");
}

doSomething2();
doSomething2();
console.countReset("doSomethingCalled");
doSomething2();

// ----

console.time("numbersLoop");

for (let i = 0; i < 100; i++) {
    console.log(i);
}

console.timeEnd("numbersLoop");
