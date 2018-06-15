const express = require('express')
const server = express()
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
server.use(cors());
server.use(bodyParser.json());
server.use(express.static(__dirname + "/../client/dist"));

server.get("/", (request, response) => {
  response.sendFile(path.join(`${__dirname}/../client/index.html`));
});

server.listen(3000, () => console.log('Example app listening on port 3000!'))