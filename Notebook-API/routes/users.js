const router = require("express").Router();
const User = require("../models/user");
const StudyGroup = require("./models/studyGroup");

router.put("/users/:userId", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId);
        if (user) {
            await user.update(req.body);
            res.status(200).json({ message: "User updated" });
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }
});

// doar post ar trebui sa avem pe ruta asta sau si put?
router.put(
    "/studyGroups/:studyGroupId/users/:userId",
    async (req, res, next) => {
        try {
            const studyGroup = await StudyGroup.findByPk(
                req.params.studyGroupId
            );
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

router.put(
    "/user/:userId/studyGroups/:studyGroupId",
    async (req, res, next) => {
        try {
            const user = await User.findByPk(req.params.studyGroupId);
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
