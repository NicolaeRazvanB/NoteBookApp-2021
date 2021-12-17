const router = require("express").Router();
const User = require("../models/user");
const StudyGroup = require("../models/studyGroup");
const Note = require("../models/note");

//POST A USER
router.post("/users", async (request, response, next) => {
  try {
    const user = await User.create(request.body);
    console.log(user);
    response.status(201).location(user.id).send();
  } catch (error) {
    next(error);
  }
});

//GET ALL USERS
router.get("/users", async (request, response, next) => {
  try {
    const users = await User.findAll();
    if (users.length > 0) {
      response.json(users);
    } else {
      response.sendStatus(204);
    }
  } catch (error) {
    next(error);
  }
});

////////////////////////////////////////////////////////

// PUT a user
router.put("/users/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.update(req.body);
      res.status(200).json({ message: "User updated" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    next(error);
  }
});

// ------------- de vazut daca le pastram -------------
// PUT a user to a study group
router.put(
  "/studyGroups/:studyGroupId/users/:userId",
  async (req, res, next) => {
    try {
      const studyGroup = await StudyGroup.findByPk(req.params.studyGroupId);
      if (studyGroup) {
        const users = await studyGroup.getUsers({
          id: req.params.userId,
        });
        const user = users.shift();
        if (user) {
          await user.update(req.body);
          res.status(200).json({
            message: "User in study group updated",
          });
        } else {
          res.status(404).json({ message: "User not found" });
        }
      } else {
        res.status(404).json({ message: "Study group not found" });
      }
    } catch (error) {
      next(error);
    }
  }
);

// PUT a study group to a user
router.put(
  "/user/:userId/studyGroups/:studyGroupId",
  async (req, res, next) => {
    try {
      const user = await User.findByPk(req.params.userId);
      if (user) {
        const studyGroups = await user.getStudyGroups({
          id: req.params.studyGroupId,
        });
        const studyGroup = studyGroups.shift();
        if (studyGroup) {
          await studyGroup.update(req.body);
          res.status(200).json({
            message: "Study group of user updated",
          });
        } else {
          res.status(404).json({ message: "Study group not found" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (error) {
      next(error);
    }
  }
);

// --------------------------------

// PUT a study group
router.put("/studyGroups/:studyGroupId", async (req, res, next) => {
  try {
    const studyGroup = await StudyGroup.findByPk(req.params.studyGroupId);
    if (studyGroup) {
      await studyGroup.update(req.body);
      res.status(200).json({ message: "Study group updated" });
    } else {
      res.status(404).json({ message: "Study group not found" });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
