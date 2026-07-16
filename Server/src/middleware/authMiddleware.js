import jwt from "jsonwebtoken";

const authMiddleware = (...roles) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({
          success: false,
          message: "Forbidden",
        });
      }

      req.user = decoded;

      next();
    } catch (err) {
      res.status(401).json({
        success: false,
        message: "Invalid Token",
      });
    }
  };
};

export default authMiddleware;