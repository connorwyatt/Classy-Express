import {Glob} from 'glob';
import {join} from 'path';

export class PathScanner {
  public static scanPathUsingGlob(globPattern: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const glob = new Glob(globPattern);

      glob.on('match', (path: string) => {
        this.includeFile(path);
      });

      glob.on('end', () => {
        resolve();
      });

      glob.on('error', (error: any) => {
        reject(error);
      });
    });
  }

  public static scanPathUsingFilePaths(filePaths: Array<string>): void {
    filePaths.forEach(filePath => {
      this.includeFile(filePath);
    });
  }

  private static includeFile(filePath: string): void {
    require(join(process.cwd(), filePath));
  }
}
