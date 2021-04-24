let ApiUs = require("../models/Model")

exports.fetchAll = function (req,res){
    ApiUs.fetchAll(function(err,coins){
        if (err){
            return res.send(err)}
        else{
            return res.json({error: false,data:coins})
        }
    })
}
exports.fetchAllStates = function (req,res){
    ApiUs.fetchAllStates(function(err,coins){
        if (err){
            return res.send(err)}
        else{
            return res.json({error: false,data:coins})
        }
    })
}

exports.fetchAllStatesDetails = function (req,res){
    ApiUs.fetchAllStatesDetails(function(err,coins){
        if (err){
            return res.send(err)}
        else{
            return res.json({error: false,data:coins})
        }
    })
}

exports.fetchUsDaily = function (req,res){
    ApiUs.fetchUsDaily(function(err,coins){
        if (err){
            return res.send(err)}
        else{
            return res.json({error: false,data:coins})
        }
    })
}