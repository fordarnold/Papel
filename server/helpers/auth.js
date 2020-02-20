import 'dotenv/config';
import bcrypt from 'bcrypt';

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
}

export default Auth;
