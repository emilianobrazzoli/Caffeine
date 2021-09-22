// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();


  console.log(Date.now() + " Can we meet at the a coffee machine?");

  //coffeeeeee every 3 minuts
  /**/
  const http = require('http');
  app.get("/", (request, response) => {
    console.log(Date.now() + " Received a coffee: coffeeeeeeeeeee");
    response.sendStatus(200);
  });

  app.listen(process.env.PORT);
  setInterval(() => {
    console.log(Date.now() + " Offer a coffee: coffeeeeeeeeeee");
    http.get(`http://caffeinabot.glitch.me/`);
    http.get(`http://caffeinabot2.glitch.me/`);
    http.get(`http://caffeinabot3.glitch.me/`);
    http.get(`http://arcanacrown.herokuapp.com/`);
    http.get(`https://settemari.herokuapp.com/`);
  }, 280000);
  
