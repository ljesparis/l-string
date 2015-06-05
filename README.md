#*Created By Leonardo Esparis*
#I am an engineering's student

##if you use this module, report bugs
##it's a good practice for me...

```if you want to more examples, go to tests folder.```


##Install
```npm install l-string or npm install --save l-string ```

###Examples:

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
	add2TagStyle = string.add2TagStyle;
```
#first way to use this module

```
console.log(string.multiply(1, 5) + "leonardo") //  11111leonardo
console.log(string.multiply() + "leonardo") // leonardo 

console.log(string.isUpper()) // false  
console.log(string.isUpper("LEONARDO")) // true 
 
console.log(string.isLower("LEONARDO")) // false 
 
console.log(string.isAlpha("leonardo Esparis")) // true 
 
console.log(string.isDigit("!@#")) // false 
console.log(string.isDigit()) // false 
 
console.log(string.isAlphanumeric("12")) // true 
console.log(string.isAlphanumeric("!@#")) // false 

console.log(string.isSpace("!@#qsd123")) // false 
console.log(string.isSpace(" ")) // true  
 
console.log(string.isEmpty("1231Asd")); // false 
console.log(string.isEmpty("!@asd")); // false 

 

console.log(string.rSlice(987654321,3));   // 987654
console.log(string.rSlice(987654321,"4")); // 98765
console.log(string.rSlice(987654321,0,1)); // 1 
console.log(string.rSlice("leonardo",0,2));// do 


console.log("8 ==> " + string.dummyCount("leonardo", "o"));                     // 8 ==> 2 
console.log("9 ==> " + string.dummyCount("leonardo", "o", 3));                  // 9 ==> 1 
console.log("10 ==> " + string.dummyCount("leonardo", "o", 2, "a"));            // 10 ==> 0 
console.log("11 ==> " + string.dummyCount("leonardo", "o", "A", 1));            // 11 ==> 0 
console.log("12 ==> " + string.dummyCount("leonardo", "o", "A", "a"));          // 12 ==> 0 
console.log("13 ==> " + string.dummyCount("leonardo"));                         // 13 ==> 0 
console.log("14 ==> " + string.dummyCount());                                   // 14 ==> 0 
 
  
 
console.log(string.capitalize("Leonardo Esparis")); // Leonardo esparis 
console.log(string.capitalize());                   // 

console.log(string.getCharPosition("Leonardo Esparis", "o")); // [2, 7]
console.log(string.getCharPosition());                        // []
 
console.log(string.reverse("leonardo"));  // odranoel 
console.log(string.reverse());            // 

console.log(string.title("leONArdo esPAris")); // Leonardo Esparis 
console.log(string.title());                   //

console.log(string.lSplit("leonardo", "o"))     // ['le' , 'nard']
console.log(string.lSplit("leonardo", "o", 1))  // ['le' , 'nardo']
console.log(string.lSplit("leonardo", 1))       // ['leonardo']
console.log(string.lSplit("leonardo", 112))     // ['leonardo']

console.log(string.rSplit("leonardo", 1))                // ['leonardo']
console.log(string.rSplit("leonardo", "o", 1))           // ['leonard']
console.log(string.rSplit("leonardo leonardo", "eo"))    // [ 'l', 'nardo l', 'nardo' ]
console.log(string.rSplit("leonardo leonardo", "eo", 1)) // [ 'leonardo l', 'nardo' ]
 
console.log(string.isSubString("leonardo"));        // false 
console.log(string.isSubString());                  // false 
 
console.log(string.startsWith("leonardo", "nar")); // false 
console.log(string.startsWith("leonardo", "leo")); // true 
 
console.log(string.endsWith("leonardo"));         // false  
console.log(string.endsWith());                   // false 

console.log(string.swapCase("leonardo ESPARIS MeZa")); // LEONARDO esparis mEzA 
console.log(string.swapCase());                        //

console.log(string.trim("leonardo"));               // leonardo 
console.log(string.trim());                         //
 
console.log(string.rConCat("leonardo esparis meza", "123123")); // leonardo esparis meza123123
 
console.log(string.lConCat("leonardo esparis meza", "123123")); // 123123leonardo esparis meza 
 
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 1));   // l!@#onardo esparis meza 
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 2));   // l!@#onardo !@#sparis meza
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 3));   // l!@#onardo !@#sparis m!@#za 

console.log(string.rReplace("leonardo", "o", "123", 1));                // leonard123 
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 1));   // leonardo esparis m!@#za
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 2));   // leonardo !@#sparis m!@#za
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 3));   // l!@#onardo !@#sparis m!@#za

