const {Pirate} = require('../models/Pirate');

module.exports = {
    createPirate : (req,res) => {

    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
},

getAllPirate : (req,res) => {
    Pirate.find({})
    // Pirate.find.sort("name").exec()
    .then(pirate => res.json(pirate))
    .catch(err => res.status(400).json(err));
},

getOnePirate : (req,res) => {
    Pirate.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
},

updatePirate : (req,res) => {
    Pirate.updateOne({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(edit => res.json(edit))
    .catch(err => res.status(400).json(err));
},

deletePirate : (req,res) => {
    Pirate.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}

}