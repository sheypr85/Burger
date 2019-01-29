var orm = require("../config/orm.js")

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }, 
    insert: function(vals, cb) {
        orm.insertOne("burgers", "burger_name", vals, function(res){
            cb(res);
        });
    },
    update: function(vals, cb) {
        orm.updateOne("burgers", "devoured", true , vals, function(res){
            cb(res);
        });
    }
}

// burger.all("burgers");
// burger.update(1);
// burger.all("burgers")

module.exports = burger;  