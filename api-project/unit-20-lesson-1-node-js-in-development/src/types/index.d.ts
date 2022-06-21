declare global {
    namespace Express {
        interface User {
            username: string;
        }
    }
}

declare module "express-session" {
    interface SessionData {
        redirectTo: string;
    }
}

export {};
