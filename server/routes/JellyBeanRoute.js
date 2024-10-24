// const JellyBeanController = require('../controllers/JellyBeanController')

const {
    getAll,
    insertJellyBean,
    updateJellyBean,
    removeJellyBean,
} = require('../controllers/jellyBeanController');

const express = require('express');
const router = express.Router();

router.get('/', getAll);
router.post('/', insertJellyBean);
router.put('/', updateJellyBean);
router.delete('/', removeJellyBean);

module.exports = router;