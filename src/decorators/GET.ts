import {METADATA_KEYS} from '../constants/MetadataKeys';
import {Methods} from '../enums/MethodsEnum';
import {ReflectionHelper} from '../utils/ReflectionHelper';
import {RequestHandlerConfigHelper} from '../utils/RequestHandlerConfigHelper';

export const GET = (path: string = '') => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const requestHandlerConfig =
        RequestHandlerConfigHelper.createRequestHandlerConfig(Methods.GET, path, descriptor);

    ReflectionHelper.pushToMetadataArray(requestHandlerConfig, target, METADATA_KEYS.RequestConfig);
  };
};