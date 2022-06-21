import { createReadStream } from "node:fs";

const file = createReadStream("file-4.txt", { encoding: "utf-8" });

file.on("data", (chunk) => {
    console.log("chunk:", chunk.toString("utf8"));
});

file.on("end", () => console.error(`End of file read stream`));

file.on("error", (error) => console.error(`Error reading file: ${error}`));
