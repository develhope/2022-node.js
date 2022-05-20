import express from "express";
import "express-async-errors";

import prisma from "./lib/prisma/client";

import {
    validate,
    validationErrorMiddleware,
    planetSchema,
    PlanetData
} from "./lib/validation";

const app = express();

app.use(express.json());

app.get("/planets", async (request, response) => {
    const planets = await prisma.planet.findMany();

    response.json(planets);
});

app.post("/planets", validate({ body: planetSchema }), async (request, response) => {
    const planetData: PlanetData = request.body;

    const planet = await prisma.planet.create({
        data: planetData
    });

    response.status(201).json(planet);
});

app.use(validationErrorMiddleware);

export default app;
