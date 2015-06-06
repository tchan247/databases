var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(rows){
        console.log("Rows: " + JSON.stringify(rows));
        res.status(200);
        res.send(JSON.stringify(rows));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // var data = JSON.parse(req.data);
      console.log(req.data);
      models.messages.post(req.data, function(){
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
      models.users.post(req, function(){
        res.send();
      });
    }
  }
};

// module.exports.messages.post({data:{name: "terry", roomname:"HR", text:"hello"}});
