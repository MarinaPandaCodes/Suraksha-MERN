import jwt from 'jsonwebtoken';

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    // Check if token is provided
    if (!atoken) {
      return res.json({
        success: false,
        message: 'Not Authorized Login Again',
      });
    }

    // Verify and decode token
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);

    // Validate decoded token against admin credentials
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({
        success: false,
        message: 'Not Authorized Login Again',
      });
    }

    next(); // Proceed if valid
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;
