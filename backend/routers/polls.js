const express = require("express")
const pollsController = require('../controllers/polls')
const router = express.Router()
const {authenticate} = require('../middleware');

router.get('/' , pollsController.getAllPolls);
router.get('/:id' , pollsController.getPollsById);
router.post('/' , pollsController.createPoll);

router.put('/:id', pollsController.updatePollById);

router.delete('/:id' , pollsController.deletePollById);

module.exports = router