console.log(string.join("ASD", [1,2,3])) // 1ASD2ASD3
 
console.log("hi" + string.center("leonardo", 10) + "hi");// hi              leonardo                hi 
console.log("hi" + string.center() + "hi");              //hihi      

console.log("hi" + string.lJust());                 // hi 
console.log(string.rJust() + "hi");                 //hi

console.log(string.escape());                                    // 

console.log(string.slugify());                   // 

console.log(string.dummyAddTag("leonardo esparis", "html")); // <html>leonardo esparis</html>
 
console.log(string.dummyRemoveTag("<h1>leonardo</h1>"));        // leonardo 
console.log(string.dummyRemoveTag("<1>leonardo</1>"));          // leonardo


console.log(string.delete("leonardo", "o"))    // lenard 


console.log(string.insert("leonardo", "o", 5)) // leonaordo
console.log(string.insert("leonardo", "o", 6)) // leonarodo
console.log(string.insert("leonardo", "o", 7)) // leonardoo
console.log(string.insert("leonardo", "o"))    // leonardoo
console.log(string.insert("leonardo", "o", 8)) // leonardoo


console.log(string.toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))
// [ 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', ' ', 'j', 'a', 'v','i', 'e', 'r', ' ', 'e', 's', 'p', 'a', 'r', 'i', 's', ' ', 'm', 'e', 'z', 'a', ' ', '{', '\'', 'n', 'a', 'm', 'e', '\'', ':', '\'', 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', '\'', '}' ]



console.log(string.smartAddTag("leonardo", ["div", "div", "p"])) // <div><div><p></p></div></div>

console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div")) // <!DOCTYPE html><html><div class='a'><div><div><div><img>leonardo</div></div></div></div></html>

console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "4div")) // <!DOCTYPE html><html><div><div><div><div class='a'><img>leonardo</div></div></div></div></html>

console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div5")) // <!DOCTYPE html><html><div><div><div><div><img>leonardo</div></div></div></div></html>


console.log(string.add2TagClassName("<p>leo</p>", "image", "p2")) // <p>leo</p>
console.log(string.add2TagClassName("<p>leo</p>", "image", "p3")) // <p>leo</p>
console.log(string.add2TagClassName("<p>leo</p>", "image", "p4")) / <p>leo</p>


console.log(string.add2TagIdName("<p>leo</p>", "image", "p2")) // <p>leo</p>
console.log(string.add2TagIdName("<p>leo</p>", "image", "p3")) // <p>leo</p>
console.log(string.add2TagIdName("<p>leo</p>", "image", "p4")) // <p>leo</p>

console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div")) // <!DOCTYPE html><html><div id='a'><div><div><div><img>leonardo</div></div></div></div></html>


console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "4div")) // <!DOCTYPE html><html><div><div><div><div id='a'><img>leonardo</div></div></div></div></html>

console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div5")) // <!DOCTYPE html><html><div><div><div><div><img>leonardo</div></div></div></div></html>

console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div", [['margin',['10dp',0,'10dp', 0]], ['color','red']])) // <!DOCTYPE html><html><div style='margin: 10dp 0 10dp 0; color:red; '><div><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div1", [['margin',['10dp',0,'10dp', 0]], ['color','red']])) // <!DOCTYPE html><html><div style='margin: 10dp 0 10dp 0; colof:red; '><div><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div2", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div style='margin: 10dp 0 10dp 0; colof:red;'><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div3", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div style='margin: 10dp 0 10dp 0; colof:red; '><div><img>leonardo</div></div></div></div></html>
console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "4div", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div><div style='margin: 10dp 0 10dp 0; colof:red; '><img>leonardo</div></div></div></div></html>
console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div4", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div><div style='margin: 10dp 0 10dp 0; colof:red; '><img>leonardo</div></div></div></div></html>

