import bcrypt from "bcrypt";
import User from "../../models/user/User.js"; 
export const register = async (req, res) => {
  try {
    const { fullName, email, password, CfPassword } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }


    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(409).json({ message: "Email already exists" });
    }


    if (password !== CfPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }


    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);


    const registerUser = await User.create({
      fullName,
      email,
      password: hashPass,
    });

    res.status(201).json({ user: registerUser, message: "Registration successful" });
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, checkUser.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    res.status(200).json({ user: checkUser, message: "Login successful" });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


export default {register,login}