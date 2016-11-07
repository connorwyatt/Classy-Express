import * as Express from '@types/express';

let expressApplicationHelperInstance: ExpressApplicationHelper;

export class ExpressApplicationHelper {
  public get expressApplication() {
    return this._expressApplication;
  }

  private _expressApplication: typeof Express;

  public static getInstance(): ExpressApplicationHelper {
    if (expressApplicationHelperInstance) {
      return expressApplicationHelperInstance;
    }

    return expressApplicationHelperInstance = new ExpressApplicationHelper();
  }

  public setExpressApplication(expressApplication: typeof Express) {
    this._expressApplication = expressApplication;
  }
}
