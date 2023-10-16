import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const user = await User.findAll();
       console.log('USER ID', req.userId);
       console.log('USER EMAIL', req.userEmail);
      return res.json(user);
    } catch (e) {
       return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
  // Show
   async show(req, res) {
     try {
       const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (e) {
       return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Update
   async update(req, res) {
     try {
       if (!req.params.id) {
         return res.status(422).json({
           errors: ['Missing ID in the request parameters.'],
         });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found.'],
        });
      }
      const newData = await user.update(req.body);
      return res.json(newData);
    } catch (e) {
       return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Delete
   async delete(req, res) {
     try {
       if (!req.params.id) {
         return res.status(422).json({
           errors: ['Missing ID in the request parameters.'],
         });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({
          errors: ['User not found.'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}
export default new UserController();

