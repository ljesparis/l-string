**l-string**  [![Build Status](https://travis-ci.org/ljesparis/l-string.svg?branch=master)](https://travis-ci.org/ljesparis/l-string) [![npm](https://img.shields.io/npm/dy/localeval.svg)](https://github.com/ljesparis/l-string)
============
**This library was specially created to extend the javascript's string object.**

Install
-------
```npm install l-string or npm install --save l-string ``` or ```yarn add l-string```

Usage.
------

there's two ways to use l-string library.

### first way - extending native string object
```javascript
#!/usr/bin/env node

require('../l-string')(true);

console.log("isUpper: ", "leo".isUpper())
console.log("isLower: ", "leo".isLower())
console.log("isAlpha: ", "leo".isAlpha())
console.log("isDigit: ", "leo".isDigit())
console.log("isAlphanumeric: ", "leo".isAlphanumeric())
console.log("isEmpty: ", "leo".isEmpty())
console.log("isSpace: ", "leo".isSpace())
console.log("isSubString: ", "leo".isSubString("le"))
console.log("multiply: ", "leo".multiply(2))
console.log("rSlice: ", "leo".rSlice(2, 4))
console.log("dummyCount: ", "leo".dummyCount("e"))
console.log("ord: ", "acb!@#$%^&*()_+".ord())
console.log("ord: ", "+".ord())
console.log("chr: ", "95".chr())
console.log("capitalize: ", "leo".capitalize())
console.log("getCharPosition: ", "leo".getCharPosition("e"))
console.log("reverse: ", "leo".reverse())
console.log("title: ", "leo".title())
console.log("lSplit: ", "leo".lSplit("e", 1))
console.log("rSplit: ", "leo".rSplit("o", 1))
console.log("startsWith: ", "leo".startsWith("o"))
console.log("endsWith: ", "leo".endsWith("o"))
console.log("swapCase: ", "leo".swapCase())
console.log("trim: ", "leo   ".trim())
console.log("trimPrefix: ", "leo   ".trimPrefix("eo"))
console.log("rConCat: ", "leo".rConCat("a"))
console.log("lConCat: ", "leo   ".lConCat("a"))
console.log("lReplace: ", "leo   ".lReplace("eo", "1231"))
console.log("rReplace: ", "leo   ".rReplace("eo", "1231"))
console.log("join: ", "-".join("leo"))
console.log("toCharArray: ", "leo   ".toCharArray())
console.log("insert: ", "leo   ".insert("eo", 2))
console.log("remove: ", "leo   ".remove("eo"))
console.log("center: ", "leo   ".center(2, "-"))
console.log("lJust: ", "leo   ".lJust(2, "-"))
console.log("rJust: ", "leo   ".rJust(2, "-"))
console.log("smartCount: ", "leoanrdo esparis, leonardo esparis".smartCount("leo", "l1", 20))
console.log("smartCount: ", "leoanrdo esparis, leonardo esparis".smartCount("leo", "l1", "1o"))
```

### second way - use callback design pattern
```javascript
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

```

License.
--------
[License MIT](./LICENSE)

Changelogs
----------
[Changelogs](./CHANGELOGS.md)

Authors
-------------
[Leonardo Javier Esparis Meza](./AUTHORS.md)
