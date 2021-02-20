"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
//create an object that satisfies the 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying the 'DataReader' Interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//.load allows us to reference matchReader.matches
//object composition - main object delegates out behaviors to other objects
console.log("Man United Won " + manUnitedWins + " games");
