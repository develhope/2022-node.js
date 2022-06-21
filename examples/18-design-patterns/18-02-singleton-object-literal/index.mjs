import "./script-1.mjs";
import "./script-2.mjs";

import { counterInstance } from "./counter.mjs";

counterInstance.increment();

console.log("count:", counterInstance.count);
