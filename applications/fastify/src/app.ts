import * as path from "node:path";

import Fastify from "fastify";
import corsPlugin from "@fastify/cors";
import staticPlugin from "@fastify/static";
import {
    ajvTypeBoxPlugin,
    TypeBoxTypeProvider,
} from "@fastify/type-provider-typebox";

import multerPlugin from "./plugins/multer";
import prismaPlugin from "./plugins/prisma";
import { planetSchema, planetIdSchema } from "./schemas/planet";

export default async function buildApp() {
    const options = {
        logger: true,
        ajv: {
            plugins: [ajvTypeBoxPlugin],
        },
    };

    const app = Fastify(options).withTypeProvider<TypeBoxTypeProvider>();

    await app.register(multerPlugin);
    await app.register(prismaPlugin);

    const corsOptions = {
        origin: "http://localhost:8080",
    };

    app.register(corsPlugin, corsOptions);

    app.get("/planets", async () => {
        return await app.prisma.planet.findMany();
    });

    app.post(
        "/planets",
        { schema: { body: planetSchema } },
        async (request, reply) => {
            reply.status(201);

            return await app.prisma.planet.create({
                data: request.body,
            });
        }
    );

    app.get(
        "/planets/:id",
        { schema: { params: planetIdSchema } },
        async (request, reply) => {
            const id = request.params.id;

            const planet = await app.prisma.planet.findUnique({
                where: { id },
            });

            if (!planet) {
                reply.status(404);
                throw new Error(`Route GET:/planets/${id} not found`);
            }

            return planet;
        }
    );

    app.put(
        "/planets/:id",
        { schema: { params: planetIdSchema, body: planetSchema } },
        async (request, reply) => {
            const id = request.params.id;

            try {
                return await app.prisma.planet.update({
                    where: { id },
                    data: request.body,
                });
            } catch (error) {
                reply.status(404);
                throw new Error(`Route PUT:/planets/${id} not found`);
            }
        }
    );

    app.delete(
        "/planets/:id",
        { schema: { params: planetIdSchema } },
        async (request, reply) => {
            const id = request.params.id;

            try {
                await app.prisma.planet.delete({
                    where: { id },
                });

                reply.status(204).send("");
            } catch (error) {
                reply.status(404);
                throw new Error(`Route DELETE:/planets/${id} not found`);
            }
        }
    );

    app.post(
        "/planets/:id/photo",
        {
            schema: { params: planetIdSchema },
            preHandler: app.upload.single("photo"),
        },
        async (request, reply) => {
            // @ts-ignore
            const id = request.params.id;
            // @ts-ignore
            const photoFilename = request.file.filename;

            try {
                await app.prisma.planet.update({
                    where: { id },
                    data: { photoFilename },
                });

                reply.status(201).send({ photoFilename });
            } catch (error) {
                reply.status(404);
                throw new Error(`Route POST:/planets/${id}/photo not found`);
            }
        }
    );

    app.register(staticPlugin, {
        root: path.resolve("uploads/"),
        prefix: "/planets/photos/",
    });

    return app;
}
