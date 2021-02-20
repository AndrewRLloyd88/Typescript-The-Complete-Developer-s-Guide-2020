"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
var Summary = /** @class */ (function () {
    //pass in an instance of analysis objects and reporting objects
    //assign to analyzer and output property
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    return Summary;
}());
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport())
