import clc from "cli-color";

class Text {
    constructor(text) {
        this.string = text;
    }
    toString() {
        return this.string;
    }
}

function blueText(text) {
    let originalToString = text.toString;

    text.toString = function () {
        return clc.blue(originalToString.apply(text));
    };

    return text;
}

console.log(new Text("This is some text").toString());

console.log(blueText(new Text("This text is blue")).toString());
