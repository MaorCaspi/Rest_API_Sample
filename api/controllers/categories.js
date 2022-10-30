const mongoose = require('mongoose');
const Category = require('../models/category');

module.exports = {
    getAllCategories: (req, res) => {
        Category.find().then((categories) => {
            res.status(200).json({
                categories
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },
    createCategory: (req, res) => {
        const { title, description } = req.body;

        const category = new Category({
            _id: new mongoose.Types.ObjectId(),
            title,
            description
        });

        category.save().then(() => {
            res.status(200).json({
                message: 'The category was created successfully'
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },
    getCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.findById(categoryId).then((category) => {
            res.status(200).json({
                category
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },
    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.findByIdAndUpdate({categoryId}, req.body).then(() => {
            res.status(200).json({
                message: `Category _id: ${categoryId} was updated successfully`
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },
    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;

        Category.deleteOne({_id: categoryId}).then(() => {
            res.status(200).json({
                message: `Category _id: ${categoryId} was deleted successfully`
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    }
}