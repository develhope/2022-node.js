import * as fs from "node:fs/promises";

// Example: Logging a Promise with a pending state
console.log(fs.readFile("file-1.txt", { encoding: "utf-8" }));

// Example: Promise API, asynchronously read entire file contents.
// Add onFulfilled and onRejected callbacks with promise `then` method.
fs.readFile("file-1.txt", { encoding: "utf-8" }).then(
    function (data) {
        console.log("data:", data);
    },
    function (error) {
        console.error(error);
    }
);

// Example: Using `catch` instead of passing onRejected callback to `then`.
// Will catch any promises that reject in a promise chain.
fs.readFile("file-1.txt", { encoding: "utf-8" })
    .then(function (data) {
        console.log("data:", data);
    })
    .catch(function (error) {
        console.error(error);
    });

// Example: Promise chain reading and outputting the contents of multiple files.
fs.readFile("file-1.txt", { encoding: "utf-8" })
    .then(function (file1Data) {
        console.log("file1Data:", file1Data);
    })
    .then(function() {
        return fs.readFile("file-2.txt", { encoding: "utf-8" });
    })
    .then(function (file2Data) {
        console.log("file2Data:", file2Data);
    })
    .then(function() {
        return fs.readFile("file-3.txt", { encoding: "utf-8" });
    })
    .then(function (file3Data) {
        console.log("file3Data:", file3Data);
    })
    .catch(function (error) {
        console.error(error);
    });

// Example: Promise chain refactored to use arrow function expressions.
fs.readFile("file-1.txt", { encoding: "utf-8" })
    .then((file1Data) => console.log("file1Data:", file1Data))
    .then(() => fs.readFile("file-2.txt", { encoding: "utf-8" }))
    .then((file2Data) => console.log("file2Data:", file2Data))
    .then(() => fs.readFile("file-3.txt", { encoding: "utf-8" }))
    .then((file3Data) => console.log("file3Data:", file3Data))
    .catch((error) => console.error(error));
