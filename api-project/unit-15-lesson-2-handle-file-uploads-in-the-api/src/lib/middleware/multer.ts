import multer from "multer";

export const multerOptions = {};

export const initMulterMiddleware = () => {
    return multer(multerOptions);
};
