**Created By Leonardo Esparis**
=================================
**I am an engineering's student**
-----------------------------------

if you use this module, report bugs
-----------------------------------
it's a good practice for me...
--------------------------------

if you want to more examples, go to tests folder.
-------------------------------------------------

Install
-------
```npm install l-string or npm install --save l-string ```

Examples:
---------

```
var string = require("../l-string"),
	multiply = string.multiply,
	isUpper = string.isUpper,
	isLower = string.isLower,
	isAlpha = string.isAlpha,
	isDigit = string.isDigit,
	isAlphanumeric = string.isAlphanumeric,
	isEmpty = string.isEmpty,
	isSpace = string.isSpace,
	rSlice = string.rSlice,
	dummyCount = string.dummyCount,
	capitalize = string.capitalize,
	getCharPosition = string.getCharPosition,
	reverse = string.reverse,
	title = string.title,
	lSplit = string.lSplit,
	rSplit = string.rSplit,
	isSubString = string.isSubString,
	startsWith = string.startsWith,
	endsWith = string.endsWith,
	swapCase = string.swapCase,
	trim = string.trim,
	rConCat = string.rConCat,
	lConCat = string.lConCat,
	lReplace = string.lReplace,
	rReplace = string.rReplace,
	join = string.join,
	center = string.center,
	lJust = string.lJust,
	rJust = string.rJust,
	escape = string.escape,
	slugify = string.slugify,
	dummyAddTag = string.dummyAddTag,
	removeTag = string.removeTag,
	remove = string.remove,
	insert = string.insert,
	toCharArray = string.toCharArray,
	smartAddTag = string.smartAddTag,
	add2TagClassName = string.add2TagClassName,
	add2TagIdName = string.add2TagIdName,
	add2TagStyle = string.add2TagStyle,
	add2TagAttr = string.add2TagAttr,
  	isNullOrUndefined = string.isNullOrUndefined,
  	isNumber = string.isNumber,
  	isArray = string.isArray,
 	isString = string.isString;
```
first way to use this module
----------------------------
```
console.log(string.dummyRemoveTag("<h1>leonardo</h1>"));        // leonardo 
console.log(string.delete("leonardo", "o"))    // lenard 
console.log(string.insert("leonardo", "o", 5)) // leonaordo
console.log(string.toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))
// [ 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', ' ', 'j', 'a', 'v','i', 'e', 'r', ' ', 'e', 's', 'p', 'a', 'r', 'i', 's', ' ', 'm', 'e', 'z', 'a', ' ', '{', '\'', 'n', 'a', 'm', 'e', '\'', ':', '\'', 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', '\'', '}' ]
console.log(string.smartAddTag("leonardo", ["div", "div", "p"])) // <div><div><p>leonardo</p></div></div>
console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div")) // <!DOCTYPE html><html><div class='a'><div><div><div><img>leonardo</div></div></div></div></html>
console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div")) // <!DOCTYPE html><html><div id='a'><div><div><div><img>leonardo</div></div></div></div></html>
console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "4div", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div><div style='margin: 10dp 0 10dp 0; colof:red; '><img>leonardo</div></div></div></div></html>
console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div4", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div><div style='margin: 10dp 0 10dp 0; colof:red; '><img>leonardo</div></div></div></div></html>
```

second way to use this module.
------------------------------

```
console.log(escape("<>\'\""));                            // &lt;&amp;&quot;&#39;
console.log(slugify("leonardo esparis")); // l-e-o-n-a-r-d-o-e-s-p-a-r-i-s
console.log(dummyAddTag("leonardo esparis", "html")); // <html>leonardo esparis</html>
console.log(delete("leonardo", "onar")) // ledo
console.log(insert("leonardo", "o", 0)) // oleonardo
console.log(insert("leonardo", "o", 1)) // loeonardo 
console.log(toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))
// [ 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', ' ', 'j', 'a', 'v','i', 'e', 'r', ' ', 'e', 's', 'p', 'a', 'r', 'i', 's', ' ', 'm', 'e', 'z', 'a', ' ', '{', '\'', 'n', 'a', 'm', 'e', '\'', ':', '\'', 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', '\'', '}' ]
console.log(smartAddTag("leonardo", ["body", "header", "p"])) // <body><header><p>leonardo</p></header></body>
console.log(add2TagClassName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1")) // <!DOCTYPE html><html><div class='a'><div><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagClassName("<img>leo", "image", "img")) // <img class='image'>leo
console.log(add2TagClassName("<img>leo", "image", "img1")) // <img class='image'>leo
console.log(add2TagIdName("<img>leo", "image", "img")) // <img id='image'>leo
console.log(add2TagIdName("<img>leo", "image", "img1")) // <img id='image'>leo 
console.log(add2TagIdName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1")) // <!DOCTYPE html><html><div id='a'><div><div><div><img>leonardo</div></div></div></div></html>
```

thirth way to use this module.
------------------------------

```
var a = "<p>leonardo</p>".add2TagStyle("p1", [ ['color','red'], 
											   ['background', 'red'], 
											   ['margin', 
											    ["10dp", "0", "10dp", "0"]]])

var b = a.add2TagStyle('p', ['right', '0']).add2TagStyle('p1', ['left', '0'])
var c = b.add2TagStyle('p1', ['text-align', 'center']).add2TagStyle('p1', ['padding', [0,0,0,0]])
var d = c.add2TagStyle('p1',[['padding',['10dp',0,'10dp', 0]], ['color','red']]
console.log(d)

var a = "leonardo".smartAddTag(['a', 'a', 'a', 'a', 'a']);
var data = a.add2TagStyle("a", [['margin',['10dp',0,'10dp', 0]], ['color','red']])
var data2 = data.add2TagStyle("a", [['right',0], ['background','red']])
console.log(data2.add2TagStyle("a", [['padding',['10dp',0,'10dp', 0]], ['color','red']]))

var a = "leonardo".smartAddTag(['div ', 'div', 'div', 'div', 'div']).add2TagIdName("div", "something")
var b = a.add2TagClassName("div1", "something2")
console.log(b.add2TagStyle("div", [ ['margin', ['10dp',0,'10dp', 0] ], ['color','red'] ]))

var a = "<p>leo</p>".add2TagClassName("p1", "asd")
var b = a.add2TagClassName("p1", "asdad")
var c = b.add2TagClassName("p1", "qwe")
console.log(c.add2TagClassName("p", "something2"))

var a = "<p>leonardo</p>".add2TagAttr("p", "data-city", "city")
var b = a.add2TagAttr("p", "data-city2", "")
var c = b.add2TagClassName("p", "javier")
var d = c.add2TagIdName("p1", "esparis")
var e = d.add2TagIdName("p1", "meza")
var d = e.add2TagAttr("p", "data-city2")
console.log(d.add2TagAttr("p", "data-city3"))
```

LICENSE.
--------
```
(The MIT License)

Copyright (C) 2015 Leonardo Esparis.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

Version 1.0.29.
---------------
	- add2Tag update it.
	- new documentation style add it to all functions.
	- new examples added. 

Version 1.0.28.
---------------
	- new function added it, add2TagAttr.
	- new variable declaration style, added it. 
	- new examples added. 

Version 1.0.27.
---------------
	- issues in method insert fixed.
	- new README.md style added.