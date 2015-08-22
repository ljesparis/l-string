**l-string**   :thumbsup: :trollface: [![Build Status](https://travis-ci.org/leoxnidas/l-string.svg)](https://travis-ci.org/leoxnidas/l-string)
============


With this library you can extend, javascript's String object, 
both server side and client side.


Install
-------
```npm install l-string or npm install --save l-string ```

Usage, Server Side.
------------------

```javascript

require("l-string");


var a = "<p>leonardo</p>".addStyle2Tag("p1", [ ['color','red'], 
											   ['background', 'red'], 
											   ['margin', 
											    ["10dp", "0", "10dp", "0"]]])

var b = a.addStyle2Tag('p', ['right', '0']).addStyle2Tag('p1', ['left', '0'])
var c = b.addStyle2Tag('p1', ['text-align', 'center']).addStyle2Tag('p1', ['padding', [0,0,0,0]])
var d = c.addStyle2Tag('p1',[['padding',['10dp',0,'10dp', 0]], ['color','red']]
console.log(d)

var a = "leonardo".smartAddTag(['a', 'a', 'a', 'a', 'a']);
var data = a.addStyle2Tag("a", [['margin',['10dp',0,'10dp', 0]], ['color','red']])
var data2 = data.addStyle2Tag("a", [['right',0], ['background','red']])
console.log(data2.addStyle2Tag("a", [['padding',['10dp',0,'10dp', 0]], ['color','red']]))

var a = "leonardo".smartAddTag(['div ', 'div', 'div', 'div', 'div']).addIdName2Tag("div", "something")
var b = a.addClassName2Tag("div1", "something2")
console.log(b.addStyle2Tag("div", [ ['margin', ['10dp',0,'10dp', 0] ], ['color','red'] ]))

var a = "<p>leo</p>".addClassName2Tag("p1", "asd")
var b = a.addClassName2Tag("p1", "asdad")
var c = b.addClassName2Tag("p1", "qwe")
console.log(c.addClassName2Tag("p", "something2"))

var a = "<p>leonardo</p>".addAttr2Tag("p", "data-city", "city")
var b = a.addAttr2Tag("p", "data-city2", "")
var c = b.addClassName2Tag("p", "javier")
var d = c.addIdName2Tag("p1", "esparis")
var e = d.addIdName2Tag("p1", "meza")
var d = e.addAttr2Tag("p", "data-city2")
console.log(d.addAttr2Tag("p", "data-city3"))
```


Usage, client Side.
------------------
```html
<script src="../../l-string.web.js"></script> // add this tag to the html file.
```

Then, in your js file, write code...

```javascript
(function(){
	require("l-string.web");

	alert("leo".multiply(10));

})();
```
:trollface: :trollface: :trollface:


LICENSE.
--------

(The MIT License)

Copyright (C) 2015  Leonardo Esparis <leo.leo.leoxnidas.c.14@gmail.com>.

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


Version 1.0.30.
---------------
	- new l-string module ==> l-string.web.js, run onthe browser.
	- dummyAddTag and smartAddTag deleted.
	- now, there's only one way to use l-string.
	- new dependencies cheerio
	- new function trimPrefix
	- old name add2TagClassName, new name addClassName2Tag (renamed)
	- old name add2TagIdName, new name addIdName2Tag (renamed)
	- old name add2TagStyle, new name addStyle2Tag (renamed)
	- old name add2TagAttr, new name addAttr2Tag (renamed)
	- new private function added.
	- escape update it.
	- new documentation style add it to all functions.

Version 1.0.29.
---------------
	- add2Tag update it.
	- new documentation style add it to all functions.
	- new examples added. 

Version 1.0.28.
---------------
	- new function added it, addAttr2Tag.
	- new variable declaration style, added it. 
	- new examples added. 

Version 1.0.27.
---------------
	- issues in method insert fixed.
	- new README.md style added.


##Contributors
-------------

```
	Leonardo Javier Esparis Meza ==> leo.leo.leoxnidas.c.14@gmail.com
```