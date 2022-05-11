const express = require("express");
const { requireAuth } = require("../controllers/authControllers");
const router = express.Router();

const {
    // getUserByUsername,
    // searchUser
} = require('../controllers/userControllers');

// router.get('/search/:usernameOrname', searchUser)
// router.get('/display-imgs/:username', requireAuth, getUserDisplayImgs)
// router.get('/username/:usernameOrEmail', getUserByUsername)


module.exports = router;