import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

//tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  //take a look at the provided reader
  load(): void {
    this.reader.read();
    //transform the strings
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, //"H", "A" or "D"
          row[6],
        ];
      }
    );
  }
}
