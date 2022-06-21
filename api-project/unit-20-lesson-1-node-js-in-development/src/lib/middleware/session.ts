import session from "express-session";

import config from "../../config";

export function initSessionMiddleware(appEnvironment: string) {
    const isProduction = appEnvironment === "production";

    return session({
        secret: config.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: isProduction,
        },
        proxy: isProduction,
    });
}
