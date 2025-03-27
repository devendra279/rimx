// backend/authRouter.js
const express = require("express");
const authRouter = express.Router();

// Mock user database
const users = [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "manager", password: "manager123", role: "project_manager" },
  { username: "employee", password: "emp123", role: "employee" }
];

// Login endpoint
authRouter.post("/login", (req, res) => {
  const { username, password } = req.body;
  
  // Find user (in real app, check hashed password)
  const user = users.find(u => u.username === username && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Redirect based on role (sends frontend path)
  let redirectPath;
  switch (user.role) {
    case "admin":
      redirectPath = "/AdminPanel";
      break;
    case "project_manager":
      redirectPath = "/ManagerPanel";
      break;
    default:
      redirectPath = "/EmployeePanel";
  }

  res.json({ 
    message: "Login successful", 
    redirectTo: redirectPath,
    user: { username: user.username, role: user.role } 
  });
});

module.exports = authRouter;