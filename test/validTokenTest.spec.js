const request = require('supertest');
const expect = require('chai').expect;
const validCredentials = require('../testdata/valid_Credentials.json');
const helper = require("../utils/helper");
 
const serverConfig = require('../config/environmentConfig.json');
var jwt = require('jsonwebtoken');
let credentailList = validCredentials.valid_client;

if (process.env.AUTO_ENV){
    env = (process.env.AUTO_ENV).toLowerCase();
	//console.log(env);
}
//console.log(validCredentials);

describe('Test valid Tokens with differnt input', () => {
	var tokenUrl = serverConfig.tokenServerUrl;
	//console.log(tokenUrl);
	var token;
    let i=0;
    for(const credential of credentailList) { // 
     
	  it('TC '.concat(i).concat(' - it should return correct token  when  input valid credentials ') , (done) => {
        let baseTime=Math.round(Date.now()/1000);
         request(tokenUrl)
            .post('/oauth/token')
            .send(credential)
            .set('Accept','application/json')
            .set('Content-Type','application/json')
            .end(function(err, res) {
				expect(res.statusCode).to.be.equal(200);
                expect(res.body.access_token).not.to.be.null;
				expect(res.body.scope).not.to.be.null;
				expect(res.body.expire_in).not.to.be.null;
				expect(res.body.token_type).not.to.be.null;
                
                token = res.body.access_token;
                //console.log(Object.keys(helper.getTokenInfo(token)));
                /**Object.keys(helper.getTokenInfo(token)).forEach(key => {
                    console.log(key, helper.getTokenInfo(token)[key]);
                    expect()
                  });
                  */
/** 
                  Verify that the iss (issuer) value is equals to "https://dev-5twd4ss9.auth0.com/"
                  3. Verify that the aud (audience) value is equal to "https://test-data-api.com"
                  4. Verify that the scope value matches what was provided in the original JSON payload.
                  5. Verify that "exp" - "iat" = the same value as "expires_in" in the original payload.
                  6. The JWT token is signed using RS256. Validate the JWT token using the values provided in the JWKS endpoint (https://dev-5twd4ss9.auth0.com/.wellknown/jwks.json).
 */
                expect(Math.abs(Math.round(Date.now()/1000)-helper.getTokenInfo(token).iat)).to.be.lessThanOrEqual(2);
                expect("https://dev-5twd4ss9.auth0.com/").to.be.equal(helper.getTokenInfo(token).iss);
                expect("https://test-data-api.com").to.be.equal(helper.getTokenInfo(token).aud);
                expect(res.body.scope).to.be.equal(helper.getTokenInfo(token).scope); 
                expect(res.body.expires_in).to.be.equal(helper.getTokenInfo(token).exp-helper.getTokenInfo(token).iat);

               // expect(helper.getTokenInfo.aud,'');
               // expect(helper.getTokenInfo.)
                if (err) {
                    throw err;
                }
	
                done();
            });
      });
      i=i+1;
    };
  

    function verifyToken(token) {
      // verify audience
      return true;
    
    }

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
       // verifyToken(token);
   
         
    });
});

 