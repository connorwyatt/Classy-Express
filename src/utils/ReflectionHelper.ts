import 'reflect-metadata';
import {isArray} from 'util';

export class ReflectionHelper {
  public static getMetadata(metadataKey: any, target: any, propertyKey?: string|symbol): any {
    return Reflect.getOwnMetadata(metadataKey, target, propertyKey);
  }

  public static pushToMetadataArray(
      metadataValue: any, target: any, metadataKey: any, propertyKey?: string|symbol): void {
    let metadataArray: Array<any>;

    if (Reflect.hasOwnMetadata(metadataKey, target, propertyKey)) {
      const metadata = Reflect.getOwnMetadata(metadataKey, target, propertyKey);

      if (isArray(metadata)) {
        metadataArray = metadata;
      }

      if (!metadataArray) {
        throw new Error('Metadata error.');
      }
    }

    if (!metadataArray) {
      metadataArray = [];
    }

    metadataArray.push(metadataValue);

    Reflect.defineMetadata(metadataKey, metadataArray, target, propertyKey);
  }
}
