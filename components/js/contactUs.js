const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// import express from "express";
// import http from "http";
// import path from "path";
// import nodemailer from "nodemailer";

// const app = express();
// const server = http.Server(app);
// var port = 3000;

// app.set("port", port);
// app.use(express.json);
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname, "index.html")));


// //Routing
// app.get("/", function(req,res){
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// //initialize web server
// server.listen(port,function(){
//   console.log(`starting server on port: ${port}`);
// });
