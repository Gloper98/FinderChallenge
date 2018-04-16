/*
  main script for only runs every function
*/
/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/

const jsonFunction = () => {
  //loadJSON method
  loadJSON(JSON_FILE, (res) => {
      //Parse JSON string into object
      var dataJSON = JSON.parse(res);
      //load all the functions
      searchForm(dataJSON.data);
  })
};

window.addEventListener('load', jsonFunction);