var db = require("../models");
module.exports = function(app) {
  // Get all examples
  app.get("/api/stops", function(req, res) {
    db.QTrain.findAll({}).then(function(stops) {
      console.log("stops is here", stops);
      res.json(stops);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.user.create(req.body).then(function(usersDB) {
      res.json(usersDB);
    });
  });
  app.get("/api/swayselected/startST:", function(req, res) {
    db.user.findOne({
     where:{
       stops:req.params.startST
     } 
    }.then(function(usersDB) {
      res.json(usersDB);
    })
  );
//***** Luicse login ******////
  // app.post("/api/login", function(req, res) {
  //   db.user.create(req.body).then(function(usersDB) {
  //     res.json(usersDB);
  //   });
  // }); 

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.user.destroy({ where: { id: req.params.id } }).then(function(usersDB) {
      res.json(usersDB);
    });
  });


app.get("/api/posts/:id", function(req, res) {
  {
    db.user.findOne({
      where: {
        id : req.user.user
      }
    })
  }
  db.user.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(function(usersDB) {
      res.json(usersDB);
    });
});

app.post("/api/posts", function(req, res) {
  console.log(req.body);
  db.user.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(function(usersDB) {
      res.json(usersDB);
    });
});
};