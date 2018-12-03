const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;
const base = `https://afternoon-crag-14051.herokuapp.com`;

describe('GET /red-flags', () => {
  it('should get all red-flags', (done) => {
    request.get(`${base}/red-flags`, (err, res, body) => {
      body = JSON.parse(body);
      expect(res.statusCode).to.eq(200);
      expect(body.data).to.be.an('Array');
      done();
    })
  })
})