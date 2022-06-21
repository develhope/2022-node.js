/**
 * Example curl request:
 *
 *   curl -v --header 'Authorization: Bearer abc123' localhost:3000/secure
 */

import express from "express";
import passport from "passport";
import { Strategy } from "passport-http-bearer";

const app = express();

passport.use(
    new Strategy(function (token, done) {
        /**
         * In a real application the expected token value would be
         * stored securely, for example in an environment variable.
         */
        const expectedToken = "abc123";
        const authenticated = token === expectedToken;

        done(null, authenticated);
    })
);

app.get(
    "/secure",
    passport.authenticate("bearer", { session: false }),
    (request, response) => {
        response.json({ data: "Some secure data" });
    }
);

app.listen(3000);
