/**
 * Usage:
 *
 * Create database schema before running this script.
 *
 *   npx prisma migrate dev
 */

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
    for (let i = 1; i <= 10; i++) {
        await prisma.planet.create({
            data: { name: `Planet ${i}` }
        });
    }

   const planets = await prisma.planet.findMany();

   console.table(planets);
}

run();
