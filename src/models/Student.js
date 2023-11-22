import Sequelize, { Model } from 'sequelize';
export default class Student extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type:  Sequelize.STRING,
        defaultValue:'',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name field must be between 3 and 255 characters',
          },
        },
      },
      lastname: {
        type:  Sequelize.STRING,
        defaultValue:'',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name field must be between 3 and 255 characters',
          },
        },
      },
      email: {
        type:  Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Existing email',
        },
        validate: {
          isEmail: {
            msg: 'Invalid email',
          },
        },
      },
      age: {
        type:  Sequelize.INTEGER,
        defaultValue:'',
        validate: {
          isInt: {
            msg: 'Must be an integer',
          },
        },
      },
      weight: {
        type:  Sequelize.FLOAT,
        defaultValue:'',
        validate: {
          isFloat: {
            msg: 'Must be an integer or floating point number',
          },
        },
      },
      height: {
        type:  Sequelize.FLOAT,
        defaultValue:'',
        validate: {
          isFloat: {
            msg: 'Must be an integer or floating point number',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}

