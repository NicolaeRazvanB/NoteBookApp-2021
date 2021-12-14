const router = require("express").Router();
const Note = require("../models/note");

router.put("/users/:userId", async (req, res, next) => {
    try {
        const note = await Note.findByPk(req.params.userId);
        if (user) {
            await note.update(req.body);
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }
});
