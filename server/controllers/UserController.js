import User from '../models/User';
import Auth from '../helpers/auth';

class UserController {
  /**
   * Handler for _Sign Up_ API endpoint.
   *
   * @param {*} req The HTTP request
   * @param {*} res The HTTP response
   */
  static async register(req, res) {
    // Check if user's email exists...
    const userExists = await User.checkEmailExists(req.body.email);
    if (userExists) {
      // return a 409 HTTP error
      return res.status(409).json({
        status: 409,
        error: 'The email for this user already exists',
      });
    }
    //
    const createdUser = await User.create(req.body);
    //
    return res.status(201).json({
      status: 201,
      message: 'User account created successfully',
      data: createdUser,
    });
  }

  static async startSession(req, res) {
    // Check if user's email exists
    const user = await User.findByEmail(req.body.email);

    // Verify password
    const isCorrectPassword = Auth.checkPassword(req.body.password, user.password);

    if (isCorrectPassword) {
      return res.status(200).json({
        status: 200,
        message: 'User is successfully logged in',
        // data: {
        //   // token: Auth.generateToken(email, id, is_admin),
        //   email: email,
        //   first_name: firstName,
        //   last_name: lastName,
        // },
      });
    }
    
    // // If email does not exist, sign up first
    // if (!doesExist) {
    //   return res.status(401).json({
    //     status: 401,
    //     error: 'You need to create an account...',
    //   });
    // }
    // // Authenticate a user
    // const pwMatch = Auth.checkPassword(req.body.password, doesExist.rows[0].password);
    // if (pswMatch) {
    //   const {
    //     id,
    //     firstname,
    //     lastname,
    //     email,
    //     phone_number,
    //     username,
    //     is_admin,
    //     password,
    //     createdon
    //   } = doesExist.rows[0];
      
    //   return res.status(200).json({
    //     status: 200,
    //     message: 'User is successfully logged in',
    //     data: {
    //       token: Auth.generateToken(
    //         email,
    //         id,
    //         is_admin),
    //         firstname: firstname,
    //         lastname: lastname,
    //         email: email,
    //         username: username,
    //         phone_number,
    //         password,
    //         createdOn: createdon
    //       }
    //     });
    //   }
    // }
    // // const email = req.body.email;
  }

  static async getAll(req, res) {
    // // Read all users.
    // const statusGetCollection = await User.getCollection();
    // // return { statusCreateTable };
    // console.log(req, res);
    // console.log(statusGetCollection);

    return 'All users';
  }
}

export default UserController;
