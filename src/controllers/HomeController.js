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
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}

export default new HomeController();

