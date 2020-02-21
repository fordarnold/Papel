import Account from '../models/Account';

export default class AccountController {
  //
  static async create(req, res) {
    // Check if user's email exists...
    const accExists = await Account.checkAccNoExists(req.body.accountNumber);
    if (accExists) {
      // return a 409 HTTP error
      return res.status(409).json({
        status: 409,
        error: 'Bank account already exists',
      });
    }
    //
    const createdAccount = await Account.create(req.body);
    //
    return res.status(201).json({
      status: 201,
      message: 'Bank account created successfully',
      data: createdAccount,
    });
  }

  static async getAll(req, res) {
    // // Read all users.
    const statusGetCollection = await Account.getCollection();
    // return { statusCreateTable };
    console.log(req, res);
    console.log(statusGetCollection);

    return 'All users';
  }

  static async getSingle(req, res) {
    // Read all users.
    const bankAccount = await Account.findByAccNo(req.params.accountNumber);
    if (bankAccount === undefined) {
      return res.status(404).json({
        status: 404,
        error: 'The requested bank account does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      data: bankAccount,
    });
  }

  static async removeSingle(req, res) {
    // Read all users.
    const result = await Account.remove(req.params.userId);

    if (result.rowCount <= 0) {
      return res.status(404).json({
        status: 404,
        error: 'The requested bank account does not exist',
      });
    }
    return res.status(200).json({
      status: 200,
      message: 'Account deleted successfully',
    });
  }
}
