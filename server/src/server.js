const express = require("express");
const countriesRouter = require("./routes/countries");
const activitiesRouter = require("./routes/activities");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

//Modularización Rutas
server.use('/api/v1/countries', countriesRouter);
server.use('/api/v1/activities', activitiesRouter);


module.exports = server;
