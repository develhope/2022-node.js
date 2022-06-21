/**
 * Example curl request:
 *
 *   curl -v --user theo:secret --digest localhost:3000/secure
 */

import express from "express";
import passport from "passport";
import { DigestStrategy } from "passport-http";

const app = express();

passport.use(
    new DigestStrategy({ qop: "auth" }, function (username, callback) {
        /**
         * In a real application the request username and password would
         * be checked against usernames and passwords that are stored
         * securely in a database.
         */
        const users = {
            theo: { password: "secret" }
        };

        const user = users[username];

        if (!user) {
            return callback(null, false);
        }

        return callback(null, user, user.password);
    })
);

app.get(
    "/secure",
    passport.authenticate("digest", { session: false }),
    (request, response) => {
        response.send("<html><body><h1>Secure web page</h1></body></html>");
    }
);

app.listen(3000);
