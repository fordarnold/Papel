import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Auth {
  /**
   * Encrypt a user's password.
   * @param {string} password Account password
   * @link https://www.youtube.com/watch?v=Ud5xKCYQTjM
   */
  static hashPassword(password) {
    try {
      const hashedPassword = bcrypt.hashSync(password, 10);
      return hashedPassword;
    } catch (error) {
      console.log(error);
      return null; // if hashing fails
    }
  }

  /**
   * Verify user's password.
   * @param {string} pass Plain text password to be encrypted.
   * @param {string} encrypted Hashed password to be compared.
   */
  static checkPassword(pass, encrypted) {
    return bcrypt.compareSync(pass, encrypted);
  }

  static generateToken(email, id, isAdmin) {
    return jwt.sign({ email, id, isAdmin }, process.env.ACCESS_TOKEN_KEY);
  }

  static verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
  }
}

export default Auth;
