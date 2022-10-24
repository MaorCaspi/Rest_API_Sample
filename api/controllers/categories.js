module.exports = {
    getAllCategories: (req, res) => {
        res.status(200).json({
            message: 'Get all'
        });
    },

    createCategory: (req, res) => {
        res.status(200).json({
            message: 'create new'
        });
    },

    updateCategory: (req, res) => {
        const categoryId = req.params.categoryId;
        res.status(200).json({
            message: `update ${categoryId}`
        });
    },

    deleteCategory: (req, res) => {
        const categoryId = req.params.categoryId;
        res.status(200).json({
            message: `delete ${categoryId}`
        });
    }
}