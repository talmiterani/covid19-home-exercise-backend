const { default: axios } = require("axios")
const dbConn = require("../config/db.config")

var Coin = function(){
}


Coin.fetchAll = function(result){
    dbConn.query(`SELECT * FROM coins`, function(err,res){
        if (err){
            return result(err,null)
        }
        else{
            return result(null,res.recordset)
        }
    })
}

Coin.fetchHistory = (coinId, interval, start, end, result)  => {
    console.log(coinId, interval, start, end);

    axios.get(`https://api.coincap.io/v2/assets/${coinId}/history?interval=${interval}&start=${start}&end=${end}`).then( res =>{
        const data = res.data.data
        return result(null, data)
    }
    )
    .catch(err => result(err, null))
}
Coin.addCoin = function(coinId,result){
    dbConn.query(`SELECT * FROM coins WHERE id='${coinId}'`,function(err,res){
        if (!res.recordset.length){
            axios.get(`https://api.coincap.io/v2/assets/${coinId}`)
            .then((response)=>{
                const data = response.data.data
                let keys = []
                let values = []

                Object.keys(data).forEach((key)=>{
                    keys.push(key)
                }) 
                keys = keys.join(',')

                Object.values(data).forEach((value)=>{
                    values.push(`'${value}'`)
                }) 
                values = values.join(',')
                dbConn.query(`INSERT INTO coins (${keys}) VALUES (${values})`, function(err,res){
                    if (err){
                        console.log("error", err)
                        return result(err,null)
                    }
                    else{
                        return result(null,res)
                    }
                })
            })
            .catch((error)=>{
                return result(error,null)
            })
        }
        else{
            return result({error:true,message:"coin already exists in the database"},null)
        }
    })
}

Coin.fetchCoin = (coinId, result) => {
    dbConn.query(`SELECT * FROM coins WHERE id='${coinId}'`,function(err,res){
        if (err){
            console.log("error", err)
            return result(err,null)
        }
        else{
            return result(null,res)
        }
    })
}

Coin.updateCoin = (coinId, result) => {
    dbConn.query(`SELECT * FROM coins WHERE id='${coinId}'`,function(err,res){
        if (res.recordset.length){
            axios.get(`https://api.coincap.io/v2/assets/${coinId}`).then((response)=>{
                const data = response.data.data
                let set = []

                Object.keys(data).forEach((key)=>{
                    if (key!=="id")
                    set.push(`${key}='${data[key]}'`)
                }) 
                set = set.join(',')
                 

                dbConn.query(`UPDATE coins SET ${set} WHERE id='${coinId}'`, function(err,res){
                    if (err){
                        console.log("error", err)
                        return result(err,null)
                    }
                    else{
                        return result(null,res)
                    }
                })
            })
        }
        else{
            return result({error:true,message:"coin does not exist in the database"},null)
        }
    })
}

Coin.deleteCoin = (coinId, result) => {
    dbConn.query(`DELETE FROM coins WHERE id='${coinId}'`,function(err,res){
        if (err){
            console.log("error", err)
            return result(err,null)
        }
        else{
            return result(null,res)
        }
    })
}

module.exports = Coin