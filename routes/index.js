const express = require('express');
const router = express.Router();
require('dotenv').config();




router.get('*', (req,res)=>{
  res.send('<h1>nope</h1>')
});

module.exports = router;