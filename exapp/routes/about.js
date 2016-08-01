var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { 
    
    title: 'About',
    name:'Tawshif Ahsan',
    description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam veniam quia autem non quibusdam, ducimus tenetur aperiam ea vero, neque fuga commodi necessitatibus cupiditate ullam velit modi quae earum, aliquid!'

  });
});

module.exports = router;
