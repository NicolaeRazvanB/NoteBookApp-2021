const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const StudyGroup = sequelize.define("studygroup", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = StudyGroup;
