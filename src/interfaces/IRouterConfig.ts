import {IRequestHandlerConfig} from './IRequestHandlerConfig';

export interface IRouterConfig { path: string, requestHandlerConfigs: Array<IRequestHandlerConfig> }
