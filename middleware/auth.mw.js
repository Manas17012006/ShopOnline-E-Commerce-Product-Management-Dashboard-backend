const userModel = require('../models/userModel.model');
const jwt = require('jsonwebtoken');

const userauth = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "Please login to get started!" });
    }

    // Decode token (if using JWT)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by token stored in DB
    const user = await userModel.findOne({ _id: decoded.id, token: token });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid token" });
    }

    // Set req.userId for next handlers
    req.userId = user._id;
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

module.exports = { userauth };
