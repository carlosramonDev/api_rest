import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const user = await User.findAll({attributes: ['id', 'name', 'email']});
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

       const { id, name, email } = user;
       return res.json({ id, name, email });
    } catch (e) {
       return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  // Update
   async update(req, res) {
     try {
      const user = await User.findByPk(req.userId);

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

      const user = await User.findByPk(req.userId);

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

