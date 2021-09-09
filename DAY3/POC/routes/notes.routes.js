const Notes = require('../models/sequelize');

function getNotes(req, res) {
  Notes.findAll()
    .then((note) => {
      res.send(note);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occoured while fetching notes',
      });
    });
}

function postNotes(req, res) {
  console.log('=== req body ===', req.body);
  Notes.create({ id: req.body.id, note: req.body.note, category: req.body.category })

    .then((notes) => {
      res.send(notes);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occoured while Creating a note',
      });
    });
}

function putNotes(req, res) {
  console.log('=== req params ===', req.params.id);
  Notes.update(req.body, {
    where: { id: req.params.id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'note was updates sucessfully!!',
        });
      } else {
        res.send({
          message: `cannont update note with id: ${req.params.id}. Maybe note was not found or req.body was empty.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'some error occoured while updating notes',
      });
    });
}

module.exports = { getNotes, postNotes, putNotes };
