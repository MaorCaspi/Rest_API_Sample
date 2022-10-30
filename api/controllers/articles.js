const mongoose = require('mongoose');
const Article = require('../models/article');
const Category = require('../models/category');

module.exports = {
    getAllArticles: (req, res) => {
        Article.find().populate('categoryId').then((articles) => {
            res.status(200).json({
                articles
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },

    createArticle: (req, res) => {
        const { title, description, content, categoryId } = req.body;

        Category.findById(categoryId).then((category) => {
            if (!category) {
                return res.status(404).json({
                    message: 'Category not found'
                });
            }

            const article = new Article({
                _id: new mongoose.Types.ObjectId(),
                title,
                description,
                content,
                categoryId
            });

            return article.save();
        }).then(() => {
            res.status(200).json({
                message: 'The article was created successfully'
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },

    getArticle: (req, res) => {
        const articleId = req.params.articleId;

        Article.findById(articleId).populate('categoryId').then((article) => {
            res.status(200).json({
                article
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },

    updateArticle: (req, res) => {
        const articleId = req.params.articleId;
        Article.findByIdAndUpdate({articleId}, req.body).then(() => {
            res.status(200).json({
                message: `Article _id: ${categoryId} was updated successfully`
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    },

    deleteArticle: (req, res) => {
        const articleId = req.params.articleId;
        Article.deleteOne({_id: articleId}).then(() => {
            res.status(200).json({
                message: `Article _id: ${categoryId} was deleted successfully`
            });
        }).catch(error => {
            res.status(500).json({
                'status': 'fail',
                'error': error.message
            });
        });
    }
}