const express= require('express');
const { register, generatePassword } = require('../controllers/user.controller');

const router= express.Router();

router.post('/register',register);
router.get('/pwdGenerate',generatePassword);

module.exports=router;