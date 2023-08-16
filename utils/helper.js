const jwt = require('jsonwebtoken');
 

let kid ;

const jwksClient = require('jwks-rsa');

let tokenInfo={};
 
function getTokenInfo(token){
    let decodedToken = jwt.decode(token, { complete: true });         
    //console.log(decodedToken);
 
    tokenInfo['iss']=decodedToken.payload.iss;
    tokenInfo['aud'] =decodedToken.payload.aud;
    tokenInfo['iat'] =decodedToken.payload.iat;
    tokenInfo['kid'] = decodedToken.header.kid;
    tokenInfo['exp'] = decodedToken.payload.exp;
    tokenInfo['scope'] = decodedToken.payload.scope;

    return tokenInfo;
      
 }


module.exports = 
{
    getTokenInfo,
    tokenInfo
    //token     //-- export if token is generated
};