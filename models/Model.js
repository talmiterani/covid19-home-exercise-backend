const fetch = require('node-fetch');

var ApiUs = function(){
}


ApiUs.fetchAll = async function(result){
    response = await fetch('http://covidtracking.com/api/us');
   
        let data = await response.json();
        return result(null,data)
        
}

ApiUs.fetchAllStates = async function(result){
    response = await fetch('https://covidtracking.com/api/states');
   
        let data = await response.json();
        return result(null,data)
        
}
ApiUs.fetchAllStatesDetails = async function(result){
    response = await fetch('https://covidtracking.com/api/states/info');
   
        let data = await response.json();
        return result(null,data)
        
}

ApiUs.fetchUsDaily = async function(result){
    response = await fetch('https://covidtracking.com/api/us/daily');
   
        let data = await response.json();
        return result(null,data)
        
}


module.exports = ApiUs