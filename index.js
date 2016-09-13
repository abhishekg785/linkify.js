/**
* @author { abhishek goswami ( hiro ) }
* @github { abhishekg785 }
* @gmail { abhishekg785@gmail.com }
*
* simple module to convert the url in the string into the clickable html link
*/

var patternToMatchRegex = {
  pattern1 : /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,       /* url starting with https:// , http:// or ftp:// */
  pattern2 : /(^|[^\/])(www\.[\S]+(\b|$))/gim                                                 /* url starting with www */
}

/**
* @param { String }
* @return { String }
*/
module.exports = function(string){
  return string
    .replace(patternToMatchRegex.pattern1, '<a style = "color:#8e44ad" href="$1" target="_blank">$1</a>')
    .replace(patternToMatchRegex.pattern2, '$1<a style = "color:#8e44ad" href="http://$2" target="_blank">$2</a>')
}
