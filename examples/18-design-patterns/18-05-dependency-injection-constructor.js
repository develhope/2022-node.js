class Counter {
    constructor(logger) {
        this.count = 0;
        this.logger = logger;
    }

    increment() {
        this.count++;
    }

    logValue() {
        this.logger.output(this.count);
    }
}

class Logger {
    output(message) {
        console.log(message);
    }
}

const counter = new Counter(new Logger());

counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.logValue();
