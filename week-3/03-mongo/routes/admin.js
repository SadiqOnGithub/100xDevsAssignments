const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  await Admin.create({ username, password });

  res.json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;
  const newCourse = await Course.create({ title, description, price, imageLink, published })

  res.json({
    message: 'Course created successfully', courseId: newCourse._id
  });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const cources = await Course.find({});
  res.json(cources);
});

module.exports = router;