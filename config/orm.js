// Import MySQL connection.
var connection = require("./connection.js");


var orm = {
    selectAll: function(tableName, cb) {
        var query = "SELECT * FROM ?? ";
        connection.query(query, [tableName], function(err, res){
            if (err) {
                throw err;
            }
            console.log(res)
            cb(res)
        });
    },
    insertOne: function(table, cols, vals, cb) {
        var query = "INSERT INTO ?? (??) VALUES (?) ";
        connection.query(query, [table, cols, vals], function(err, res){
            if (err) {
                throw err;
            }
            console.log(res)
            cb(res)
        });
    },
    updateOne: function(table ,cols, vals, id, cb) {
        var query = "UPDATE ?? SET ?? = ? WHERE id = ? ";
        connection.query(query, [table, cols, vals, id ], function(err, res){
            if (err) {
                throw err;
            }
            
            console.log(res)
            cb(res)
        });
    }
};

// orm.selectAll("Burgers")
// orm.insertOne("Burgers", "burger_name", "Chicken Avocado Ranch")
// orm.selectAll("Burgers")
// orm.updateOne("Burgers", "devoured", "1", 2 )
// orm.selectAll("Burgers")
module.exports = orm;