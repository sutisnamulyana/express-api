//config
const routes = require('express').Router()
const blog = require('./blog/routes')
const blogRoutes = blog.routes

//temporary handler
let users = {
    get: function(req, res){
        res.send('The blog is listening from this function')
    },

    post: function(req, res){
        res.send('The blog is POST from this function')
    }
};

//generate routes from config
blogRoutes.forEach(api => {
    let handler=api.handler.split('.');
    let handlerFunction=handler[1]
    routes[api.method.toLowerCase()](api.path, users[handlerFunction])
})

//return
module.exports = routes;