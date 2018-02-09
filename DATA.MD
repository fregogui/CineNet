All the Academy Awards 2018 nominees have been put into `collect-data/data/nominees.txt`. This file is designed like this : `[list of nominees for the same movie and award separated by a comma]|[movie]|[award]`. In `collect-data`,  there's a script named `collectData.js` which can be used to get a `database.json`file in which there's an array of JSON Object containing info about a nominee. For instance : 

```
{
		"birthday": "1957-04-29",
		"deathday": null,
		"id": 11856,
		"name": "Daniel Day-Lewis",
		"gender": 2,
		"biography": "Daniel Michael Blake Day-Lewis (born 29 April 1957) is an English actor with both British and Irish citizenship. His portrayals of Christy Brown in My Left Foot (1989) and Daniel Plainview in There Will Be Blood (2007) won Academy and BAFTA Awards for Best Actor, and Screen Actors Guild as well as Golden Globe Awards for There Will Be Blood. His role as Bill \"The Butcher\" Cutting in Gangs of New York (2002) earned him the BAFTA Award and a Screen Actors Guild Award.\n\nDay-Lewis, who grew up in London, is the son of actress Jill Balcon and the Anglo-Irish Poet Laureate, Cecil Day-Lewis. He is a method actor, known for his constant devotion to and research of his roles. Often, he will remain completely in character for the duration of the shooting schedule of his films, even to the point of adversely affecting his health. He is known as one of the most selective actors in the film industry, having starred in only five films since 1997, with as many as five years between roles.\n\nDescription above from the Wikipedia article Daniel Day-Lewis, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
		"popularity": 2.429885,
		"place_of_birth": "Greenwich, London, England, UK",
		"profile_path": "/hknfCSSU6AMeKV9yn9NTtTzIEGc.jpg",
		"adult": false,
		"imdb_id": "nm0000358",
		"homepage": null,
		"credits": {
			"cast": [
				{
					"character": "Abraham Lincoln",
					"credit_id": "52fe4886c3a368484e0fd425",
					"poster_path": "/gkkiDu9srCCbCMxGKwNwKCxK7KF.jpg",
					"id": 72976,
					"video": false,
					"vote_count": 1605,
					"adult": false,
					"backdrop_path": "/9vZzjmaXIYotKGnCfQyWBD7PAIO.jpg",
					"genre_ids": [
						18,
						36
					],
					"original_language": "en",
					"original_title": "Lincoln",
					"popularity": 22.426906,
					"title": "Lincoln",
					"vote_average": 6.7,
					"overview": "A revealing drama that focuses on the 16th President's tumultuous final months in office. In a nation divided by war and the strong winds of change, Lincoln pursues a course of action designed to end the war, unite the country and abolish slavery. With the moral courage and fierce determination to succeed, his choices during this critical moment will change the fate of generations to come.",
					"release_date": "2012-11-16"
				},
				{
					"character": "Narrator (voice)",
					"credit_id": "53a64e85c3a3687495001c7e",
					"poster_path": "/5vOTEFECUAjBnM7sUEHw4Qs93XC.jpg",
					"id": 278073,
					"video": false,
					"vote_count": 0,
					"adult": false,
					"backdrop_path": null,
					"genre_ids": [
						99,
						36,
						10752
					],
					"original_language": "en",
					"original_title": "Access to the Danger Zone",
					"popularity": 1.018378,
					"title": "Access to the Danger Zone",
					"vote_average": 0,
					"overview": "Directed by Peter Casaer and narrated by Daniel Day-Lewis, this documentary provides a harrowing look at the challenges of delivering humanitarian aid in armed conflicts. “Access to the Danger Zone” explores the strategies that Doctors Without Borders has employed to save lives in the world’s worst war zones, including Afghanistan, Somalia, and eastern Democratic Republic of Congo—strategies that are tested each and every day. Interviews with key experts from Doctors Without Borders, the International Committee of the Red Cross, and the United Nations are accompanied by dramatic footage shot in these countries in 2011 and 2012.",
					"release_date": "2012-06-01"
				},
				{
					"character": "Reynolds Woodcock",
					"credit_id": "57516e409251412317000bc0",
					"release_date": "2017-12-25",
					"vote_count": 67,
					"video": false,
					"adult": false,
					"vote_average": 7.5,
					"title": "Phantom Thread",
					"genre_ids": [
						18,
						10749
					],
					"original_language": "en",
					"original_title": "Phantom Thread",
					"popularity": 33.233902,
					"id": 400617,
					"backdrop_path": "/XwBS9PO7iC2gB0C6ZtlhAaMLat.jpg",
					"overview": "In the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock and his sister Cyril are at the center of British fashion. Women come and go through Woodcock’s life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma, who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
					"poster_path": "/yZ8j8xKk2xQ1d88hB8YG6LZfRQj.jpg"
				}
			],
			"crew": [
				{
					"id": 400617,
					"department": "Writing",
					"original_language": "en",
					"original_title": "Phantom Thread",
					"job": "Script Consultant",
					"overview": "In the glamour of 1950s post-war London, renowned dressmaker Reynolds Woodcock and his sister Cyril are at the center of British fashion. Women come and go through Woodcock’s life, providing the confirmed bachelor with inspiration and companionship, until he comes across a young, strong-willed woman, Alma, who soon becomes a fixture in his life as his muse and lover. Once controlled and planned, he finds his carefully tailored life disrupted by love.",
					"vote_count": 67,
					"video": false,
					"poster_path": "/yZ8j8xKk2xQ1d88hB8YG6LZfRQj.jpg",
					"backdrop_path": "/XwBS9PO7iC2gB0C6ZtlhAaMLat.jpg",
					"title": "Phantom Thread",
					"popularity": 33.233902,
					"genre_ids": [
						18,
						10749
					],
					"vote_average": 7.5,
					"adult": false,
					"release_date": "2017-12-25",
					"credit_id": "5a60db85c3a368536000187c"
				}
			]
		},
		"nomination": [
			{
				"movie": "Phantom Thread",
				"award": "Best Performance by an Actor in a Leading Role"
			}
		]
	}
```

To use this script, see README.md.
