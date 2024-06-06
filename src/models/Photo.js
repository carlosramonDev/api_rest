import Sequelize, { Model } from 'sequelize';
export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type:  Sequelize.STRING,
        defaultValue:'',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty',
          },
        },
      },
      filename: {
        type:  Sequelize.STRING,
        defaultValue:'',
        validate: {
          notEmpty: {
            msg: 'Field cannot be empty',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}

