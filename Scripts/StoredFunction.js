class StoredFunction {
    constructor(storedFunction, customParams, customName = null) {
        this.storedFunction = storedFunction;
        this.storedParams = customParams;   
        this.funcName = !customName ? storedFunction.name : customName;
    }
    Call() {
        return this.storedFunction(...this.storedParams);
    }
    Call(params) {
        if(!params) params = this.storedParams;
        return this.storedFunction(...params);
    }
}

