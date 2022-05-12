const Business = require('../models/business');
const jwt = require('jwt-simple');
const {
    validateEmail,
    validategstPin,
    validatePhoneNo,
} = require("../utils/validation");

module.exports.businessDetails = async (req, res, next) => {
    const { businessName, phoneNo, email, gstpin, description, businesstype, businessCategory, address, pincode } = req.body;

    const gstpinError = validategstPin(gstpin);
    if (gstpinError) return res.status(400).send({ error: gstpinError });

    const phoneNoError = validatePhoneNo(phoneNo);
    if (phoneNoError) return res.status(400).send({ error: phoneNoError });

    const emailError = validateEmail(email);
    if (emailError) return res.status(400).send({ error: emailError });

    try {
        const document = await Business.findOne({
            $or: [{ email: email }, { phoneNo: phoneNo }]
        });

        // if (document) return res.status(400).send('PhoneNo or email already used')
        
        company = new Business({ businessName, phoneNo, email, gstpin, description, businesstype, businessCategory, address, pincode});

        await company.save();

        res.status(201).send({
            user: {
                email: company.email,
                businessName: company.businessName,
            },
            token: jwt.encode({ id: company._id, businessName: company.username }, process.env.JWT_SECRET),
        });
    } catch (err) {
        next(err);
    }
}
    module.exports.getBusinesDetails = async (req, res, next) => {
        try {
            const company = await Business.findOne({ email: req.params.id });
            res.send(company);
        } catch (err) {
            next(err);
        }
    }

    module.exports.updateBusinesDetails = async (req, res, next) => {
        
        const { businessName, phoneNo, email, gstpin, description, businesstype, businessCategory, address, pincode } = req.body;

        const gstpinError = validategstPin(gstpin);
        if (gstpinError) return res.status(400).send({ error: gstpinError });

        const phoneNoError = validatePhoneNo(phoneNo);
        if (phoneNoError) return res.status(400).send({ error: phoneNoError });

        const emailError = validateEmail(email);
        if (emailError) return res.status(400).send({ error: emailError });

        try {
            const company = await Business.updateOne({ email: req.params.id },
                {
                    $set: {
                        businessName: businessName,
                        phoneNo: phoneNo,
                        email: email,
                        gstpin: gstpin,
                        description: description,
                        businessCategory: businessCategory,
                        businesstype: businesstype,
                        address: address,
                        pincode: pincode,
            }});
            res.status(201).send({
            user: {
                email: company.email,
                businessName: company.businessName,
            },
            token: jwt.encode({ id: company._id, businessName: company.username }, process.env.JWT_SECRET),
        });
        } catch (err) {
            next(err);
            }
    }