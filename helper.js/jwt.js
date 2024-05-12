import expressJwt from 'express-jwt';
import dotenv from 'dotenv';
dotenv.config();

const authJwt = () => {
  return expressJwt({
    secret: process.env.SECRET,
    algorithms: ['HS256'],
    // Optional: Implement isRevoked to handle token revocation logic
    isRevoked: (req, payload, done) => {
      done(null, false); // or true to revoke the token
    }
  }).unless({
    path: [
      '/api-doc', // Add any public paths that do not require authentication
    ],
  });
};

export default authJwt;


