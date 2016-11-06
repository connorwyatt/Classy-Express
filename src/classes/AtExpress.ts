import {PathScanner} from '../utils/PathScanner';

export class AtExpress {
  public scanFiles(files: Array<string>): void {
    PathScanner.scanPathUsingFilePaths(files);
  }

  public scanGlob(glob: string): void {
    PathScanner.scanPathUsingGlob(glob);
  }
}
