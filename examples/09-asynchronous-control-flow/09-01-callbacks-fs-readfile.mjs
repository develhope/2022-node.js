import * as fs from "node:fs";

// Example: Callback API, asynchronously read entire file contents.
// `data` is a buffer.
fs.readFile("file-1.txt", function (error, data) {
    // Error handling
    if (error) {
        console.error(error);
        // Must return to stop code executing
        return;
    }

    console.log(data);
});

// Example: Callback API, asynchronously read entire file contents.
// Pass `encoding` option so `data` is passed as a string.
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, data) {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});

// Example: Nested callbacks (1 level deep).
// Second call to `fs.readFile` inside of callback for first call to `fs.readFile`.
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, file1Data) {
    if (error) {
        console.error(error);
        return;
    }

    console.log(file1Data);

    fs.readFile("file-2.txt", { encoding: "utf-8" }, function (error, file2Data) {
        if (error) {
            console.error(error);
            return;
        }

        console.log(file2Data);
    });
});

// Example: Nested callbacks (2 levels deep).
// Second call to `fs.readFile` inside of callback for first call to `fs.readFile`.
// Third call to `fs.readFile` inside of callback for second call to `fs.readFile`.
fs.readFile("file-1.txt", { encoding: "utf-8" }, function (error, file1Data) {
    if (error) {
        console.error(error);
        return;
    }

    console.log(file1Data);

    fs.readFile("file-2.txt", { encoding: "utf-8" }, function (error, file2Data) {
        if (error) {
            console.error(error);
            return;
        }

        console.log(file2Data);

        fs.readFile("file-3.txt", { encoding: "utf-8" }, function (error, file3Data) {
            if (error) {
                console.error(error);
                return;
            }

            console.log(file3Data);
        });
    });
});
