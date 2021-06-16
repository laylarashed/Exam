const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fName:{
        type: String,
        // unique : [ true, " First Name must be Unique"],
        required:[true,"The First Name is required"],
        minlength:[3,"The First Name must be at least 3 characters long"],
        maxlength:[8,"The First Name be at maxmum 8 characters long"],

    },
    lName:{
        type: String,
        // unique : [ true, "Lats Name must be Unique"],
        required:[true,"The Last Name is required"],
        minlength:[3,"The Last Name must be at least 3 characters long"],
        maxlength:[8,"The Last Name must be at maxmum 8 characters long"],
    },
    email:{
        type: String,
        unique : [ true, "Email must be unique"],
        required:[true,"The Email is required"],
        minlength:[8,"The Email must be at least 8 characters long"],
        maxlength:[50,"The Email must be at maxmum 50 characters long"],
    },
    password:{
        type: String,
        // unique : [ true, "password Name must be Unique"],
        required:[true,"The Password is required"],
        minlength:[8,"The Password must be at least 8 characters long"],
        maxlength:[15,"The Password must be at maxmum 15 characters long"],
    }


}, {timestamps: true});

module.exports.User = mongoose.model("User", UserSchema);