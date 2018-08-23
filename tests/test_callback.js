#!/usr/bin/env node

var lstring = require('../l-string')();

lstring.isUpper("leo", function(v) {
	console.log("isUpper: ", v);
});

lstring.isLower("leo", function(v) {
	console.log("isLower: ", v);
});

lstring.isAlpha("leo", function(v) {
	console.log("isAlpha: ", v);
});

lstring.isDigit("leo", function(v) {
	console.log("isDigit: ", v);
});

lstring.isAlphanumeric("leo", function(v) {
	console.log("isAlphanumeric: ", v)
});

lstring.isEmpty("leo", function(v) {
	console.log("isEmpty: ", v)
});

lstring.isSpace("leo", function(v) {
	console.log("isSpace: ", v)
});

lstring.isSubString("leo", "le", function(v) {
	console.log("isSubString: ", v)
});

lstring.multiply("leo", 2, function(v) {
	console.log("multiply: ", v)
});

lstring.rSlice("leo", 2, 4, function(v) {
	console.log("rSlice: ", v)
});

lstring.dummyCount("leo", "e", null, null, function(v) {
	console.log("dummyCount!: ", v)
});

lstring.ord("acb!@#$%^&*()_+", function(v) {
	console.log("ord: ", v)
});

lstring.ord("+", function(v) {
	console.log("ord: ", v)
});

lstring.chr("95", function(v) {
	console.log("chr: ", v)
});

lstring.capitalize("leo", function(v) {
	console.log("capitalize: ", v)
});

lstring.getCharPosition("leo", "e", function(v) {
	console.log("getCharPosition: ", v)
});

lstring.reverse("leo", function(v) {
	console.log("reverse: ", v)
});

lstring.title("leo", function(v) {
	console.log("title: ", v)
});

lstring.lSplit("leo", "e", 1, function(v) {
	console.log("lSplit: ", v)
});

lstring.rSplit("leo", "o", 1, function(v) {
	console.log("rSplit: ", v)
});

lstring.startsWith("leo", "o", function(v) {
	console.log("startsWith: ", v)
});

lstring.endsWith("leo", "o", function(v) {
	console.log("endsWith: ", v)
});

lstring.swapCase("leo", function(v) {
	console.log("swapCase: ", v)
});

lstring.trim("leo   ", function(v) {
	console.log("trim: ", v)
});

lstring.trimPrefix("leo   ", "eo", function(v) {
	console.log("trimPrefix: ", v)
});

lstring.rConCat("leo", "a", function(v) {
	console.log("rConCat: ", v)
});

lstring.lConCat("leo", "a", function(v) {
	console.log("lConCat: ", v)
});

lstring.lReplace("leo---", "eo", "1231", 1, function(v) {
	console.log("lReplace: ", v)
});

lstring.lReplace("leo---leo", "eo", "1231", 1, function(v) {
	console.log("lReplace: ", v)
});

lstring.lReplace("leo---leo---leo", "eo", "1231", 2, function(v) {
	console.log("lReplace: ", v)
});

lstring.lReplace("leo---leo---leo", "eo", "1231", 1, function(v) {
	console.log("lReplace: ", v)
});

lstring.rReplace("---leo", "eo", "1231", 1, function(v) {
	console.log("rReplace: ", v)
});

lstring.rReplace("leo---leo", "eo", "1231", 1, function(v) {
	console.log("rReplace: ", v)
});

lstring.rReplace("leo---leo---leo", "eo", "1231", 2, function(v) {
	console.log("rReplace: ", v)
});

lstring.rReplace("leo---leo---leo", "eo", "1231", 1, function(v) {
	console.log("rReplace: ", v)
});

lstring.join("-", "leo", function(v) {
	console.log("join: ", v)
});

lstring.toCharArray("leo   ", function(v) {
	console.log("toCharArray: ", v)
});

lstring.insert("leo   ", "vero", 2, function(v) {
	console.log("insert: ", v)
});

lstring.remove("leo   ", "eo", function(v) {
	console.log("remove: ", v, "-")
});

lstring.center("leo", 2, "-", function(v) {
	console.log("center: ", v)
});

lstring.lJust("leo   ", 2, "-", function(v) {
	console.log("lJust: ", v)
});

lstring.rJust("leo   ", 2, "-", function(v) {
	console.log("rJust: ", v)
});

lstring.smartCount("leoanrdo esparis, leonardo esparis", "leo", "l1", 20, function(v) {
	console.log("smartCount: ", v)
});

lstring.smartCount("leoanrdo esparis, leonardo esparis", "leo", "l1", "1o", function(v) {
	console.log("smartCount: ", v)
});
