/*
  This synchronous function is used to check whether a variable is a true JSON String
  Returns true if the test is positive, false if not.
  TODO: It may not be the best way to test it, check for a better way.
*/
exports.isJSONValid = (jsonString) => {
  if(/^[\],:{}\s]*$/.test(jsonString.replace(/\\["\\\/bfnrtu]/g, '@').
  replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
  replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
    return true;
  }
  else {
    return false;
  }
}

/*
  This asynchronous function is used to asynchronously retry a process 'fct'.
  Warning! fct must take an Object obj among its arguments. So, processes used with processRetry must take an object in first argument.
*/
exports.processRetry = (obj, fct, retryTimes, retryDelay, callback) => {
  let cntr = 0;

  let run = () => {
    /* try the async operation */
    fct(obj, (err, res) => {
      ++cntr;
      if(err) {
        if(cntr >= retryTimes) {
          /* if it fails too many times, just send the error out */
          callback(err);
        }
        else {
          /* try again after a delay */
          setTimeout(run, retryDelay);
        }
      }
      else {
        /* success, send the data out */
        callback(null, res);
      }
    });
  }
  /* start our first request */
  run();
}
