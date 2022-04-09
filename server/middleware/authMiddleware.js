const jwt = require('express-jwt');
const { secret } = require('../config/config.json');
const db = require('../config/UserDb');

module.exports = authorize;

function authorize() {
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {

            if (
                req.headers.authorization &&
                req.headers.authorization.startsWith('Bearer')
              ) {
                try {
                                // authorization successful
                  token = req.headers.authorization.split(' ')[1]
                  req.user = await db.User.findByPk(req.user.email);
console.log("authorization successful")
                  next()
                } catch (error) {
                    console.error(error)
                    res.status(401)
                    throw new Error('Not authorized, token failed')
                  }
            }
            // check user still exists
            if (!token)
                return res.status(401).json({ message: 'Unauthorized' });

        }
    ];
}