console.log(string.add2TagStyle(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "div5", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))// <!DOCTYPE html><html><div><div><div><div><img>leonardo</div></div></div></div></html>
```

#second way to use this module.

```
console.log(multiply(1, -1) + "leonardo") // 1leonardo
console.log(isUpper("leonardo")) // false
console.log(isLower("leonardo")) // true
console.log(isAlpha("leonardo !@#")) // false
console.log(isDigit("123")) // true 
console.log(isDigit("asd")) // false
console.log(isAlphanumeric("asd12")) // true 
console.log(isAlphanumeric("asd")) // true
console.log(isSpace("!@#")) // false 
console.log(isSpace("asd")) // false 
console.log(isSpace("123")) // false 
console.log(isEmpty("  ")); // true  
console.log(isEmpty("asd")); // false
console.log(rSlice());  //
console.log(rSlice(987654321));     // 987654321
console.log(rSlice(987654321,1));   // 98765432
console.log(rSlice(987654321,2));   // 9876543
console.log("1 ==> " + dummyCount("leonardo leonardo", "do"));           // 1 ==> 2
console.log("2 ==> " + dummyCount("leonardo leonardo", "do", 4));        // 2 ==> 2
console.log("3 ==> " + dummyCount("leonardo leonardo", "do", "as"));     // 3 ==> 0
console.log("4 ==> " + dummyCount("leonardo leonardo", "do", "as", 8));  // 4 ==> 0 
console.log("5 ==> " + dummyCount("leonardo leonardo", "do", 0 , 8));    // 5 ==> 1 
console.log("6 ==> " + dummyCount("leonardo", "eo", 0, 2));              // 6 ==> 1 
console.log("7 ==> " + dummyCount("leonardo", "eo"));                    // 7 ==> 1 
console.log(capitalize("Leonardo Esparis")); // Leonardo esparis
console.log(getCharPosition("Leonardo Esparis", "i")); // [14]
console.log(getCharPosition("Leonardo Esparis"));      // []
console.log(reverse("leonardo"));  // odranoel
console.log(title("leONArdo esPAris")); // Leonardo Esparis
console.log(lSplit("leonardo", "o"))     // ['le' , 'nard']
console.log(lSplit("leonardo", "o", 1))  // ['le' , 'nardo']
console.log(rSplit("leonardo", 1))                // ['leonardo']
console.log(rSplit("leonardo", "o", 1))           // ['leonard']
console.log(isSubString("leonardo", "nar")); // true 
console.log(isSubString("leonardo", "te"));  // false
console.log(startsWith());                  // false 
console.log(startsWith("leonardo"));        // false 
console.log(endsWith("leonardo", "do"));   // true 
console.log(endsWith("leonardo", "leo"));  // false
console.log(swapCase("leonardo ESPARIS MeZa")); // LEONARDO esparis mEzA 
console.log(trim("leonardo esparis meza"));  // leonardoesparismeza
console.log(rConCat()); // 
console.log(rConCat("leonardo esparis meza"));           // leonardo esparis meza
console.log(lConCat());                                  // 
console.log(lConCat("leonardo esparis meza"));           // leonardo esparis meza
console.log(lReplace());                                         //
console.log(lReplace("leonardo"));                               // leonardo 
console.log(lReplace("leonardo", "o"));                          // lenard 
console.log(lReplace("leonardo esparis meza", "nardo", "!@#"));  // leo!@# esparis meza
console.log(rReplace());                                         //
console.log(rReplace("leonardo"));                               // leonardo  
console.log(rReplace("leonardo", "o"));                          // lenard
console.log(rReplace("leonardo", "o", "123"));                   // lenard 
console.log(join("-", [1,2,3]))   // 1-2-3 
console.log(join("##", [1,2,3]))  // 1##2##3
console.log("hi" + center("leonardo") + "hi");    // hileonardohi
console.log("hi" + lJust("leonardo"));       // hileonardo     
console.log("hi" + lJust("leonardo", 10));   // hi          leonardo 
console.log(rJust("leonardo") + "hi");       // leonardohi 
console.log(rJust("leonardo", 5) + "hi");    // leonardo          hi 
console.log(escape("leonardo\' has become bigger & ..")); // leonardo&#39; has become bigger &gt; ...
console.log(escape("<>\'\""));                            // &lt;&amp;&quot;&#39;
console.log(slugify("leonardo esparis")); // l-e-o-n-a-r-d-o-e-s-p-a-r-i-s
console.log(slugify(""));                 // 
console.log(dummyRemoveTag(dummyAddTag("leonardo esparis", "html"), "html")); // leonardo esparis
console.log(dummyRemoveTag("<p>leonardo</p>"));          // leonardo 
console.log(dummyAddTag("leonardo esparis", "html")); // <html>leonardo esparis</html>
console.log(delete("leonardo", "onar")) // ledo
console.log(insert("leonardo", "o", 0)) // oleonardo
console.log(insert("leonardo", "o", 1)) // loeonardo 
console.log(insert("leonardo", "o", 2)) // leoonardo
console.log(insert("leonardo", "o", 3)) // leoonardo
console.log(insert("leonardo", "o", 4)) // leonoardo
console.log(toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))
// [ 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', ' ', 'j', 'a', 'v','i', 'e', 'r', ' ', 'e', 's', 'p', 'a', 'r', 'i', 's', ' ', 'm', 'e', 'z', 'a', ' ', '{', '\'', 'n', 'a', 'm', 'e', '\'', ':', '\'', 'l', 'e', 'o', 'n', 'a', 'r', 'd', 'o', '\'', '}' ]
console.log(smartAddTag("leonardo", ["body", "header", "p"])) // <body><header><p>leonardo</p></header></body>
console.log(add2TagClassName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1")) // <!DOCTYPE html><html><div class='a'><div><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagClassName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div2")) // <!DOCTYPE html><html><div><div class='a'><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagClassName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div3")) // <!DOCTYPE html><html><div><div><div class='a'><div><img>leonardo</div></div></div></div></html>

