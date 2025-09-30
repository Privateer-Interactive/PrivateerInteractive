class WrappedFunction {
    constructor(storedFunction, customName = null) {
        this.storedFunction = storedFunction;
        this.funcName = customName;
    }
    Call(params) {
        return this.storedFunction(...params);
    }
    toString() {
        return this.funcName;
    }
}