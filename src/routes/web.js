const express = require('express');
const {getHomepage, getCategory, getLogin} = require('../controllers/homeController')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World! và chào cậu')
  })
router.get('/linhdo', (req, res) => {  
      res.send('Hello Linh Do!')
      })
router.get('/home', getHomepage)
router.get('/category', getCategory)
router.get('/login', getLogin)

module.exports = router;

  