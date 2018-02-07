# CineNet Project

The goal of this project is to show the relations between the nominees of the Oscare 2018. Using a network graph we want to illustrate the abundance of interaction between this sample of people.

## What will it look like ?

Our DataViz will be structured using the following key points :

<ul>
  <li> One Network Map : </li>
  <ul>
    <li>One node = One nominee 2018</li>
    <li>One link = One collaboration on one movie (period to be defined)</li>
  </ul>
  <li> Node length : proportional to the cumulate audience</li>
  <li> Node color : depend of the job of the nominee</li>
  <li> Nominee selection : using checkbox (grouped by category)</li>
</ul>

## Source of Data ?

[api.themoviedb.org](https://www.themoviedb.org/)
[More details](https://github.com/fregogui/CineNet/blob/master/DATA.MD)

## How to use it ?

### Collecting data

Download [node.js](https://nodejs.org/).

Then,

```
cd collect-data
cp config.secrets.sample.json config.secrets.json
```

Open the `config.secrets.json` file and put your `api_key` from [The Movie Database](https://www.themoviedb.org/) in the correct field.
Then, 

```
npm install
npm start
```

 
