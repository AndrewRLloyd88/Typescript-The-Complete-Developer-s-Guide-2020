"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        //bubble sorting algorithm
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //bad approach
                //all of this only works if collection is number[]
                //if collection is an array of numbers
                //type guards
                //instanceof constructor function e.g. instanceof Sorter, instanceof Date
                if (this.collection instanceof Array) {
                    //typescript understands that collection must be an array
                    //it has all the properties and features associated with array
                    //union restriction is lifted
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                //only going to work if collection is string
                //if collection is a string do this logic instead
                //~~logic to compare and swap characters in a string
                //type guard in typescript does not work with typeof array
                if (typeof this.collection === 'string') {
                    //restored access to properties that are available to string
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
