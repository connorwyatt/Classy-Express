import {IRequestHandlerConfig} from '../interfaces/IRequestHandlerConfig';
import {IRouterConfig} from '../interfaces/IRouterConfig';

export class RouterConfigHelper {
  public static createRouterConfig(
      path: string, requestHandlerConfigs: Array<IRequestHandlerConfig>): IRouterConfig {
    return {path, requestHandlerConfigs};
  }
}
