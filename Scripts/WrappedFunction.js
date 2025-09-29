class WrappedFunction {
    constructor(storedFunction, customName = null) {
        this.storedFunction = storedFunction;
        this.funcName = customName;
    }
    call(params) {
        return this.storedFunction(...params);
    }
    toString() {
        return this.funcName;
    }
}