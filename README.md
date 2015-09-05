**l-string**   :thumbsup: :trollface: [![Build Status](https://travis-ci.org/leoxnidas/l-string.svg)](https://travis-ci.org/leoxnidas/l-string)
============

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
">
<input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
</form>



**This library was specially created to extend the javascript's string object. Both, server side and client side.**


Install
-------
```npm install l-string or npm install --save l-string ```

Usage, Server Side.
------------------

```javascript

require("l-string");


console.log("<h1>\"\'<>&leonardo</h1>".escape())
console.log("<h1>leo</h1>".removeTag())
var a = '<html><head></head><body><h1 class="pepe"></h1><h1 class="juan"></h1><h1 class="andrea"></h1></body></html>'
var b = a.addAttr2Tag("h13", "data-city", "algo")
var c = b.addStyle2Tag("h12", [['margin', '0 0 0 0'], ['color', 'red']])
var d = c.addClassName2Tag("h11", "leonardo")
console.log(d.addIdName2Tag("h12", "pepe").addAttr2Tag("h13", "data-city2", "algo2").addIdName2Tag("h12", "pep22e"))

var a = "<p>leonardo</p>".addAttr2Tag("p", "data-city", "city")
var b = a.addAttr2Tag("p", "data-city2", "")
var c = b.addClassName2Tag("p", "javier")
var d = c.addIdName2Tag("p1", "esparis")
var e = d.addIdName2Tag("p1", "meza")
var d = e.addAttr2Tag("p", "data-city2")
console.log(d.addAttr2Tag("p", "data-city3"))


console.log("leo   ".rReplace("eo", "1231"))
console.log("leo   ".join("-"))
console.log("leo   ".toCharArray())
console.log("leo   ".insert("eo", 2))
console.log("leo   ".remove("eo"))
console.log("leo   ".center(2, "-"))
console.log("leo   ".lJust(2, "-"))
console.log("leo   ".rJust(2, "-"))
console.log("leo".slugify())
```


Usage, client Side.
------------------

if you dont have browserify installed, and you are using linux, 
copy this at the command shell ==> ```./node_modules/l-string/bin/make-l-string.web```,
otherwise, copy this ==> ```sudo npm install -g browserify```
then, write this ```browserify -r l-string:l-string.web > l-string.web.js```

then... 

```html
<script src="./l-string.web.js"></script> // add this tag to the html file.
```

Then, in your js file, write code...

```javascript
(function(){
	require("l-string.web");

	alert("leo".multiply(10));

})();
```

:trollface: :trollface: :trollface:


functions that l-string.web does not support.
---------------------------------------------
- [X] escape
- [X] removeTag
- [X] addAttr2Tag
- [X] addStyle2Tag
- [X] addClassName2Tag
- [X] addIdName2Tag


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

Version 1.0.39.
---------------
	- New project description.
	

Version 1.0.38.
---------------
	- lReplace error fixed.


Version 1.0.37.
---------------
	- dummycount error fixed.


Version 1.0.36.
---------------
	- bin file added, make-l-string.web.
	- README.md style fixed.


Version 1.0.35.
---------------
	- more keywords added.
	- error at method addIdName2Tag and addAttr2Tag fixed.
	- README.md style fixed.

Version 1.0.34.
---------------
	- error at method addStyle2Tag fixed.
	- README.md style fixed

Version 1.0.33.
---------------
	- error at method add2TagClassName fixed.
	- README.md style fixed.

Version 1.0.32.
---------------
	- new html example added.
	- README.md style fixed.

Version 1.0.31.
---------------
	- README.md style fixed.
	- html support.

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


Contributors
-------------

```
	Leonardo Javier Esparis Meza ==> leo.leo.leoxnidas.c.14@gmail.com
```