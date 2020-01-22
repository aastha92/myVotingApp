const jwt = require('jsonwebtoken')

const logger = (req,res,next) => {
  console.log('logging route', req.url , new Date().toISOString());
  next() 
}

const authenticate = (req,res,next) => {
  const bearerHeader = req.headers['authorization'];
  
  if (typeof bearerHeader !== 'undefined'){
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    
    jwt.verify(bearerToken, 'secret', (err,decoded) => {
      if (!err) {
        req.user=decoded
      }
    })

  }else{
    res.sendStatus(401);
  }
  
  next()
}

module.exports = {
  logger,
  authenticate
}