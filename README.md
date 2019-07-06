Wordcount
=================

#### Challenge - create a program to count the occurences of each word in an ebook

* Built with node modules and Express
* There's a scraper module, which uses [Cheerio](https://www.npmjs.com/package/cheerio) to parse the e-book's web address, and saves the e-book as a string
* The string is split at each "space". Newlines/punctuation marks are escaped, and the result's saved in an array
* The count module loops through each array element, checking it isn't a number. It then pushes each word to an object. The hasOwnProperty method is used to check if it's the first occurence of that word, and the value pair of the word is increased accordingly

#### Testing

There are some tests of the code with mocha chai

> npm install // install the dependencies

> node app.js // run the code

> go to localhost:3000

> mocha test // run the tests

![img1]

[img1]: https://github.com/ckpantelides/wordcount/blob/master/counter.PNG
