const { default: ClickCounter } = require("./ClickCounter");

const counterUtility = {
    counter: 0,
    increasCounterHandler: () => {
        this.counter++;
    }
}

Object.assign(ClickCounter.prototype, counterUtility);