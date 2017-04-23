**l-string**   :thumbsup: :trollface: [![Build Status](https://travis-ci.org/leoxnidas/l-string.svg)](https://travis-ci.org/leoxnidas/l-string) [![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BQKLKSBKH4DPE)
============
**This library was specially created to extend the javascript's string object.**

Install
-------
```npm install l-string or npm install --save l-string ``` or ```yarn add l-string```

Usage.
------
```javascript
require("l-string");

console.log("a".ord())
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

License.
--------
[License MIT](./LICENSE)

Changelogs
----------
[Changelogs](./CHANGELOGS.md)

Authors
-------------
[Leonardo Javier Esparis Meza](./AUTHORS.md)
