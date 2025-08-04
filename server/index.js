const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
const passport = require("passport");
const helmet = require("helmet");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(passport.initialize());
const userRouter = require("./router/userRouter");

app.use("/user", userRouter);
app.use(helmet());
app.use(
  helmet({
    contentSecurityPolicy: true,
    crossOriginResourcePolicy: { policy: "same-origin" },
    xFrameOptions: { action: "deny" },
  })
);

app.get("/", (req, res) => {
  res.send("Server is connected");
});
app.listen(port, () => {
  console.log(`Server listen to the port: ${port}`);
});
