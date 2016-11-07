const metadataPrefix = '$ClassyExpress-';

const getSymbol = (symbolName: string): symbol => {
  return Symbol(metadataPrefix + symbolName);
};

const metadataKeys = {
  RequestConfig: getSymbol('RequestConfig')
};

Object.freeze(metadataKeys);

export const METADATA_KEYS = metadataKeys;
