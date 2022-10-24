const express = require('express');
const router = express.Router();

const {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/Categories');

router.get('/', getAllCategories);
router.post('/', createCategory);
router.patch('/:CategoryId', updateCategory);
router.delete('/:CategoryId', deleteCategory);

module.exports = router;