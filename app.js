const express = require('express');
const app = express();
const morgan = require('morgan');

const articlesRoutes = require('./api/routes/articles');
const categoriesRoutes = require('./api/routes/categories');
const usersRoutes = require('./api/routes/users');

app.use(morgan("dev")); //for loging all clients inquiries

app.use(express.json()); //for json params
app.use(express.urlencoded({ //for x-www-form params
    extended: false
}));

app.use((req, res, next)=>{ //CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes:

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello!'
    });
});

app.use('/articles', articlesRoutes);
app.use('/categories', categoriesRoutes);
app.use('/users', usersRoutes);

app.use((req, res, next)=>{ //if the route don't exsist
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next)=>{ //response all the errors
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;