//returns object containing waste products of ingred
function calcOutput(ingred, url, MongoClient){
  /*var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');*/

  //var url = 'mongodb://';
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    var dbo = db.db("carbon");
    dbo.collection("agriculture").findOne({"Category": {$text: ingred}}, {"TruncID": 1}, function(err, result){ //finds the id of the ingredient
      if (err) throw err;
      dbo.collection("agriculture").find({"TruncID":result, "InfoType": "Outputs"},{"Field": 1, "Metric": 1})
	  function(err,result2){ //finds all "OUTPUTS" with the id
        if (err) throw err;
        return result2;
      }
    });
  });
}

//returns total waste product mass of ingreds
function calcCarbon(ingreds, url, MongoClient){
  totalWaste = {};
  ingredKeys = Object.keys(ingreds);
  for(int i = 0; i < ingredKeys.length; i++){
    waste = calcOutput(ingredKeys.i, url, MongoClient); //Array of the masses of each waste product
    wasteKeys = Object.keys(waste); //The keys to the waste products; the names of each waste product
    for(int j = 0; j < wasteKeys.length; j++){
      totalWasteKeys = Object.keys(totalWaste);
      for(int k = 0; k < totalWasteKeys.length; k++){
        if(wasteKeys.j == totalWasteKeys.k){//checks if the total waste for the product already has a field for a certain waste product
          waste.(wasteKeys.j) += totalWaste.(totalWasteKeys.k);//adds the waste from the total to the waste of the individual ingredient
        }
      }
    }
    totalWaste = Object.assign(totalWaste, waste); //assigns new totals from waste to totalWaste
  }
  console.log(totalWaste);
  return totalWaste;
}

// {"CO2": "23", "Methane":"3"}