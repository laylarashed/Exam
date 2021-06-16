const mongoose = require("mongoose");

const PirateSchema = new mongoose.Schema({
    // fName:{
    //     type: String,
    //     // unique : [ true, " First Name must be Unique"],
    //     required:[true,"The First Name is required"],
    //     minlength:[3,"The First Name must be at least 3 characters long"],
    //     maxlength:[8,"The First Name be at maxmum 8 characters long"],

    // },
    // lName:{
    //     type: String,
    //     // unique : [ true, "Lats Name must be Unique"],
    //     required:[true,"The Last Name is required"],
    //     minlength:[3,"The Last Name must be at least 3 characters long"],
    //     maxlength:[8,"The Last Name must be at maxmum 8 characters long"],
    // },
    // email:{
    //     type: String,
    //     unique : [ true, "Email must be unique"],
    //     required:[true,"The Email is required"],
    //     minlength:[8,"The Email must be at least 8 characters long"],
    //     maxlength:[50,"The Email must be at maxmum 50 characters long"],
    // },
    // password:{
    //     type: String,
    //     // unique : [ true, "password Name must be Unique"],
    //     required:[true,"The Password is required"],
    //     minlength:[8,"The Password must be at least 8 characters long"],
    //     maxlength:[15,"The Password must be at maxmum 15 characters long"],
    // },
    name:{
        type: String,
        // unique : [ true, " Name must be Unique"],
        required:[true,"The Name is required"],
        // minlength:[3,"the Name must be at least 3 characters long"]
    },
    url:{
        type: String,
        required:[true," URL Image is required"],
        // minlength:[3,Url must be have at least 3 characters long"]
    },
    treasure:{
        type: Number,
        required:[true,"The treasure chealst is required"],
        min : [1, "You treasur must be above 1"],
        max : [10000, "You treasur must be above 10000"]
    },
    pirate:{
        type: String,
        required:[true,"The Pirate chatch is required"],
    },
    crews:{
        type: String,
        required:[true,"The Crew Postion is required"],
    },
    pegleg: {
        type: Boolean,
        required:[true,"The Peg Leg is required"],
        default: true

    },
    eyePatch: {
        type: Boolean,
        required:[true,"The Eye Pathch is required"],
        default: true
    },
    hookHand: {
        type: Boolean,
        required:[true,"The Hook Hand is required"],
        default: true
    }


}, {timestamps: true});

module.exports.Pirate = mongoose.model("Pirate", PirateSchema);