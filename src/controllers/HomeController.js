import Student from "../models/Student";
class HomeController {
  async index(req, res) {
    try {
      const newStudent = await Student.create({
        name: 'Mirele',
        lastname: 'Santos',
        email: 'mirelesgi@gmail.com',
        age: 23,
        weight: 70,
        height: 1.68,
      });
      res.json(newStudent);
    } catch (e) {
      res.status(400).json(e.errors.map((err) => err.message));
    }
  }
}

export default new HomeController();

