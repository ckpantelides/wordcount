// request will retrieve the html data, cheerio will parse it
var cheerio = require('cheerio');
const request = require('request');

const url = 'http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt';

// request the webpage with the text to be counted
const webText = request(url, function(err, resp, html) {
      if (!err){
        const $ = cheerio.load(html);

        // parse the body of the webpage
        let main = $('body');
        let innerText = main.html();
        return(innerText);
      }
});

exports.webText = webText;
exports.url = url;
