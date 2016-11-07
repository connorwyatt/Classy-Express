import {Methods} from '../enums/MethodsEnum';
import {DecoratorHelper} from '../utils/DecoratorHelper';

export const GET = DecoratorHelper.createDecorator(Methods.GET);
