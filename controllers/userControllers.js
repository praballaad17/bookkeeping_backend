const User = require('../models/user');



// module.exports.getUserByUsername = async (req, res) => {
//     if (!req.params.usernameOrEmail) return "No User"

//     const user = await User.findOne({ username: req.params.usernameOrEmail }).select("-password");
//     if (!user) return res.status(400).send("No user Found")
//     const { _id, fullName, username, private } = user
//     const { displayImg } = await ProfileImg.findOne({ "user.username": req.params.usernameOrEmail })
//     const { followers } = await Followers.findOne({ user: user._id })
//     const { following } = await Following.findOne({ user: user._id })
//     return res.status(200).send({ _id, fullName, username, private, displayImg, followers, following });
// }

// module.exports.searchUser = async (req, res) => {

//     const page = parseInt(req.query.page)
//     const limit = parseInt(req.query.limit)

//     const startIndex = (page - 1) * limit
//     const endIndex = page * limit
//     let results = [];
//     let imgs = [];

//     try {
//         await User.find({
//             $or: [
//                 { username: { $regex: req.params.usernameOrname } },
//                 { email: { $regex: req.params.usernameOrname } },
//                 { fullName: { $regex: req.params.usernameOrname } }
//             ]
//         }).limit(limit).skip(startIndex).exec().then(async (res) => {
//             const usernameA = []

//             for (let i = 0; i < res.length; i++) {
//                 usernameA.push(res[i].username)
//                 results.push({ _id: res[i]._id, username: res[i].username, fullName: res[i].fullName })
//             }
//             await ProfileImg.find({
//                 "user.username": { $in: usernameA }
//             }).then(ans => {
//                 for (let i = 0; i < res.length; i++) {
//                     imgs.push({ profileImg: ans[i].displayImg.profileImg, username: ans[i].user.username })
//                 }
//             })
//         })


//         let user = imgs.map((item, i) => Object.assign({}, item, results[i]))
//         return res.send(user)
//     } catch (error) {
//         return res.send(error)
//     }
// }




