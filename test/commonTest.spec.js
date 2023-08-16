var supertest = require('supertest'); //require supertest
const serverConfig = require('../config/environmentConfig.json');
const request = supertest(serverConfig.tokenServerUrl); //supertest hits the HTTP server (your app)

/*
This piece of code is for getting the authorization token .
const token;
test(getToken", function(){
    return request.post('/oauth/token').then((response)=>{
        token = response.body.token  //to save the login token for further requests
    })
}); 
*/

module.exports = 
{
    request
    //token     //-- export if token is generated
}