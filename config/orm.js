var connection = require("../config/connection.js");

var orm = {

  all: function (tableInput, callBack) {

    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err,result) {

      if(err) {
        throw err;
      }
      callBack(result);
    });
  }
};

module.exports = orm;