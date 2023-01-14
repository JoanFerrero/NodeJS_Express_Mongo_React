import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */
export const register = async (req, res) => {
  res.status(201).json(req);
  try {
    const {
      firstName,
      lastName,
      emailreg,
      passwordreg,
      location,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(passwordreg, salt);

    const newUser = new User({
      firstName,
      lastName,
      email: emailreg,
      password: passwordHash,
      location,
      card: [],
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { emaillog, passwordlog } = req.body;
    const user = await User.findOne({ email: emaillog });
    if (!user) return res.status(400).json({ msg: emaillog });

    const isMatch = await bcrypt.compare(passwordlog, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};