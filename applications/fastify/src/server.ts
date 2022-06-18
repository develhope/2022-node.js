import "dotenv/config";

import buildApp from "./app";

const port = Number(process.env.PORT);

const start = async () => {
    const app = await buildApp();

    try {
        await app.listen({ port });
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();
