/**
 * Example curl request:
 *
 *   curl -v --user theo:secret localhost:3000/secure
 */

import express from "express";
import passport from "passport";
import { BasicStrategy } from "passport-http";

const app = express();

passport.use(
    new BasicStrategy(function (username, password, done) {
        /**
         * In a real application the request username and password would
         * be checked against usernames and passwords that are stored
         * securely in a database.
         */
        const authenticated = username === "theo" && password === "secret";

        done(null, authenticated);
    })
);

app.get(
    "/secure",
    passport.authenticate("basic", { session: false }),
    (request, response) => {
        response.send("<html><body><h1>Secure web page</h1></body></html>");
    }
);

app.listen(3000);
