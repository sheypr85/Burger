// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
    selectAll: function(table, cb) {
        var query = "SELECT * FROM ?? ";
        connection.query(query, [table], function(err, res){
            if (err) {
                throw err;
            }
            console.log(res)
        });
    },
    create: function(vals) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?) ";
        connection.query(query, [vals], function(err, res){
            if (err) {
                throw err;
            }
            console.log(res)
        });
    }
};

orm.create("Bean Burger");
// module.exports = orm;