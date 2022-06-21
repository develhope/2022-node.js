/**
 * Usage:
 *
 * Create database schema before running this script.
 *
 *   npx knex migrate:latest
 */

import knexConfig from "./knexfile.js";

import initKnex from "knex";

const knex = initKnex(knexConfig.development);

async function run() {
    for (let i = 1; i <= 10; i++) {
        await knex("planets").insert({ name: `Planet ${i}` });
    }

   const planets = await knex("planets").select("id", "name");

   console.table(planets);

   knex.destroy();
}

run();
