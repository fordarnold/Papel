import User from '../models/User';

class UserController {
  /**
   * Handler for _Sign Up_ API endpoint.
   *
   * @param {*} req The HTTP request
   * @param {*} res The HTTP response
   */
  static async register(req, res) {
    // Create required database table.
    await User.createTable();

    // Check if user's email exists...
    const userExists = await User.checkEmailExists(req.body.email);
    if (userExists) {
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

  static async getAll(req, res) {
    // Read all users.
    const statusGetCollection = await User.getCollection();
    // return { statusCreateTable };
    console.log(statusGetCollection);
  }
}

export default UserController;
