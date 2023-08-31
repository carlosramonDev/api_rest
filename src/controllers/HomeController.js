import Student from "../models/Student";
class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Mirele',
      lastname: 'Santos',
      email: 'mirelesgi@gmail.com',
      age: 23,
      weight: 70,
      height: 1.68,
    })
    res.json(newStudent);
  }
}

export default new HomeController();

