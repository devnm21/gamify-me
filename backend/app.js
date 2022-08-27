import express from 'express';
import * as path from "path";
import logger from 'morgan'
import {connect} from './lib/connect-redis';
import getUserRepository from "./models/UserModel";

require('dotenv').config();
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const apiResponse = require('./helpers/apiResponse');
const cors = require('cors');

// DB connection
connect()
	.then(async() => {
		console.log('Redis connected');
		await getUserRepository().createIndex();
	}).catch(err => {
		console.log('Error Connecting Redis \n\n',err);
	});

const app = express();

//don't show the log when it is test
if(process.env.NODE_ENV !== 'test') {
	app.use(logger('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use('/', indexRouter);
app.use('/api/', apiRouter);

// throw 404 if URL not found
app.all('*', function(req, res) {
	return apiResponse.notFoundResponse(res, 'Endpoint not found');
});

app.use((err, req, res) => {
	if(err?.name === 'UnauthorizedError'){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
