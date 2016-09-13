linkify
=======

A simple node module to convert the url-strings (having http://, https:// , www., or ftp:// ) into the html clickable links.

For eg : As string like => this is the link to my git profile https://github.com/abhishekg785, will be converted simply into

<code>
  this is the link to my git profile <a href = 'https://github.com/abhishekg785/'>https://github.com/abhishekg785/</a>
</code>

##Usage
<code>
  var linkify = require('linkify');

  var stringURL = 'this is a link to fb www.fb.com';

  var processedURL = linkify(stringURL);

  console.log(processedURL); // this is a link to fb <a style = "color:#8e44ad" href="http://www.fb.com" target="_blank">www.fb.com</a>
</code>

##Installation
  npm install linkify
