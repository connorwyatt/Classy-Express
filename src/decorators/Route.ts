import {METADATA_KEYS} from '../constants/MetadataKeys';
import {IRequestHandlerConfig} from '../interfaces/IRequestHandlerConfig';
import {ExpressApplicationHelper} from '../utils/ExpressApplicationHelper';
import {ReflectionHelper} from '../utils/ReflectionHelper';
import {RouterConfigHelper} from '../utils/RouterConfigHelper';

export const Route = (path: string = '') => {
  return (constructor: any) => {
    const requestHandlerConfigs: Array<IRequestHandlerConfig> =
        ReflectionHelper.getMetadata(METADATA_KEYS.RequestConfig, constructor.prototype);

    const routerConfig = RouterConfigHelper.createRouterConfig(path, requestHandlerConfigs);

    const expressApplicationHelper = ExpressApplicationHelper.getInstance();

    expressApplicationHelper.createAndMountRouterFromConfig(routerConfig);
  };
};
