const Business = require("../models/business");
const jwt = require("jwt-simple");
const {
  validateEmail,
  validategstPin,
  validatePhoneNo,
} = require("../utils/validation");
const User = require("../models/user");

module.exports.updateBusinessDetails = async (req, res, next) => {
  const { userId } = req.params;
  const {
    businessName,
    phoneNo,
    email,
    gstin,
    description,
    businessType,
    gstType,
    address,
    state,
    pincode,
  } = req.body;

  const user = await User.findById(userId);

  if (user) {
    if (!user.profileId) {
      const profile = new Business({
        businessName,
        phoneNo,
        email,
        gstin,
        description,
        businessType,
        gstType,
        address,
        pincode,
        state,
      });

      try {
        await profile.save();
        await User.findByIdAndUpdate(userId, {
          $set: {
            profileId: profile._id,
          },
        });

        return res.status(201).send("Create Profile Updated to user Document");
      } catch (error) {
        console.log(error);

        return res
          .status(400)
          .send("Cannot create profile, and update to user document");
      }
    } else {
      try {
        await Business.findByIdAndUpdate(user.profileId, {
          $set: {
            businessName: businessName,
            phoneNo: phoneNo,
            email: email,
            gstin: gstin,
            state,
            description: description,
            gstType: gstType,
            businessType: businessType,
            address: address,
            pincode: pincode,
          },
        });

        return res.status(200).send("Profile Updated");
      } catch (error) {
        console.log(error);
        return res.status(200).send("cannot update Profile");
      }
    }
  }
};
