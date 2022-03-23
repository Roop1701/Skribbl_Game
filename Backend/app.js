const Express = require("express");

const app = Express();

// app.use("/static", express.static(__dirname + "/index.html"));
// // app.get("/", function (req, res) {
// //   res.sendfile("Frontend/index.html");
// // });

app.listen(4000, () => {
  console.log("Running on PORT 4000");
});
