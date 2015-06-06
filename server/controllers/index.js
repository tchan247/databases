var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log("DOSENT MATTER");
      models.messages.get(function(rows){
        console.log("Rows: " + JSON.stringify(rows));
        res.status(200);
        res.send(JSON.stringify(rows));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(){
        res.send();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(rows){
        console.log("Rows: " + JSON.stringify(rows));
        res.status(200);
        res.send(JSON.stringify(rows));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, function(){
        res.send();
      });
    }
  }
};

// module.exports.messages.post({body:{username: "ter1234ry", roomname:"HR", text:"hrrrrrrello"}});
// module.exports.users.post({body:{username: "ter1234ry"}});

