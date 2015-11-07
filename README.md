**l-string**   :thumbsup: :trollface: [![Build Status](https://travis-ci.org/leoxnidas/l-string.svg)](https://travis-ci.org/leoxnidas/l-string) [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQKLKSBKH4DPE)
============

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

Version 1.0.42.
---------------
	- fixed issues in smartCount function.
	- new private function added, called _find_letter_position

Version 1.0.41.
---------------
	- new function added smartCount.
	- new function isSubString changed.
	- new file added, utils.js.
	- old name _parse_tag, new name _parse_char (renamed), private function.
	- addstyle2tag improved the function.

Version 1.0.40.
---------------
	- donate botton added.

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