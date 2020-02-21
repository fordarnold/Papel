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

    console.log(user);

    // Verify password
    const isCorrectPassword = Auth.checkPassword(req.body.password, user.password);

    console.log(isCorrectPassword);

    if (isCorrectPassword) {
      return res.status(200).json({
        status: 200,
        // message: 'User is successfully logged in',
        data: {
          token: Auth.generateToken(req.body.email, user.id, user.is_admin),
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: req.body.email,
        },
      });
    }
    //
    return res.status(401).json({
      status: 401,
      error: 'Unauthorized',
    });
  }

  static async getAll(req, res) {
    // Read all users.
    const collection = await User.getCollection();
    // return collection.rows;
    return res.status(200).json({
      status: 200,
      data: collection.rows,
    });
  }

  static async getSingle(req, res) {
    // Read all users.
    const userProfile = await User.findById(req.params.userId);
    if (userProfile === undefined) {
      return res.status(404).json({
        status: 404,
        error: 'The requested user profile does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      data: userProfile,
    });
  }

  static async removeSingle(req, res) {
    // Read all users.
    const result = await User.remove(req.params.userId);

    if (result.rowCount <= 0) {
      return res.status(404).json({
        status: 404,
        error: 'The requested user profile does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'User deleted successfully',
    });
  }
}

export default UserController;
