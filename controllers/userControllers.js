const Followers = require('../models/Followers');
const Following = require('../models/Following');
const User = require('../models/user');
const ProfileImg = require('../models/profileImg');
const { paginationResults } = require('../middleware/pagination');

module.exports.getusersFollowers = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const { followers } = await Followers.findOne({ user: user._id })
        res.send(followers)
    } catch (error) {
        res.send(error)
    }
}

module.exports.getUserByUsername = async (req, res) => {
    if (!req.params.usernameOrEmail) return "No User"

    const user = await User.findOne({ username: req.params.usernameOrEmail }).select("-password");
    if (!user) return res.status(400).send("No user Found")
    const { _id, fullName, username, private } = user
    const { displayImg } = await ProfileImg.findOne({ "user.username": req.params.usernameOrEmail })
    const { followers } = await Followers.findOne({ user: user._id })
    const { following } = await Following.findOne({ user: user._id })
    return res.status(200).send({ _id, fullName, username, private, displayImg, followers, following });
}

module.exports.searchUser = async (req, res) => {

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    let results = [];
    let imgs = [];

    try {
        await User.find({
            $or: [
                { username: { $regex: req.params.usernameOrname } },
                { email: { $regex: req.params.usernameOrname } },
                { fullName: { $regex: req.params.usernameOrname } }
            ]
        }).limit(limit).skip(startIndex).exec().then(async (res) => {
            const usernameA = []

            for (let i = 0; i < res.length; i++) {
                usernameA.push(res[i].username)
                results.push({ _id: res[i]._id, username: res[i].username, fullName: res[i].fullName })
            }
            await ProfileImg.find({
                "user.username": { $in: usernameA }
            }).then(ans => {
                for (let i = 0; i < res.length; i++) {
                    imgs.push({ profileImg: ans[i].displayImg.profileImg, username: ans[i].user.username })
                }
            })
        })


        let user = imgs.map((item, i) => Object.assign({}, item, results[i]))
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
}

module.exports.getusersFollowersById = async (req, res, next) => {
    try {
        const { followers } = await Followers.findOne({ user: req.params.userId })
        res.send(followers)
    } catch (error) {
        res.send(error)
    }
}

/**** socket functions ******/
module.exports.getFollowersById = async (userId) => {
    try {
        const { followers } = await Followers.findOne({ user: userId })
        return followers
    } catch (error) {
        return error
    }
}

module.exports.getFollowingById = async (userId) => {
    try {
        const { following } = await Following.findOne({ user: userId })
        return following
    } catch (error) {
        return error
    }
}

module.exports.getUserByUsernameSocket = async (username) => {
    if (!username) return "No User"

    const user = await User.findOne({ username: username }).select("-password");
    if (!user) return Error("No user Found")
    return user;
}

module.exports.getFollowersByusername = async (username) => {
    try {
        const user = await User.findOne({ username: username }).select("-password");
        if (!user) return "No user Found"
        const { followers } = await Followers.findOne({ user: user._id })
        return followers
    } catch (error) {
        return error
    }
}

module.exports.getFollowingByusername = async (username) => {
    try {
        const user = await User.findOne({ username: username }).select("-password");
        if (!user) return "No user Found"
        const { following } = await Following.findOne({ user: user._id })
        return following
    } catch (error) {
        return error
    }
}

module.exports.UserDisplayImgsById = async (userId) => {
    const displayImg = await ProfileImg.findOne({ "user._id": userId })
    if (!displayImg) return res.status(400).send("Document Not found check the user database")

    // const result = await ProfileImg.findOne({ "user.username": req.params.username })
    return displayImg
}

module.exports.UserDisplayImgsByUsername = async (username) => {
    const displayImg = await ProfileImg.findOne({ "user.username": username })
    if (!displayImg) return Error("Document Not found check the user database")

    return displayImg
}

module.exports.updateUnfollowRequest = async (profileUserId, followingUserId) => {
    try {
        await Followers.findOneAndUpdate({ user: profileUserId }, {
            $pull: {
                followers: { _id: followingUserId }
            }
        })
        await Following.findOneAndUpdate({ user: followingUserId }, {
            $pull: {
                following: { _id: profileUserId }
            }
        })
        return "unfollowed"
    } catch (error) {
        return error
    }
}

module.exports.updateFollowRequest = async (profileUserId, followingUserId) => {
    try {
        await Followers.findOneAndUpdate({ user: profileUserId }, {
            $push: {
                followers: [{ _id: followingUserId }]
            }
        })
        await Following.findOneAndUpdate({ user: followingUserId }, {
            $push: {
                following: [{ _id: profileUserId }]
            }
        })
        return "followed"
    } catch (error) {
        return error
    }
}

/****************************************************************************** */

module.exports.getusersFollowing = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        const { following } = await Following.findOne({ user: user._id })
        res.send(following)
    } catch (error) {
        res.send(error)
    }
}

module.exports.updateProfileImg = async (req, res) => {
    const { profileImg } = req.body
    const userProfile = await ProfileImg.findOne({ "user.username": req.params.username })
    if (!userProfile) return res.status(400).send("Document Not found check the user database")

    const updateImg = await ProfileImg.findByIdAndUpdate(userProfile._id,
        {
            $set: {
                displayImg: {
                    profileImg: profileImg,
                }
            }
        }, { new: true })
    return res.send(updateImg)
}

module.exports.removeProfileImg = async (req, res) => {
    const userProfile = await ProfileImg.findOne({ "user.username": req.params.username })
    if (!userProfile) return res.status(400).send("Document Not found check the user database")

    const updateImg = await ProfileImg.findByIdAndUpdate(userProfile._id,
        {
            $set: {
                displayImg: {
                    profileImg: "",
                }
            }
        })
    return res.send(updateImg)
}

module.exports.getUserDisplayImgs = async (req, res) => {
    const userProfile = await ProfileImg.findOne({ "user.username": req.params.username })
    if (!userProfile) return res.status(400).send("Document Not found check the user database")

    // const result = await ProfileImg.findOne({ "user.username": req.params.username })
    return res.status(200).send(userProfile)
}




