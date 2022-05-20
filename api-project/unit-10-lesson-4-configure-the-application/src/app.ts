import express from "express";
import "express-async-errors";

const app = express();

app.get("/planets", (request, response) => {
    response.json([
        { name: "Mercury" },
        { name: "Venus" }
    ]);
});

export default app;
