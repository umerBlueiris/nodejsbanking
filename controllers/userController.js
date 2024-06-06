const smsModel = require("../schemas/smsSchema");
const { getTransactionInfo } = require("transaction-sms-parser");

const index = async (req, res) => {
  try {
    const smsData = await smsModel.find().sort({ _id: "desc" });

    if (smsData.length > 0) {
      res.status(200).json({
        message: "Sms data successfully fetched.",
        result: smsData,
      });
    } else {
      res.status(200).json({
        message: "Sms data successfully fetched but no data available",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

const create = async (req, res) => {
  try {
    const transactionInfo = getTransactionInfo(req.body.sms);

    const smsData = {
      description: req.body.sms ? req.body.sms : "",
      channel: req.body.channel ? req.body.channel : "",
      imei: req.body.imei ? req.body.imei : "",
      account:
        transactionInfo.account.number != ""
          ? transactionInfo.account.number
          : "",
      account:
        transactionInfo.account.number != ""
          ? transactionInfo.account.number
          : "",
      available:
        transactionInfo.balance.available != ""
          ? transactionInfo.balance.available
          : "",
      type:
        transactionInfo.transaction.type != ""
          ? transactionInfo.transaction.type
          : "",
      amount:
        transactionInfo.transaction.amount != ""
          ? transactionInfo.transaction.amount
          : "",
      refNo:
        transactionInfo.transaction.referenceNo != ""
          ? transactionInfo.transaction.referenceNo
          : "",
    };
    if (smsData.type != "") {
      const result = await smsModel.create(smsData);
      res.status(200).json({
        message: "Data successsfully inserted",
        result: result,
      });
    } else {
      res.status(200).json({
        message: "Wrong Data",
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
};

module.exports = { index, create };
