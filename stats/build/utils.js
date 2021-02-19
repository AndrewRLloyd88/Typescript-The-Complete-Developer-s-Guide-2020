"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
//takes in a date as string and returns a numeric date
var dateStringToDate = function (dateString) {
    //28/10/2018
    var dateParts = dateString.split('/').map(function (v) {
        return parseInt(v);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
