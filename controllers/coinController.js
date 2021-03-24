let Coin = require("../models/Coin")
const { default: axios } = require('axios');

exports.fetchAll = function (req,res){
    Coin.fetchAll(function(err,coins){
        if (err)
            return res.send(err)
        else{
            return res.json({error: false,data:coins})
        }
    })
}
exports.fetchHistory = (req, res) =>{
    console.log(req.body);
    Coin.fetchHistory(req.params.id, req.body.interval, req.body.start, req.body.end, (err, coins) => {
        if (err)    return res.json({error: true, message:err})
        return res.json({error: null, data:coins})
    })
}
exports.addCoin = function (req,res){
    Coin.addCoin(req.params.id,function(err,coin){
        if (err)
            return res.json({error:true, message:err})
        else{
            return res.json({error: false,message:coin})
        }
    })
}

exports.fetchCoin = (req,res)=>{
    Coin.fetchCoin(req.params.id, (err,coin)=>{
        if (err)
            return res.json({error:true, message:err})
        else
            return res.json(coin.recordset[0])
    })
}

exports.updateCoin = (req,res)=>{
    Coin.updateCoin(req.params.id,function(err,coin){
        if (err)
            return res.json({error:true, message:err})
        else{
            return res.json({error: false,message:coin})
        }
    })
}

exports.deleteCoin = (req,res)=>{
    Coin.deleteCoin(req.params.id, function(err,coin){
        if (err)
            return res.json({error:true, message:err})
        else{
            return res.json({error: false,message:coin})
        }
    })
}
