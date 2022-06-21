import express from "express";

const app = express();

app.use(function setHeaderMiddleware(request, response, next) {
    console.log("called: setHeaderMiddleware");

    response.setHeader("X-Custom-Header", "1234");

    next();
});

app.use(function middlewareWithAnError(request, response, next) {
    console.log("called: middlewareWithAnError");

    next(new Error("There has been an error."));
});

app.use(function sendDataMiddleware(request, response, next) {
    console.log("called: sendDataMiddleware");

    response.json({ data: "This is some data" });

    next();
});

app.use(function errorHandlerMiddleware(error, request, response, next) {
    console.log("called: errorHandlerMiddleware");

    response.status(500);

    response.json({ message: error.message });

    next();
});

app.listen(3000);
