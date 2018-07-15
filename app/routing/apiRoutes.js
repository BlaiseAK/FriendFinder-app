// Linking all the fun buddy friends available

var friendsdata = require("../data/friends.js");

// routing

module.exports = function(app) {
    app.get("/api/funbuddies", function(req, res) {
        res.json(friendsdata)
    });
    
    app.post("/api/funbuddies", function(req, res){

        
        // capture the new fun buddy object to match against
        var newBuddyScores = req.body.scores;
        
        // Create an array to store all the differences
        var potentialsDiffArry = [];
        
        // Used to indicate at what index is the best match from the friendsdata variable
        var closestMatch = 0;
        

        for (var i = 0; i < friendsdata.length ; i++) {
            
            var scoresDiff = 0;
            
            for (var j = 0; j <newBuddyScores.length; j++) {
                
                // compute differences for each question
                scoresDiff += Math.abs(parseInt(newBuddyScores[j]) - parseInt(friendsdata[i].scores[j]));
            }
            
            // push the score difference to the array for the match index
            potentialsDiffArry.push(scoresDiff);
            
        }
        console.log("list of potentials: "+potentialsDiffArry)
        // Now we need to make variables to match against like the matches name and difference (no image since I haven't set that up in the objects)
        for (var i = 0; i<potentialsDiffArry.length; i++) {
            // create a loop that will help find which of the funbuddies is closest
            if (potentialsDiffArry[i]<potentialsDiffArry[closestMatch]){
                // if lowest difference then record it to the established variables
                closestMatch = i
            }
            
        }
        
        // designate the the best match by giving the indexed object of friendsdata array
        bestFunBuddy = friendsdata[closestMatch];
        
        // send stuff back
        res.json(bestFunBuddy);
        
        // done allow information to be called in the get to tell the user their fun buddies name
        friendsdata.push(req.body);
                 
    });
}