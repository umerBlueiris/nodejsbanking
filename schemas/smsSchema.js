const mongoose = require("mongoose");

const SmsSchema = new mongoose.Schema(
  {
    description: { type: String, default: null },
    channel: { type: String, default: null },
    type: { type: String, default: null },
    amount: { type: String, default: null },
    available: { type: String, default: null },
    refNo: { type: String, default: null },
    account: { type: String, default: null },
    imei: { type: String, default: null },
  },
  { timestamps: true }
);

const smsModel = mongoose.model("smsdata", SmsSchema);

module.exports = smsModel;
