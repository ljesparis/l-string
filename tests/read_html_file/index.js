(function() {
	var string = require("../../l-string"),
		fs = require('fs'),
		path = __dirname + '/index.html',
		encoding = "utf8",
		html = "";
	fs.readFile(path, encoding, function(err, data) {
		if (err) throw err;
		html = data;
		for (var i = 1; i <= 5; i++) {
			html = html.addStyle2Tag("div" + i, [
				['margin', ['10dp', 0, '10dp', 0]],
				['color', 'red']
			])
			html = html.addClassName2Tag("div" + i, 'algo' + i)
			html = html.addIdName2Tag("div" + i, 'algo' + i)
			html = html.addClassName2Tag("div" + i, 'algor' + i)
			html = html.addIdName2Tag("div" + i, 'algor' + i)
			html = html.addStyle2Tag("div" + i, [
				['padding', ['10dp', 0, '10dp', 0]],
				['background', 'red']
			])
		}
		html = html.addAttr2Tag("section1", "data-something", "veronica");
		html = html.addAttr2Tag("section2", "data-leonardo-esparis", "veronica");
		fs.writeFile(path, html, function(err) {
			if (err) throw err;
			console.log("success!! =)")
		})
	});
})();