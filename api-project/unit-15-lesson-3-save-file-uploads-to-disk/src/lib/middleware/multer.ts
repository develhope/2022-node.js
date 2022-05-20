import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/"
});

export const multerOptions = {};

export const initMulterMiddleware = () => {
    return multer({ storage, ...multerOptions });
};
