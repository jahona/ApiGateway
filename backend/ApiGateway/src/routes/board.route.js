const express = require('express');
const { getBoardList, getBoard } = require('../controllers/board.controller');
const router = express.Router();

router.get('/', getBoardList);
router.get('/:id', getBoard)

module.exports = router;