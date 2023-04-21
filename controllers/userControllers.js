const User = require("../models/user");

module.exports.getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId })
      .select("-password")
      .populate("profileId");

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
