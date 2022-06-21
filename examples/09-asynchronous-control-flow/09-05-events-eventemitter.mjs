import { EventEmitter } from "node:events";

// EventEmitter instance (subject)
const emitter = new EventEmitter();

// Attach an event listener for the `data` event.
emitter.on("data", (data) => {
    console.log(data);
});

// Emit a `data` event every second.
setInterval(() => {
    emitter.emit("data", "This is some data");
}, 1000);
