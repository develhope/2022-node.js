import { RequestHandler } from "express";

jest.mock("./passport", () => {
    const originalModule = jest.requireActual("./passport");

    const checkAuthorization: RequestHandler = (
        request,
        response,
        next
    ) => {
        next();
    }

    return {
        __esModule: true,
        ...originalModule,
        checkAuthorization,
    }
});
