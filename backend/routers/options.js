const express = require("express")
const optionsController = require('../controllers/options')
const router = express.Router()

router.get('/', optionsController.getAllOptions);
router.get('/polls/:poll_id', optionsController.getAllOptionsByPollId)
router.post('/', optionsController.createOption);
router.put('/:id', optionsController.updateOptionById);
router.delete('/delete/option/:id', optionsController.deleteOptionsById);

router.delete('/delete/poll/:poll_id', optionsController.deleteOptionsByPollId);

module.exports = router;