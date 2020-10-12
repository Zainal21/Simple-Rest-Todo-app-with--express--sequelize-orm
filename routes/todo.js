var express = require('express');
var router = express.Router();

/* GET users listing. */
let TodoController = require('../controllers/TodoController')

// set routing
router.get('/', TodoController.index );
router.get('/:id', TodoController.show );
router.post('/', TodoController.store);
router.put('/:id', TodoController.update);
router.delete('/:id', TodoController.destroy);

module.exports = router;
