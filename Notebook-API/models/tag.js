const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Tag = sequelize.define("tag", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tag;
