const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Note = sequelize.define("note", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  acitvityType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activityNumber: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  actvityDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  adminId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});

module.exports = Note;
