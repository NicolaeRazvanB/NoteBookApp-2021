const router = require("express").Router();
const Note = require("../models/note");
const Resource = require("../models/resource");
const Tag = require("../models/tag");
const User = require("../models/user");

// PUT a note
router.put("/notes/:noteId", async (req, res, next) => {
    try {
        const note = await Note.findByPk(req.params.noteId);
        if (user) {
            await note.update(req.body);
            res.status(200).json({ message: "Note updated" });
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        next(error);
    }
});

// PUT a tag
router.put("/tags/:tagId", async (req, res, next) => {
    try {
        const tag = await Tag.findByPk(req.params.tagId);
        if (tag) {
            await tag.update(req.body);
            res.status(200).json({ message: "Tag updated" });
        } else {
            res.status(404).json({ message: "Tag not found" });
        }
    } catch (error) {
        next(error);
    }
});

// PUT a resource
router.put("/resources/:resourceId", async (req, res, next) => {
    try {
        const resource = await Resource.findByPk(req.params.resourceId);
        if (resource) {
            await resource.update(req.body);
            res.status(200).json({ message: "Resource updated" });
        } else {
            res.status(404).json({ message: "Rescource not found" });
        }
    } catch (error) {
        next(error);
    }
});

// PUT a note to a user
router.put("/users/:userId/notes/:noteId", async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.userId);
        if (resource) {
            const notes = await user.getNotes({ id: req.params.noteId });
            const note = notes.shift();
            if (note) {
                await note.update(req.body);
                res.status(200).json({ message: "Note for the user updated" });
            } else {
                res.status(404).json({ message: "Note not found" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        next(error);
    }
});

// PUT a tag to a note
router.put("/notes/:noteId/tags/:tagId", async (req, res, next) => {
    try {
        const note = await Note.findByPk(req.params.noteId);
        if (note) {
            const tags = await note.getTags({ id: req.params.tagId });
            const tag = tags.shift();
            if (tag) {
                await tag.update(req.body);
                res.status(200).json({ message: "Tag for the note updated" });
            } else {
                res.status(404).json({ message: "Tag not found" });
            }
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        next(error);
    }
});

// PUT a resource to a note
router.put("/notes/:noteId/resources/:resourceId", async (req, res, next) => {
    try {
        const note = await Note.findByPk(req.params.noteId);
        if (note) {
            const resources = await note.getResources({
                id: req.params.resourceId,
            });
            const resource = resources.shift();
            if (resource) {
                await resource.update(req.body);
                res.status(200).json({
                    message: "Resource for the note updated",
                });
            } else {
                res.status(404).json({ message: "Resource not found" });
            }
        } else {
            res.status(404).json({ message: "Note not found" });
        }
    } catch (error) {
        next(error);
    }
});