console.log(add2TagClassName("<img>leo", "image", "img")) // <img class='image'>leo
console.log(add2TagClassName("<img>leo", "image", "img1")) // <img class='image'>leo
console.log(add2TagClassName("<img>leo", "image", "img2")) // <img>leo
console.log(add2TagClassName("<p>leo</p>", "image", "p")) // <p class='image'>leo</p>
console.log(add2TagClassName("<p>leo</p>", "image", "p1")) // <p class='image'>leo</p>
console.log(add2TagIdName("<img>leo", "image", "img")) // <img id='image'>leo
console.log(add2TagIdName("<img>leo", "image", "img1")) // <img id='image'>leo 
console.log(add2TagIdName("<img>leo", "image", "img2")) <img>leo
console.log(add2TagIdName("<p>leo</p>", "image", "p")) // <p id='image'>leo</p>
console.log(add2TagIdName("<p>leo</p>", "image", "p1")) // <p id='image'>leo</p>

console.log(add2TagIdName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1")) // <!DOCTYPE html><html><div id='a'><div><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagIdName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div2")) // <!DOCTYPE html><html><div><div id='a'><div><div><img>leonardo</div></div></div></div></html>
console.log(add2TagIdName(
	smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div3"))// <!DOCTYPE html><html><div><div><div id='a'><div><img>leonardo</div></div></div></div></html>
```

#thirth way to use this module.

```
console.log("leonardo".multiply(2))
console.log("leonardo".isUpper())
console.log("leonardo".isLower())
console.log("leonardo".isAlpha())
console.log("leonardo".isDigit())
console.log("leonardo".isAlphanumeric())
console.log("leonardo".isSpace())
console.log("leonardo".isEmpty());
console.log("leonardo".rSlice(0,3));
console.log("leonardo".dummyCount("onar", 0, 5));
console.log("Leonardo Esparis".capitalize());
console.log("Leonardo Esparis".getCharPosition("e"));
console.log("leonardo".reverse());
console.log("leonardo javier esparis meza".reverse());
console.log("leONArdo esPAris".title());
console.log("leonardo esparis".lSplit("e",1))
console.log("leonardo leonardo".rSplit("eo", 1))
console.log("leonardo".isSubString("nar"));
console.log("leonardo".startsWith("leo"));
console.log("leonardo".endsWith("do"));
console.log("leonardo ESPARIS MeZa".swapCase());
console.log("           Real                     Madrid               ".trim());
console.log("leonardo esparis meza".rConCat("123123"));
console.log("leonardo esparis meza".lConCat("123123"));
console.log("leonardo esparis meza".lReplace("e", "!@#",1));
console.log("leonardo esparis meza".rReplace("e", "!@#", 2));
console.log("-".join([1,2,3])) 
console.log("hi" + "leonardo".center(10) + "hi");
console.log("hi" + "leonardo".lJust(10));
console.log("leonardo".rJust(5) + "hi");
console.log("leonardo\' has become bigger & ..<>\'\"".escape());
console.log("leonardo esparis".slugify());
console.log("leonardo esparis".dummyAddTag("html"));
console.log("<1>leonardo esparis was here</1>".removeTag());
console.log("leonardo".remove("o"))
console.log("leonardo".insert("o", 0))
console.log("leonardo javier esparis meza {'name':'leonardo'}".toCharArray())
console.log("leonardo".smartAddTag(["body", "header", "p"]))

var x = "leonardo".smartAddTag(["DOCTYPE","html", "div", "div", "div", "div", "img"]);
console.log(x.add2TagClassName("a", "div"))
console.log(x.add2TagIdName("a", "div2"))


console.log("<p>leonardo</p>".add2TagStyle("p", [['margin',['10dp',0,'10dp', 0]], ['color','red']]))
console.log("leonardo".smartAddTag(['div','div']).add2TagStyle('div1', ['color', 'red']))
```