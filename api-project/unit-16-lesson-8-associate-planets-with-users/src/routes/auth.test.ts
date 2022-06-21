import supertest from "supertest";

import app from "../app";

const request = supertest(app);

describe("GET /auth/login", () => {
    test("Valid request", async () => {
        await request
            .get("/auth/login?redirectTo=http://website.com")
            .expect(302)
            .expect("Location", "/auth/github/login")
            .expect("Set-Cookie", /^connect.sid=/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
            .expect("Access-Control-Allow-Credentials", "true");
    });

    test("Invalid request", async () => {
        const response = await request
            .get("/auth/login")
            .expect(400)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Missing redirectTo query string parameter");
    });
});

describe("GET /auth/logout", () => {
    test("Valid request", async () => {
        await request
            .get("/auth/logout?redirectTo=http://website.com")
            .expect(302)
            .expect("Location", "http://website.com")
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
            .expect("Access-Control-Allow-Credentials", "true");
    });

    test("Invalid request", async () => {
        const response = await request
            .get("/auth/logout")
            .expect(400)
            .expect("Content-Type", /text\/html/);

        expect(response.text).toContain("Missing redirectTo query string parameter");
    });
});

describe("GET /auth/github/login", () => {
    test("Valid request", async () => {
        await request
            .get("/auth/github/callback")
            .expect(302)
            .expect("Location", /^https:\/\/github.com\/login\/oauth\/authorize/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
            .expect("Access-Control-Allow-Credentials", "true");
    });
});

describe("GET /auth/github/callback", () => {
    test("Valid request", async () => {
        await request
            .get("/auth/github/callback")
            .expect(302)
            .expect("Location", /^https:\/\/github.com\/login\/oauth\/authorize/)
            .expect("Access-Control-Allow-Origin", "http://localhost:8080")
            .expect("Access-Control-Allow-Credentials", "true");
    });
});
