const someTask = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("This is some data"), 2000);
});

console.log("someTask:", someTask);

someTask.then(
    // onFulfilled callback
    function (value) {
        console.log("value:", value);
        console.log("someTask:", someTask);
    },
    // onRejected callback
    function (reason) {
        console.error("reason:", reason);
        console.log("someTask:", someTask);
    }
);
