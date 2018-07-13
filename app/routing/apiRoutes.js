// Linking all the fun buddy friends available

var friendsdata = require("../data/friends.js");

// routing

module.exports = function(app) {
    app.get("/api/funbuddies", function(req, res) {
        res.json(friendsdata)
    });

    app.post("/api/funbuddies", function(req, res){
        res.push(req.body);

        // The ending result of this was not completed to find the persons best match.

        // capture the new fun buddy object to match against

        // Now we need to make variables to match against like the matches name and difference (no image since I haven't set that up in the objects)

        // create a loop that will help find which of the funbuddies is closest

        // compute differences for each question

        // if lowest difference then record it to the established variables

        // done allow information to be called in the get to tell the user their fun buddies name
         
    })
}