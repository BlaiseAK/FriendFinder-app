// Linking all the fun buddy friends available

var friendsdata = require("../data/friends");

// routing

module.exports = function(app) {
    app.get("/api/funbuddies", function(req, res) {
        res.json(friendsdata)
    });

    app.post("/api/funbuddies", function(req, res){

         
    })
}