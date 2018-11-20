const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// make static files available i.e. css
app.use(express.static('public'));

// serves all requests which includes /images in the url from the images folder
app.use('/images', express.static(__dirname + '/Images'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// require the count and scraper modules
var count = require('./modules/count');
var scraper = require('./modules/scraper');

app.get('/', function (req, res) {

  // retrieve parsed text from webpage via scraper module as a string
  var text = scraper.webText.responseContent.body;

  // normalise all text to lowercase, escape any punctuation and 'newlines' and split
  // the string at each space
  //  var words = text.toLowerCase().replace(/[.',;"!:_*/\n/?-]/g,'').split(" ");
  var words = text.toLowerCase()
            .replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ").split(" ");

  // run the wordcount function from the count module
  count.wordCount(words);

  //  console.log(count.wordCount(words));

  // create a nested array of the key/value pairs of the object
  var countedWords =  Object.entries(count.wordCount(words));

  var url = scraper.url;

  res.render('index', {title: "Word Counter", countedWords: countedWords, url: url, error: null});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
