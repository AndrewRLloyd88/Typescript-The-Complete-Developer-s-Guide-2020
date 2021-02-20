import { Console } from 'console';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  //pass in an instance of analysis objects and reporting objects
  //assign to analyzer and output property
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}

// new Summary(new WinsAnalysis(), new ConsoleReport())
