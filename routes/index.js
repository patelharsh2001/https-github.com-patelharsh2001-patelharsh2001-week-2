var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('../views/partials/webpages/home.ejs', { title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('../views/partials/webpages/about.ejs', { title: 'About' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('../views/partials/webpages/services.ejs', { title: 'Services' });
});

/* GET Projects page. */
router.get('/project', function(req, res, next) {
  res.render('../views/partials/webpages/projects.ejs', { title: 'Projects' });
});

/* GET Contacts page. */
router.get('/contacts', function(req, res, next) {
  res.render('../views/partials/webpages/contacts.ejs', { title: 'Contacts' });
});
module.exports = router;
