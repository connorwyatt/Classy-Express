import {Application} from '@types/express';
import * as Express from 'express';

let expressApplicationHelperInstance: ExpressApplicationHelper;

export class ExpressApplicationHelper {
  public get expressApplication(): Application {
    return this._expressApplication;
  }

  constructor(private _expressApplication: Application) {}

  public static getInstance(): ExpressApplicationHelper {
    if (expressApplicationHelperInstance) {
      return expressApplicationHelperInstance;
    }

    return expressApplicationHelperInstance = new ExpressApplicationHelper(Express());
  }
}
