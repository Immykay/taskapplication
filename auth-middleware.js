module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/auth/login") {
    const { username, password } = req.body;
    const user = require("./db.json").users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.status(200).json({
        id: user.id,
        username: user.username,
        name: user.name,
        token: user.token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    next();
  }
};
//   json-server --watch db.json --middlewares auth-middleware.js
