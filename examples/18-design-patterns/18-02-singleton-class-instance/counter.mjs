class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }
}

export const counterInstance = new Counter();
