const request = require('supertest');
const expect = require('chai').expect;
const invalidCredentials =  require('../testdata/invalid_credentials.json');
const serverConfig = require('../config/environmentConfig.json');

let credentailList = invalidCredentials.invalid_client;
console.log(credentailList);

if (process.env.AUTO_ENV){
    env = (process.env.AUTO_ENV).toLowerCase();
	//console.log(env);
}


describe('Test  invalid Tokens with differnt input ', () => {
	var tokenUrl = serverConfig.tokenServerUrl;
	//console.log(tokenUrl);
	var token;
    let i=0;
    //credentailList.forEach (({grant_type,client_id,client_secret,audience }) => { // 
    for(const credential of credentailList) { // 
        console.log(credential);
        it('TC '.concat(i).concat('- it should return correct response code:').concat(credential.response).concat(' unauthorized when  input invalid credentials '), (done) => {
         request(tokenUrl)
            .post('/oauth/token')
            .send(credential)
            .set('Accept','application/json')
            .set('Content-Type','application/json')
            .end(function(err, res) {
				expect(res.statusCode).to.be.equal(credential.response);
                 if (err) {
                    throw err;
                }
	
                done();
            });
      });
      i=i+1;
    };

    before (function () {
        console.log("=========================Test suites started=================================");
       
    })
    beforeEach(function () {
	    console.log("=========================Tests start ========================================");

    });
	  
    afterEach(function () {
	    console.log("=========================Tests finished======================================")
    });

	after(function () {
        console.log("=========================Test suites finished=================================");
  
    });
});
	 
 

 