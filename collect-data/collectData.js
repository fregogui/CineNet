//Getting our configuration data
const config = require('./config.secrets.json');

/*
  Getting the libraries we need
*/
const superagent = require('superagent'); //to make requests
const async = require('async'); //to make async operations
const fs = require('fs');
const logger = require('./utils/logger')('tmdb');

/*
  Beginning of the script
*/

let people = [];

fs.readFile('./data/nominees.txt', 'latin1', (err, data) => {
	if (err || typeof data === 'undefined') {
		logger('warning', `Error while reading the nominee file`);
		logger('notice', err.message);
		return;
	}

	let lines = data.split('\n');

	async.eachSeries(lines, (line, callback) => {
	  setTimeout( () => {
	    //Get info from line
			let lineInfo = line.split('|');
			let nominees = lineInfo[0].split(',');
			let movie = lineInfo[1];
			let award = lineInfo[2].replace('\r','');

			async.eachSeries(nominees, (nominee, asyncIterator) => {

				let request = {
					api_key: config.tmdb.api_key,
					language: 'en-US',
					query: nominee,
					page: '1',
					include_adult: 'false'
				};

				superagent.get(`${config.tmdb.website_url}/search/person`).query(request).end((err, response) => {
					if (err || typeof response === 'undefined') return asyncIterator(err.message);

					if (response.body.results.length === 0) return asyncIterator();

					let searchNominee = people.findIndex( obj => {
						return obj.name === response.body.results[0].name;
					});

					if (searchNominee !== -1) {
						people[searchNominee].nomination.push({
							movie: movie,
							award: award
						});
						asyncIterator();
					}
					else {
						let person_id = response.body.results[0].id;

						superagent.get(`${config.tmdb.website_url}/person/${person_id}`).query(request).end((err, res) => {
							if (err || typeof res === 'undefined') return asyncIterator(err.message);

							let person = res.body;

							superagent.get(`${config.tmdb.website_url}/person/${person_id}/movie_credits`).query(request).end((err, credits) => {
								if (err || typeof credits === 'undefined') return asyncIterator(err.message);

								let movies = credits.body;

								let movie_credits = {};

								movie_credits.cast = movies.cast.filter( movie => {
									let date = new Date(movie.release_date);
									return Number(date.getUTCFullYear()) + 5 >= 2018 && Number(date.getUTCFullYear()) < 2018 && !(movie.character.indexOf('Himself') !== -1 || movie.character.length !== '');
								});

								movie_credits.crew = movies.crew.filter( movie => {
									let date = new Date(movie.release_date);
									return Number(date.getUTCFullYear()) + 5 >= 2018 && Number(date.getUTCFullYear()) < 2018;
								});

								let nomination = {
									movie: movie,
									award: award
								};
								let tmp_array = [];
								tmp_array.push(nomination);

								person.credits = movie_credits;
								person.nomination = tmp_array;
								delete person.also_known_as;

								people.push(person);
								asyncIterator();

							});
						});
					}
				});
			}, err => {
				if (err) return callback(err);
				callback();
			});
	  }, 100);
	}, err => {
	  // if any of the file processing produced an error, err would equal that error
	  if (err) {
	    // One of the iterations produced an error.
	    // All processing will now stop.
	    logger('warning', `${err}`);
	    logger('notice', `A nominee has a problem`);
	  } else {
	    logger('info', `All nominees have been processed successfully`);
			fs.writeFile('./data/database.json', JSON.stringify(people, null, "\t"), err => {
				if (err) {
					logger('warning', `${err.message}`);
			    logger('notice', `Error while writing into database.json`);
					return;
				}
				logger('info', 'The file has been saved!');
			});
	  }
	});
})
