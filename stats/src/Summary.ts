import { Console } from 'console';
import { MatchData } from './MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

//Summary is not responsible for doing anything it just references other objects that do things
//its a co-ordinator of sorts
export class Summary {
  //pass in an instance of analysis objects and reporting objects
  //assign to analyzer and output property
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}

// new Summary(new WinsAnalysis(), new ConsoleReport())
