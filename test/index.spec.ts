import {expect} from 'chai';
import {AtExpress, GET, Route} from '../src';

describe('Index File', () => {
  it('should export the AtExpress class', () => {
    expect(AtExpress).to.be.a('Function');
  });

  it('should export the GET decorator', () => {
    expect(GET).to.be.a('Function');
  });

  it('should export the Route decorator', () => {
    expect(Route).to.be.a('Function');
  });
});
