import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

//create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying the 'DataReader' Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
//.load allows us to reference matchReader.matches

//object composition - main object delegates out behaviors to other objects

console.log(`Man United Won ${manUnitedWins} games`);
