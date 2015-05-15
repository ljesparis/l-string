#*Created By Leonardo Esparis*
#I am an engineering's student

##if you use this module, report bugs
##it's a good practice for me...

###Examples:

```
var string = require("../lib/string");

console.log(string.multiply(1, -1) + "leonardo") // 1leonardo
console.log(string.multiply(1, 5) + "leonardo") //  11111leonardo
console.log(string.multiply() + "leonardo") // leonardo 

console.log(string.isUpper()) // false 
console.log(string.isUpper("leonardo")) // false 
console.log(string.isUpper("LEONARDO")) // true 

console.log(string.isLower("leonardo")) // true 
console.log(string.isLower("LEONARDO")) // false 

console.log(string.isAlpha("leonardo !@#")) // false 
console.log(string.isAlpha("leonardo Esparis")) // true 

console.log(string.isDigit("123")) // true 
console.log(string.isDigit("asd")) // false 
console.log(string.isDigit("!@#")) // false 
console.log(string.isDigit()) // false 

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


console.log(string.lSlice("leonardo",0,3)); // leo 
console.log(string.lSlice("leonardo", 1));  // eonardo 
console.log(string.lSlice("leonardo"));  // leonardo 
console.log(string.lSlice());  //  

console.log(string.rSlice());  //
console.log(string.rSlice(987654321));     // 987654321
console.log(string.rSlice(987654321,1));   // 98765432
console.log(string.rSlice(987654321,2));   // 9876543
console.log(string.rSlice(987654321,3));   // 987654
console.log(string.rSlice(987654321,"4")); // 98765
console.log(string.rSlice(987654321,0,1)); // 1 
console.log(string.rSlice("leonardo",0,2));// do 

console.log(string.getSize(154654)); // 6 

console.log("1 ==> " + string.dummyCount("leonardo leonardo", "do"));           // 1 ==> 2
console.log("2 ==> " + string.dummyCount("leonardo leonardo", "do", 4));        // 2 ==> 2
console.log("3 ==> " + string.dummyCount("leonardo leonardo", "do", "as"));     // 3 ==> 0
console.log("4 ==> " + string.dummyCount("leonardo leonardo", "do", "as", 8));  // 4 ==> 0 
console.log("5 ==> " + string.dummyCount("leonardo leonardo", "do", 0 , 8));    // 5 ==> 1 
console.log("6 ==> " + string.dummyCount("leonardo", "eo", 0, 2));              // 6 ==> 1 
console.log("7 ==> " + string.dummyCount("leonardo", "eo"));                    // 7 ==> 1 
console.log("8 ==> " + string.dummyCount("leonardo", "o"));                     // 8 ==> 2 
console.log("9 ==> " + string.dummyCount("leonardo", "o", 3));                  // 9 ==> 1 
console.log("10 ==> " + string.dummyCount("leonardo", "o", 2, "a"));            // 10 ==> 0 
console.log("11 ==> " + string.dummyCount("leonardo", "o", "A", 1));            // 11 ==> 0 
console.log("12 ==> " + string.dummyCount("leonardo", "o", "A", "a"));          // 12 ==> 0 
console.log("13 ==> " + string.dummyCount("leonardo"));                         // 13 ==> 0 
console.log("14 ==> " + string.dummyCount());                                   // 14 ==> 0 

console.log(string.getUpper("leonardo")); // LEONARDO 
console.log(string.getUpper());           //
 
console.log(string.getLower("ESPARIS"));  // leonardo 
console.log(string.getLower());           // 

console.log(string.capitalize("Leonardo Esparis")); // Leonardo esparis 
console.log(string.capitalize());                   // 

console.log(string.getCharPosition("Leonardo Esparis", "i")); // [14]
console.log(string.getCharPosition("Leonardo Esparis", "o")); // [2, 7]
console.log(string.getCharPosition("Leonardo Esparis"));      // []
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

console.log(string.isSubString("leonardo", "nar")); // true 
console.log(string.isSubString("leonardo", "te"));  // false 
console.log(string.isSubString("leonardo"));        // false 
console.log(string.isSubString());                  // false 

console.log(string.startsWith());                  // false 
console.log(string.startsWith("leonardo"));        // false  
console.log(string.startsWith("leonardo", "nar")); // false 
console.log(string.startsWith("leonardo", "leo")); // true 

console.log(string.endsWith("leonardo", "do"));   // true 
console.log(string.endsWith("leonardo", "leo"));  // false 
console.log(string.endsWith("leonardo"));         // false  
console.log(string.endsWith());                   // false 

console.log(string.swapCase("leonardo ESPARIS MeZa")); // LEONARDO esparis mEzA 
console.log(string.swapCase());                        //

console.log(string.trim("leonardo esparis meza"));  // leonardoesparismeza
console.log(string.trim("leonardo"));               // leonardo 
console.log(string.trim());                         //

console.log(string.rConCat()); // 
console.log(string.rConCat("leonardo esparis meza"));           // leonardo esparis meza 
console.log(string.rConCat("leonardo esparis meza", "123123")); // leonardo esparis meza123123

console.log(string.lConCat());                                  // 
console.log(string.lConCat("leonardo esparis meza"));           // leonardo esparis meza 
console.log(string.lConCat("leonardo esparis meza", "123123")); // 123123leonardo esparis meza 

console.log(string.lReplace());                                         //
console.log(string.lReplace("leonardo"));                               // leonardo 
console.log(string.lReplace("leonardo", "o"));                          // lenard 
console.log(string.lReplace("leonardo esparis meza", "nardo", "!@#"));  // leo!@# esparis meza 
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 1));   // l!@#onardo esparis meza 
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 2));   // l!@#onardo !@#sparis meza
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 3));   // l!@#onardo !@#sparis m!@#za 

console.log(string.rReplace());                                         //
console.log(string.rReplace("leonardo"));                               // leonardo  
console.log(string.rReplace("leonardo", "o"));                          // lenard
console.log(string.rReplace("leonardo", "o", "123"));                   // lenard 
console.log(string.rReplace("leonardo", "o", "123", 1));                // leonard123 
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 1));   // leonardo esparis m!@#za
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 2));   // leonardo !@#sparis m!@#za
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 3));   // l!@#onardo !@#sparis m!@#za

console.log(string.join("-", [1,2,3]))   // 1-2-3 
console.log(string.join("##", [1,2,3]))  // 1##2##3
console.log(string.join("ASD", [1,2,3])) // 1ASD2ASD3

console.log("hi" + string.center("leonardo") + "hi");    // hileonardohi 
console.log("hi" + string.center("leonardo", 10) + "hi");// hi              leonardo                hi  
console.log("hi" + string.center() + "hi");              //hihi      

console.log("hi" + string.lJust("leonardo"));       // hileonardo     
console.log("hi" + string.lJust("leonardo", 10));   // hi          leonardo 
console.log("hi" + string.lJust());                 // hi 

console.log(string.rJust("leonardo") + "hi");       // leonardohi 
console.log(string.rJust("leonardo", 5) + "hi");    // leonardo          hi 
console.log(string.rJust() + "hi");                 //hi

console.log(string.escape("leonardo\' has become bigger & ..")); // leonardo&#39; has become bigger &gt; ...
console.log(string.escape("<>\'\""));                            // &lt;&amp;&quot;&#39;
console.log(string.escape());                                    // 

console.log(string.slugify("leonardo esparis")); // l-e-o-n-a-r-d-o-e-s-p-a-r-i-s
console.log(string.slugify(""));                 // 
console.log(string.slugify());                   // 

console.log(string.dummyAddTag("leonardo esparis", "html")); // <html>leonardo esparis</html>

console.log(string.dummyRemoveTag(string.dummyAddTag("leonardo esparis", "html"), "html")); // leonardo esparis
console.log(string.dummyRemoveTag("<p>leonardo</p>"));          // leonardo  
console.log(string.dummyRemoveTag("<h1>leonardo</h1>"));        // leonardo 
console.log(string.dummyRemoveTag("<1>leonardo</1>"));          // leonardo
```