const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
const { now } = require("sequelize/dist/lib/utils");

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
  activityType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activityNumber: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  activityDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adminId: {
    type: DataTypes.UUID,
    allowNull: false,
  }, // defapt trebuia sa fie array
});

module.exports = Note;
