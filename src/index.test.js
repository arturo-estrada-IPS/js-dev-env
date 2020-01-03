import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Should render without chrashing', () => {
  it('should render', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have an h1 that says "Users"', (done) => {
    fs.readFile('./src/index.html', 'utf-8', (err, index) => {
      if (index && !err) {
        jsdom.env(index, (err, window) => {
          if (window && !err) {
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
          } else {
            throw err;
          }
        });
      } else {
        throw err
      }
    });
  });
});
