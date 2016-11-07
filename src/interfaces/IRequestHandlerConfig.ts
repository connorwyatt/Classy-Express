import {RequestHandler} from 'express';
import {Methods} from '../enums/MethodsEnum';

export interface IRequestHandlerConfig { method: Methods, path: string, fn: RequestHandler }
