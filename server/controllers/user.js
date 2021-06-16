const {User} = require('../models/User');

module.exports = {
    createUser : (req,res) => {

    User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err));
},

getAllUser : (req,res) => {
    Pirate.find({})
    // Pirate.find.sort("name").exec()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
},

getOneUser : (req,res) => {
    User.findOne({_id: req.params.id}) 
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
},

updateUser : (req,res) => {
    User.updateOne({_id: req.params.id}, req.body, {new: true, runValidators:true})
    .then(edit => res.json(edit))
    .catch(err => res.status(400).json(err));
},

deleteUser : (req,res) => {
    User.deleteOne({_id: req.params.id})
    .then(deleteConfirm => res.json(deleteConfirm))
    .catch(err => res.status(400).json(err))
}

}