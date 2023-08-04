const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class UserCourse extends Model {
    static associate() {
      // Define las asociaciones aquí
    }
  }

  UserCourse.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CourseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserCourse',
    },
  );

  return UserCourse;
};
