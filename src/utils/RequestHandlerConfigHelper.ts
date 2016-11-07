import {NextFunction, Request, RequestHandler, Response} from 'express';
import {Methods} from '../enums/MethodsEnum';
import {IRequestHandlerConfig} from '../interfaces/IRequestHandlerConfig';

export class RequestHandlerConfigHelper {
  public static createRequestHandlerConfig(
      method: Methods, path: string, descriptor: PropertyDescriptor): IRequestHandlerConfig {
    const wrappedHandler = this.createRequestHandler(descriptor.value);

    return {method, path, fn: wrappedHandler};
  }

  private static createRequestHandler(fn: Function): RequestHandler {
    return (request: Request, response: Response, next: NextFunction) => {
      fn(request, response, next);
    };
  }
}
