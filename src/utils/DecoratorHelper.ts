import {Methods} from '../enums/MethodsEnum';
import {METADATA_KEYS} from '../constants/MetadataKeys';
import {ReflectionHelper} from './ReflectionHelper';
import {RequestHandlerConfigHelper} from './RequestHandlerConfigHelper';

export class DecoratorHelper {
  public static createDecorator(method: Methods): any {
    return (path: string = '') => {
      return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const requestHandlerConfig =
            RequestHandlerConfigHelper.createRequestHandlerConfig(method, path, descriptor);

        ReflectionHelper.pushToMetadataArray(requestHandlerConfig, target, METADATA_KEYS.RequestConfig);
      };
    }
  }
}
