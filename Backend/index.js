const express = require("express");
const server = express();
const datas = require("./datalist.json");
const cors = require("cors"); // 👈 CORS इम्पोर्ट करें

server.use(cors()); // 👈 CORS को यूज़ करें

server.use((req, res, next) => {
  console.log("hiiiiiiiiiii", req.ip);
  next();
});

const auth = (req, res, next) => {
  console.log("auth");
  if (req.query.password == "123") {
    console.log("auth  inside");
    next();
  } else {
    res.sendStatus(401);
  }
};
// server.use(auth);

server.get("/", auth, (req, res) => {
  // C:\Users\Sushant\Desktop\Ecommerce_Projects\Backend\index.html
  //   res.sendFile(
  //     "C:\\Users\\Sushant\\Desktop\\Ecommerce_Projects\\Backend\\index.html"
  //   );
  res.json({ type: "get" });
});

server.post("/", (req, res) => {
  res.json({ type: "post" });
});
server.delete("/", (req, res) => {
  res.json({ type: "delete" });
});

server.put("/", (req, res) => {
  res.json({ type: "put" });
});
server.listen(8080, () =>
  console.log("sever start hlllllllllllllllliiiiikkkkkkkiiii")
);
