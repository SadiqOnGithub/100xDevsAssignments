const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
  const { username, password } = req.body
  
  await User.create({ username, password })

  res.send("user created")
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const allCourse = await Course.find({})
  res.send(allCourse)
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router