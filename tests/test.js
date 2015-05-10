#!/usr/bin/env node
//here are some usefull test

var string = require("../lib/string");


console.log(string.multiply("*", 5))

console.log(string.isUpper("leonardo"))
console.log(string.isUpper("LEONARDO"))

console.log(string.isLower("leonardo"))
console.log(string.isLower("LEONARDO"))

console.log(string.isAlpha("leonardo !@#"))
console.log(string.isAlpha("leonardo Esparis"))

console.log(string.isDigit("123"))
console.log(string.isDigit("asd"))
console.log(string.isDigit("!@#"))

console.log(string.isAlphanumeric("asd12"))
console.log(string.isAlphanumeric("asd"))
console.log(string.isAlphanumeric("12"))
console.log(string.isAlphanumeric("!@#"))

console.log(string.isSpace("!@#"))
console.log(string.isSpace("asd"))
console.log(string.isSpace("123"))
console.log(string.isSpace("!@#qsd123"))
console.log(string.isSpace(" "))

console.log(string.isEmpty("  "));
console.log(string.isEmpty("asd"));
console.log(string.isEmpty("1231Asd"));
console.log(string.isEmpty("!@asd"));


console.log(string.slice("leonardo",0,3)); // this start from l 

console.log(string.rslice(154654654,0,1));
console.log(string.rslice("leonardo",0,2)); // this start from o 

console.log(string.getSize(154654));

console.log(string.count("leonardo", "eo", 0, 2));

console.log(string.getUpper("leonardo"));

console.log(string.getLower("ESPARIS"));

console.log(string.capitalize("Leonardo Esparis"));

console.log(string.getCharPosition("Leonardo Esparis", "i"));

console.log(string.reverse("leonardo"));

console.log(string.title("leONArdo esPAris"));

console.log(string.split("leonardo", "o"))
console.log(string.split("leonardo", "o", 1))

console.log(string.rsplit("leonardo", "o"))
console.log(string.rsplit("leonardo", "o", 1))

console.log(string.isSubString("leonardo", "nar"));
console.log(string.isSubString("leonardo", "te"));

console.log(string.startsWith("leonardo", "nar"));
console.log(string.startsWith("leonardo", "leo"));

console.log(string.endsWith("leonardo", "do"));
console.log(string.endsWith("leonardo", "leo"));

console.log(string.swapCase("leonardo ESPARIS MeZa"));

console.log(string.trim("leonardo esparis meza"));

console.log(string.rConCat("leonardo esparis meza", "123123"));

console.log(string.lConCat("leonardo esparis meza", "123123"));

console.log(string.replace("leonardo esparis meza", "nardo", "!@#"));
console.log(string.replace("leonardo esparis meza", "e", "!@#", 1));
console.log(string.replace("leonardo esparis meza", "e", "!@#", 2));
console.log(string.replace("leonardo esparis meza", "e", "!@#", 3));

console.log(string.center("leonardo"));
console.log(string.center("leonardo", 100));

console.log(string.ljust("leonardo"));
console.log(string.ljust("leonardo", 10));

console.log(string.rjust("leonardo"));
console.log(string.rjust("leonardo", 5) + "hi");

console.log(string.escape("leonardo\' has become bigger & .."));
console.log(string.escape("<>\'\""));

console.log(string.slugify("leonardo esparis"));

console.log(string.dummyAddTag("leonardo esparis", "html"));

console.log(string.dummyRemoveTag(string.dummyAddTag("leonardo esparis", "html"), "html"));
console.log(string.dummyRemoveTag("<p>leonardo esparis was here</p>"));








