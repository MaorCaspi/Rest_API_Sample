module.exports = {
    getAllArticles: (req, res) => {
        res.status(200).json({
            message: 'Get all'
        });
    },

    createArticle: (req, res) => {
        res.status(200).json({
            message: 'create new'
        });
    },

    updateArticle: (req, res) => {
        const articleId = req.params.articleId;
        res.status(200).json({
            message: `update ${articleId}`
        });
    },

    deleteArticle: (req, res) => {
        const articleId = req.params.articleId;
        res.status(200).json({
            message: `delete ${articleId}`
        });
    }
}