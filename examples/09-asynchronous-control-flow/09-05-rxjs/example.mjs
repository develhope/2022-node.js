// Based on example in: https://github.com/ReactiveX/rxjs/blob/master/README.md

import { range, filter, map } from "rxjs";

// Observable that emits the numbers 1 to 40
range(1, 40)
    .pipe(
        // Operator
        filter((x) => x % 2 === 1),
        // Operator
        map((x) => x + x)
    )
    // Subscribe an Observer to the Observable
    .subscribe({
        next: (x) => console.log("Observer got a next value: " + x),
        error: (error) => console.error("Observer got an error: " + error),
        complete: () => console.log("Observer got a complete notification"),
    });
