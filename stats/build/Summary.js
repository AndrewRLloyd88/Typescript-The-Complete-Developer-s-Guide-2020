"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
//Summary is not responsible for doing anything it just references other objects that do things
//its a co-ordinator of sorts
var Summary = /** @class */ (function () {
    //pass in an instance of analysis objects and reporting objects
    //assign to analyzer and output property
    function Summary(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
// new Summary(new WinsAnalysis(), new ConsoleReport())
