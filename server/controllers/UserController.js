import User from '../models/User';

class UserController {
  /**
   * Handler for _Sign Up_ API endpoint.
   *
   * @param {*} req The HTTP request
   * @param {*} res The HTTP response
   */
  static register(req, res) {
    // Check if user's email exists...
    const userExists = User.checkEmailExists(req.body.email);
    if (userExists) {
      return res.status(409).json({
        status: 409,
        error: 'The email for this user already exists',
      });
    }
    //
    User.create(req.body);
    //
    return res.status(201).json({
      status: 201,
      message: 'User account created successfully',
      // data: {
      //   // token: Authenticate.generateToken(newUser.email, newUser.id, newUser.isAdmin),
      //   email: req.body.email,
      //   firstName: req.body.email,
      //   lastName: req.body.email,
      //   password: req.body.email, // TODO: encrypt password
      //   type: req.body.email,
      //   isAdmin: req.body.isAdmin,
      // },
    });
  }
}

export default UserController;
