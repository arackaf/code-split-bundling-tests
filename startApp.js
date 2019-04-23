import express from "express";
const app = express();
import path from "path";
import bodyParser from "body-parser";
import session from "express-session";
import cookieParser from "cookie-parser";
import fs from "fs";
import compression from "compression";

app.use(compression());
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);
app.use(cookieParser());

app.use("/dist-wp/", express.static(__dirname + "/dist-wp"));
app.use("/dist-rollup/", express.static(__dirname + "/dist-rollup"));
app.use("/node_modules/", express.static(__dirname + "/node_modules"));

app.get("/wp", browseToWebpack);
function browseToWebpack(request, response) {
  response.sendFile(path.join(__dirname + "/dist-wp/index.html"));
}
app.get("/rollup", browseToRollup);
function browseToRollup(request, response) {
  response.sendFile(path.join(__dirname + "/index-rollup.html"));
}
app.get("/rollup-system", browseToRollupSystem);
function browseToRollupSystem(request, response) {
  response.sendFile(path.join(__dirname + "/index-rollup-system.html"));
}

process.on("uncaughtException", error);
process.on("unhandledRejection", error);
process.on("exit", shutdown);
process.on("SIGINT", shutdown);

function shutdown() {
  process.exit();
}

function error(err) {
  try {
    let logger = new ErrorLoggerDao();
    logger.log("exception", err);
  } catch (e) {}
}

app.listen(process.env.PORT || 3000);

export default null;
