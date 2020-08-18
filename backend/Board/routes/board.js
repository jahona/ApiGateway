var express = require('express');
var router = express.Router();

var storage = [
  {
    id: 1,
    title: 'hello world',
    content: 'example',
    creator: 'bbo'
  },
  {
    id: 2,
    title: 'hello world2',
    content: 'example2',
    creator: 'bbo'
  },
  {
    id: 3,
    title: 'hello world3',
    content: 'example3',
    creator: 'bbo'
  }
]
  
router.get('/', function(req, res, next) {
  var items = Object.values(storage);
  
  res.json(200, {
    'items': items,
    'total': items.length
  })
});

router.get('/:id', function(req, res, next) {
  res.json(200, storage[req.params.id])
});

module.exports = router;