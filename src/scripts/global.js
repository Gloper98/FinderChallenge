/*
  constants and global functions
*/

let JSON_FILE = '/books-schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

var loadJSON = (url, callback) => {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url , true);
    xobj.onreadystatechange = function(){
        if(xobj.readyState == 4 && xobj.status == "200"){
            // var content = JSON.parse(xobj.responseText);
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
};