const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();
const { Account } = require("../db/index");
const { default: mongoose } = require("mongoose");

router.get("/balance", authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.userId });
    res.status(200).json({
      balance: account.balance,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});

router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  const { to, amount } = req.body;

  const fromAccount = await Account.findOne({ userId: req.userId }).session(
    session
  );

  if (!fromAccount || fromAccount.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      msg: "Tnvalid account",
    });
  }

  //trnx
  await Account.findOneAndUpdate(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(session);
  await Account.findOneAndUpdate(
    { userId: to },
    { $inc: { balance: +amount } }
  ).session(session);

  //commit trnx
  await session.commitTransaction();
  res.status(200).json({
    msg: "Transfer successful",
  });
});

module.exports = router;
