const express = require('express');
const router = express.Router();
const notes = require('./notes.routes.js');

router.get('/notes', notes.getNotes);
router.post('/notes', notes.postNotes);
router.put('/notes/:id', notes.putNotes);

module.exports = router;