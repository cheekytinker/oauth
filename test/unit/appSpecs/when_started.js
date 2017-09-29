import { describe, it } from 'mocha';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import mochaAsync from '../../helpers/mochaAsync';
import app from '../../../src/app';

const expect = chai.expect;
chai.use(dirtyChai);

describe('unit', () => {
  describe('when started', () => {
    it('Before started server should be null', mochaAsync(async () => {
      expect(app.server).to.be.null();
    }));
  });
});
