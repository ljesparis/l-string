Created By Leonardo Esparis
i am an engineering's student

if you use this module, report bugs
it's a good practice for me...

Examples:

console.log(string.multiply("*", 5)) // *****

console.log(string.isUpper("leonardo")) // false
console.log(string.isUpper("LEONARDO")) // true

console.log(string.isLower("leonardo")) // true
console.log(string.isLower("LEONARDO")) // false

console.log(string.isAlpha("leonardo !@#")) // false
console.log(string.isAlpha("leonardo Esparis")) // true

console.log(string.isDigit("123")) // true
console.log(string.isDigit("asd")) // false
console.log(string.isDigit("!@#")) // false

console.log(string.isAlphanumeric("asd12")) // true
console.log(string.isAlphanumeric("asd")) // true
console.log(string.isAlphanumeric("12")) // true
console.log(string.isAlphanumeric("!@#")) // false
 
console.log(string.isSpace("!@#")) // false
console.log(string.isSpace("asd")) // false 
console.log(string.isSpace("123")) // false
console.log(string.isSpace("!@#qsd123")) // false 
console.log(string.isSpace(" ")) // true

console.log(string.isEmpty("  ")); // true
console.log(string.isEmpty("asd")); // false 
console.log(string.isEmpty("1231Asd")); // false 
console.log(string.isEmpty("!@asd")); // false

console.log(string.slice("leonardo",0,3)); // this start from l ==> leo 

console.log(string.rslice(154654654,0,1)); // 4
console.log(string.rslice("leonardo",0,2)); // this start from o ==> do

console.log(string.getSize(154654)); // 6

console.log(string.count("leonardo", "eo", 0, 2)); // 1
console.log(string.count("leonardo", "o")); // 2

console.log(string.getUpper("leonardo")); // LEONARDO

console.log(string.getLower("ESPARIS")); // esparis

console.log(string.capitalize("Leonardo Esparis")); // Leonardo esparis 

console.log(string.getCharPosition("Leonardo Esparis", "i")); // [14]
console.log(string.getCharPosition("Leonardo Esparis", "o")); // [2,7]

console.log(string.reverse("leonardo")); // odranoel

console.log(string.title("leONArdo esPAris")); // Leonardo Esparis

console.log(string.split("leonardo", "o")) // ["le", "nard"]
console.log(string.split("leonardo", "o", 1)) // ["le", "nardo"]

console.log(string.rsplit("leonardo", "o")) // ["le", "nard"]
console.log(string.rsplit("leonardo", "o", 1)) // ["leonard"]

console.log(string.isSubString("leonardo", "nar")); // true 
console.log(string.isSubString("leonardo", "te")); // false 

console.log(string.startsWith("leonardo", "nar")); // false 
console.log(string.startsWith("leonardo", "leo")); // true 

console.log(string.endsWith("leonardo", "do")); // true 
console.log(string.endsWith("leonardo", "leo")); // false 

console.log(string.swapCase("leonardo ESPARIS MeZa")); // LEONARDO esparis mEzA 

console.log(string.trim("leonardo esparis meza")); // leonardoesparismeza

console.log(string.rConCat("leonardo esparis meza", "123123")); // leonardo esparis meza123123

console.log(string.lConCat("leonardo esparis meza", "123123")); // 123123leonardo esparis meza 
 
console.log(string.replace("leonardo esparis meza", "nardo", "!@#")); // leo!@# esparis meza 
console.log(string.replace("leonardo esparis meza", "e", "!@#", 1)); // l!@#onardo esparis meza 
console.log(string.replace("leonardo esparis meza", "e", "!@#", 2)); // l!@#onardo !@#sparis meza 
console.log(string.replace("leonardo esparis meza", "e", "!@#", 3)); // l!@#onardo !@#sparis m!@#za

console.log(string.center("leonardo")); // leonardo 
console.log(string.center("leonardo", 100)); //                         leonardo 

console.log(string.ljust("leonardo")); // leonardo 
console.log(string.ljust("leonardo", 10)); //                    leonardo 

console.log(string.rjust("leonardo")); // leonardo 
console.log(string.rjust("leonardo", 5) + "hi"); // leonardo   hi

console.log(string.escape("leonardo\' has become bigger & ..")); // leonardo&#39 has become bigger &gt ...
console.log(string.escape("<>\'\"")); //  &lt;&amp;&#39;&quot;

console.log(string.slugify("leonardo esparis")); // l-e-o-n-a-r-d-o-e-s-p-a-r-i-s

console.log(string.dummyAddTag("leonardo esparis", "html")); // <html>leonardo esparis</html>

console.log(string.dummyRemoveTag(string.dummyAddTag("leonardo esparis", "html"), "html"));
console.log(string.dummyRemoveTag("<p>leonardo esparis was here</p>")); // leonardo esparis was here








