import jwt from 'jsonwebtoken';

// Middleware to authenticate user via JWT token
const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: 'Not Authorized Login Again',
      });
    }

    // Verify token and attach userId to request body
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
