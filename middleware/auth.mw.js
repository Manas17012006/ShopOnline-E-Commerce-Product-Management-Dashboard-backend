require('dotenv').config();
const userModel = require("../models/userModel.model");

async function userauth(req, res, next) {
  try {
    const user = await userModel.findOne({
      token: { $ne: "", $exists: true }
    });
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Please Login to get started!"
      });
    }
    
    // Set userId in request and continue
    req.userId = user._id;
    next(); // ✅ No response sent before this
    
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server error: " + err.message
    });
  }
}

module.exports = { userauth };