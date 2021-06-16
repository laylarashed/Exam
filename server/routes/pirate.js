const pirateControllers = require('../controllers/pirate');

module.exports = function(app){
    app.get('/api/pirate', pirateControllers.getAllPirate);
    app.post('/api/pirate', pirateControllers.createPirate);
    app.get('/api/pirate/:id', pirateControllers.getOnePirate);
    app.put('/api/pirate/:id', pirateControllers.updatePirate);
    app.delete('/api/pirate/:id', pirateControllers.deletePirate);
}