import express from "express";
import "express-async-errors";

const app = express();

// GET /planets - Retrieve all planets
app.get("/planets", (request, response) => {});

// GET /planets/:id - Retrieve a specific planet
app.get("/planets/:id", (request, response) => {});

// POST /planets - Create a new planet
app.post("/planets", (request, response) => {});

// PUT /planets/:id - Replace an existing planet
app.put("/planets/:id", (request, response) => {});

// DELETE /planets/:id - Delete a planet
app.delete("/planets/:id", (request, response) => {});

// POST /planets/:id/photo - Add a photo for a planet
app.post("/planets/:id/photo", (request, response) => {});

export default app;
