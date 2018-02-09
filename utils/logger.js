/*
 * Logger definition file
 *
 * This file is the main script for the logger we use in our scripts.
 * It defines a function with one argument 'type' in order to handle all our script types.
 *
 * File Name:         logger.js
 * Version:           2.2.0
 * Author:            Antonio De Jesus Montez
 * Email:             antoniodjm22@gmail.com
*/

/*
Librairie Winston - Error logging & severity management
*/
const winstonLib = require('winston');

/*
Creating folders
*/
const mkdirp = require('mkdirp');

mkdirp.sync('./logs');

/* get the current time, used to unify the log file */
const timestamp = new Date().getTime().toString();

/* function used for log timestamp */
const tsFormat = () => (new Date()).toLocaleTimeString();

const logger = (type) => {

  /* setting up the logger - could be transported into the console or into a file */
  let winston = new (winstonLib.Logger)({
    levels: winstonLib.config.syslog.levels,
    transports: [
      new (winstonLib.transports.Console)({
      timestamp: tsFormat,
      colorize: true
      }),
      new (winstonLib.transports.File)({
        filename: __dirname + `/../logs/${type}-` + timestamp + '.log',
        timestamp: tsFormat,
        //json: false //to have a human readable output in the file
      })
    ],
  });

  let logging = (level, message) => {
    winston.log(level, `[${type.toUpperCase()}] - ${message}`);
  }

  return logging;
}

module.exports = logger;
