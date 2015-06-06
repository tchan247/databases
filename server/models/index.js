var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.connection.query("SELECT * FROM messages;", function(err, rows, fields) {
        if(err) throw err;

        callback(rows);
        db.connection.end();
      })
    }, // a function which produces all the messages
    post: function (data, callback) {
      var qString = "INSERT into messages SET ?";
      console.log(data);
      db.connection.query(qString, data, function(err) {
        if(err) throw err;

        callback();
        db.connection.end();
      })
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
       db.connection.query("SELECT * FROM users;", function(err, rows, fields) {
         if(err) throw err;

         callback(rows);
         db.connection.end();
       })
    },
    post: function (data, callback) {
      var qString = "INSERT into users (username) values ('" + data.username + "');";
      console.log(qString);
      db.connection.query(qString,function(err) {
        if(err) throw err;

        callback();
        // db.connection.end();
      })
    }
  }
};






// post: function (data, callback) {
//       var queryString = "INSERT into messages (name) values ('" + data.username + "');"; // + "', \"room\" , \"In mercy's name, three days is all I need.\");"
//         // + "','" + data.roomname + "','" + data.message + "');";
//       console.log("QUERY STRING: " + queryString);
//       db.connection.query(queryString, function(err) {
//         console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//         if(err) throw err;
//         callback();
//         db.connection.end();
//       })
//     } // a function which can be used to insert a message into the database
