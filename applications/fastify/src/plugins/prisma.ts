import { FastifyPluginCallback } from "fastify";
import fastifyPlugin from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

declare module "fastify" {
    interface FastifyInstance {
        prisma: PrismaClient;
    }
}

const prisma: FastifyPluginCallback = (app, options, done) => {
    const prisma = new PrismaClient();

    app.decorate("prisma", prisma);

    done();
}

export default fastifyPlugin(prisma);
