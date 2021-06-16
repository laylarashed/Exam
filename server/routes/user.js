const userController = require('../controllers/user');

module.exports = function(app){
    app.get('/api/user', userController.getAllUser);
    app.post('/api/user', userController.createUser);
    app.get('/api/user/:id', userController.getOneUser);
    app.put('/api/user/:id', userController.updateUser);
    app.delete('/api/user/:id', userController.deleteUser);
}