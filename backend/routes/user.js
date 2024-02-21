const express = require("express");
const z = require("zod");
const { User, Account } = require("../db/index");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

module.exports = router;

router.post("/signup", async (req, res) => {
  try {
    const userSchema = z.object({
      username: z.string().email(),
      firstName: z.string(),
      lastName: z.string(),
      password: z.string().min(8),
    });

    const payload = req.body;
    const isDataValid = userSchema.safeParse(payload);
    if (!isDataValid.success) {
      throw new Error("Incorrect inputs");
    }

    const isExistingUser = !!(await User.findOne({
      username: payload.username,
    }));
    if (isExistingUser) {
      throw new Error("User already exists");
    }

    const newUser = await User.create(payload);
    await Account.create({
      userId: newUser._id,
      balance: 10000 * (Math.random() + 1),
    });

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET);
    res.status(200).json({
      token: token,
    });
  } catch (error) {
    res.status(411).json({
      msg: `${error}`,
    });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const payload = req.body;

    const user = await User.findOne({
      username: payload.username,
      password: payload.password,
    });

    if (!user) {
      throw new Error("User not exist");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    res.status(200).json({
      token: token,
    });
  } catch (error) {
    res.status(411).json({
      msg: `${error}`,
    });
  }
});

router.put("/", authMiddleware, async (req, res) => {
  const updateSchema = z.object({
    firstName: z.string().optional(),
    lasatName: z.string().optional(),
    password: z.string().min(8).optional(),
  });

  const isDataValid = updateSchema.safeParse(req.body);
  if (!isDataValid.success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }
  await User.updateOne({ _id: req.userId }, req.body);
  res.status(200).json({
    msg: "Updated successfully",
  });
});

router.get("/", authMiddleware, async (req, res) => {
  try {
    const allUsers = await User.find({});
    const currentUser = await User.findOne({ _id: req.userId });
    res.status(200).json({
      users: allUsers.map((user) => {
        return {
          _id: user._id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      }),
      currentUser: {
        _id: currentUser._id,
        username: currentUser.username,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
      },
    });
  } catch (error) {
    res.status(404).json({
      msg: "Can't access the database",
    });
  }
});

router.get("/bulk", async (req, res) => {
  const name = req.query.filter;
  const usersWithFirstName = await User.find({ firstName: name });
  const usersWithLastName = await User.find({ lastName: name });
  const filteredUsers = [...usersWithFirstName, ...usersWithLastName];
  res.status(200).json({
    users: filteredUsers.map((user) => {
      return {
        _id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
      };
    }),
  });
});

router.delete("/delete", () => {});
