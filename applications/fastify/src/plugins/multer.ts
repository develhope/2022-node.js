import { FastifyPluginCallback } from "fastify";
import fastifyPlugin from "fastify-plugin";
import multer from "fastify-multer";
import mime from "mime";
import { randomUUID } from "node:crypto";

export const generatePhotoFilename = (mimeType: string) => {
    const randomFilename = `${randomUUID()}-${Date.now()}`;
    const fileExtension = mime.getExtension(mimeType);
    const filename = `${randomFilename}.${fileExtension}`;

    return filename;
};

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (request, file, callback) => {
        return callback(null, generatePhotoFilename(file.mimetype));
    },
});

const VALID_MIME_TYPES = ["image/png", "image/jpeg"];
const MAX_SIZE_IN_MEGABYTES = 6 * 1024 * 1024;

const upload = multer({
    storage,
    fileFilter: (request, file, callback) => {
        if (VALID_MIME_TYPES.includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(new Error("The uploaded file must be a JPG or PNG image."));
        }
    },
    limits: {
        fileSize: MAX_SIZE_IN_MEGABYTES,
    },
});

const multerPlugin: FastifyPluginCallback = (app, options, done) => {
    app.register(multer.contentParser);

    app.decorate("upload", upload);

    done();
}

declare module "fastify" {
    interface FastifyInstance {
        upload: typeof upload;
    }
}

export default fastifyPlugin(multerPlugin);
