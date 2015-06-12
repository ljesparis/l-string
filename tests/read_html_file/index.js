(function(){
	var string = require("../../l-string")
	  , fs = require('fs')
	  , path = '/home/leoxnidas/Escritorio/node/l-string/tests/read_html_file/index.html'
	  , encoding = "utf8"
	  , html = ""; 
	fs.readFile(path, encoding, function (err, data) {
	  if (err) throw err;
	  html = data;
	  for (var i = 1; i <= 5; i++) {
	  	html = html.add2TagStyle("div" + i , [['margin',['10dp',0,'10dp', 0]], ['color','red']])
	  	html = html.add2TagClassName("div" + i, 'algo' + i)
	  	html = html.add2TagIdName("div" + i, 'algo' + i)
	  	html = html.add2TagClassName("div" + i, 'algor' + i)
	  	html = html.add2TagIdName("div" + i, 'algor' + i)
	  	html = html.add2TagStyle("div" + i , [['padding',['10dp',0,'10dp', 0]], ['background','red']])
	  }
	  fs.writeFile(path, html, function(err){
	  	if (err) throw err;
	  	console.log("success!! =)")
	  })
	});
})();
 