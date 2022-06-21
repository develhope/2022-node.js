import clc from "cli-color";

class Text {
    constructor(text) {
        this.string = text;
    }
    toString() {
        return this.string;
    }
}

class BlueText {
    constructor(text) {
        this.text = text;
    }

    toString() {
        return clc.blue(this.text.toString());
    }
}

console.log(new Text("This is some text").toString());

console.log(new BlueText(new Text("This text is blue")).toString());
