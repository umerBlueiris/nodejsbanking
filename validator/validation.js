const { check, validationResult } = require("express-validator");

const smsValidation = [
  check("channel").notEmpty().withMessage("Channel field is requied"),
  check("sms").notEmpty().withMessage("SMS field is required"),
  check("imei").notEmpty().withMessage("IMEI field is required"),
  async (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.errors.map((message) => message.msg);
      return res.status(422).json({
        message: errors,
      });
    }
    next();
  },
];

module.exports = { smsValidation };
