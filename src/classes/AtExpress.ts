import * as Express from '@types/express';
import {Application, RequestHandler} from '@types/express';
import {ExpressApplicationHelper} from '../utils/ExpressApplicationHelper';
import {PathScanner} from '../utils/PathScanner';

export class AtExpress {
  private preStartPromises: Array<Promise<any>> = [];
  private port: number;
  private basePath: string = '';
  private middleware: Array<RequestHandler> = [];

  constructor(express: typeof Express) {
    ExpressApplicationHelper.getInstance().setExpressApplication(express);
  }

  public scanFiles(files: Array<string>): void {
    PathScanner.scanPathUsingFilePaths(files);
  }

  public scanGlob(glob: string): void {
    this.preStartPromises.push(PathScanner.scanPathUsingGlob(glob));
  }

  public setPort(port: number): void {
    this.port = port;
  }

  public setBasePath(basePath: string): void {
    this.basePath = basePath;
  }

  public addMiddleware(middleware: RequestHandler): void {
    this.middleware.push(middleware);
  }

  public start(): Promise<void> {
    if (!this.port) {
      return Promise.reject(new Error('ERROR: The port number has not been set.'));
    }

    return Promise.all(this.preStartPromises).then(() => {
      const application = ExpressApplicationHelper.getInstance().expressApplication();

      this.applyMiddleware(application, this.middleware);

      return new Promise(resolve => {
        application.listen(this.port, resolve);
      });
    });
  }

  private applyMiddleware(application: Application, middleware: Array<RequestHandler>): void {
    middleware.forEach(item => {
      application.use(item);
    });
  }
}
