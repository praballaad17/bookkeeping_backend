const express = require("express");
const { requireAuth } = require("../controllers/authControllers");
const router = express.Router();

const {
    getUserByUsername,
    getusersFollowers,
    getusersFollowersById,
    getUserDisplayImgs,
    updateProfileImg,
    removeProfileImg,
    getusersFollowing,
    updateFollowRequest,
    updateUnfollowRequest,
    searchUser
} = require('../controllers/userControllers');

router.get('/search/:usernameOrname', searchUser)
router.get('/display-imgs/:username', requireAuth, getUserDisplayImgs)
router.get('/username/:usernameOrEmail', getUserByUsername)
router.get('/username/followers/:username', requireAuth, getusersFollowers)
router.get('/username/following/:username', requireAuth, getusersFollowing)
router.put('/follow/:profileUserId', requireAuth, updateFollowRequest)
router.put('/unfollow/:profileUserId', requireAuth, updateUnfollowRequest)
router.get('/userId/followers/:profileUserId', requireAuth, getusersFollowersById)
router.put('/profile-img/:username', requireAuth, updateProfileImg)
router.delete('/profile-img/:username', requireAuth, removeProfileImg)


module.exports = router;