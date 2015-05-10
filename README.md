Created By Leonardo Esparis
i am an engineering's student

if you use this module, report bugs
it's a good practice for me...

Examples:

console.log(string.multiply("*", 5)) // ***** 
<br>
console.log(string.isUpper("leonardo")) // false  
<br>
console.log(string.isUpper("LEONARDO")) // true  
<br>
console.log(string.isLower("leonardo")) // true  
<br>
console.log(string.isLower("LEONARDO")) // false  
<br>
console.log(string.isAlpha("leonardo !@#")) // false 
<br>
console.log(string.isAlpha("leonardo Esparis")) // true 
<br>
console.log(string.isDigit("123")) // true  
<br>
console.log(string.isDigit("asd")) // false  
<br>
console.log(string.isDigit("!@#")) // false 
<br>
console.log(string.isAlphanumeric("asd12")) // true 
<br> 
console.log(string.isAlphanumeric("asd")) // true 
<br>
console.log(string.isAlphanumeric("12")) // true 
<br>
console.log(string.isAlphanumeric("!@#")) // false 
<br>
console.log(string.isSpace("!@#")) // false
<br>
console.log(string.isSpace("asd")) // false 
<br>
console.log(string.isSpace("123")) // false
<br>
console.log(string.isSpace("!@#qsd123")) // false 
<br>
console.log(string.isSpace(" ")) // true
<br>
console.log(string.isEmpty("  ")); // true
<br>
console.log(string.isEmpty("asd")); // false
<br> 
console.log(string.isEmpty("1231Asd")); // false 
<br>
console.log(string.isEmpty("!@asd")); // false
<br>
console.log(string.lslice("leonardo",0,3)); // this start from l ==> leo 
<br>
console.log(string.rslice(154654654,0,1)); // 4
<br>
console.log(string.rslice("leonardo",0,2)); // this start from o ==> do
<br>
console.log(string.getSize(154654)); // 6
<br>
console.log(string.count("leonardo", "eo", 0, 2)); // 1
<br>
console.log(string.count("leonardo", "o")); // 2
<br>
console.log(string.getUpper("leonardo")); // LEONARDO
<br>
console.log(string.getLower("ESPARIS")); // esparis
<br>
console.log(string.capitalize("Leonardo Esparis")); // Leonardo esparis 
<br>
console.log(string.getCharPosition("Leonardo Esparis", "i")); // [14]
<br>
console.log(string.getCharPosition("Leonardo Esparis", "o")); // [2,7]
<br>
console.log(string.reverse("leonardo")); // odranoel
<br>
console.log(string.title("leONArdo esPAris")); // Leonardo Esparis
<br>
console.log(string.lsplit("leonardo", "o")) // ["le", "nard"]
<br>
console.log(string.lsplit("leonardo", "o", 1)) // ["le", "nardo"]
<br>
console.log(string.rsplit("leonardo", "o")) // ["le", "nard"]
<br>
console.log(string.rsplit("leonardo", "o", 1)) // ["leonard"]
<br>
console.log(string.isSubString("leonardo", "nar")); // true 
<br>
console.log(string.isSubString("leonardo", "te")); // false 
<br>
console.log(string.startsWith("leonardo", "nar")); // false 
<br>
console.log(string.startsWith("leonardo", "leo")); // true 
<br>
console.log(string.endsWith("leonardo", "do")); // true 
<br>
console.log(string.endsWith("leonardo", "leo")); // false 
<br>
console.log(string.swapCase("leonardo ESPARIS MeZa")); // LEONARDO esparis mEzA 
<br>
console.log(string.trim("leonardo esparis meza")); // leonardoesparismeza
<br>
console.log(string.rConCat("leonardo esparis meza", "123123")); // leonardo esparis meza123123
<br>
console.log(string.lConCat("leonardo esparis meza", "123123")); // 123123leonardo esparis meza 
<br>
console.log(string.lreplace("leonardo esparis meza", "nardo", "!@#")); // leo!@# esparis meza 
<br>
console.log(string.lreplace("leonardo esparis meza", "e", "!@#", 1)); // l!@#onardo esparis meza 
<br>
console.log(string.lreplace("leonardo esparis meza", "e", "!@#", 2)); // l!@#onardo !@#sparis meza 
<br>
console.log(string.lreplace("leonardo esparis meza", "e", "!@#", 3)); // l!@#onardo !@#sparis m!@#za
<br>
console.log(string.rreplace("leonardo esparis meza", "nardo", "!@#")); // leo!@# esparis meza 
<br>
console.log(string.rreplace("leonardo esparis meza", "e", "!@#", 1)); // leonardo esparis m!@#za 
<br>
console.log(string.rreplace("leonardo esparis meza", "e", "!@#", 2)); // leonardo !@#sparis m!@#za 
<br>
console.log(string.rreplace("leonardo esparis meza", "e", "!@#", 3)); // l!@#onardo !@#sparis m!@#za
<br>
console.log(string.center("leonardo")); // leonardo 
<br>
console.log(string.center("leonardo", 100)); //                         leonardo 
<br>
console.log(string.ljust("leonardo")); // leonardo 
<br>
console.log(string.ljust("leonardo", 10)); //                    leonardo 
<br>
console.log(string.rjust("leonardo")); // leonardo 
<br>
console.log(string.rjust("leonardo", 5) + "hi"); // leonardo   hi
<br>
console.log(string.escape("leonardo\' has become bigger & ..")); // <!-- leonardo&#39 has become bigger &gt ...-->
<br>
console.log(string.escape("<>\'\"")); //  <!-- &lt;&amp;&#39;&quot; -->
<br>
console.log(string.slugify("leonardo esparis")); // l-e-o-n-a-r-d-o-e-s-p-a-r-i-s
<br>
console.log(string.dummyAddTag("leonardo esparis", "html")); // <!-- <html_tag> leonardo esparis </html_tag> -->
<br>
console.log(string.dummyRemoveTag(string.dummyAddTag("leonardo esparis", "html"), "html")); // leonardo esparis
