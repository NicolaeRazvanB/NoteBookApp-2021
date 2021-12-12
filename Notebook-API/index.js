// Express Initialisation
const express = require("express");

// Sequelize Initialisation
const sequelize = require("./sequelize");
const app = express();

// Import created models
const Note = require("./models/note");
const User = require("./models/user");
const Tag = require("./models/tag");
const Resource = require("./models/resource");
const StudyGroup = require("./models/studyGroup");

// Define entities relationship

User.belongsToMany(Note, { through: "sharedFile" });
Note.belongsToMany(User, { through: "sharedFile" });
User.belongsToMany(StudyGroup, { through: "groupEntry" });
StudyGroup.belongsToMany(User, { through: "groupEntry" });
Note.belongsToMany(Tag, { through: "tagEntry" });
Tag.belongsToMany(Note, { through: "tagEntry" });
Note.hasMany(Resource);

// Kickstart the Express aplication
app.listen(7777, async () => {
  console.log("server started");
  try {
    await sequelize.authenticate();
    console.log("connected to db");
  } catch {
    console.log("unable to connect to db");
  }
});
