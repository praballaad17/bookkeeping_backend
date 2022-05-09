const express = require("express");
const router = express.Router();

const {
  loginAuthentication,
  register,
  requireAuth,
  changePassword,
  getUserById
} = require('../controllers/authControllers');
router.get('/userId/:id', getUserById)
router.post('/login', loginAuthentication);
router.post('/register', register);
router.put('/password', requireAuth, changePassword);
module.exports = router;
