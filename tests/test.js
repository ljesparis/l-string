#!/usr/bin/env node
//here are some usefull test

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
	add2TagIdName = string.add2TagIdName;


console.log(string.multiply() + "leonardo")
console.log(multiply(1, -1) + "leonardo")
console.log(string.multiply(1, 5) + "leonardo")

console.log(string.isUpper())
console.log(isUpper("leonardo"))
console.log(string.isUpper("LEONARDO"))

console.log(isLower("leonardo"))
console.log(string.isLower("LEONARDO"))

console.log(isAlpha("leonardo !@#"))
console.log(string.isAlpha("leonardo Esparis"))

console.log(isDigit("123"))
console.log(isDigit("asd"))
console.log(string.isDigit("!@#"))
console.log(string.isDigit())

console.log(isAlphanumeric("asd12"))
console.log(isAlphanumeric("asd"))
console.log(string.isAlphanumeric("12"))
console.log(string.isAlphanumeric("!@#"))

console.log(isSpace("!@#"))
console.log(isSpace("asd"))
console.log(string.isSpace("123"))
console.log(string.isSpace("!@#qsd123"))
console.log(string.isSpace(" "))

console.log(isEmpty("  "));
console.log(isEmpty("asd"));
console.log(string.isEmpty("1231Asd"));
console.log(string.isEmpty("!@asd"));


console.log(rSlice());
console.log(rSlice(987654321));
console.log(rSlice(987654321,1));
console.log(rSlice(987654321,2));
console.log(string.rSlice(987654321,3));
console.log(string.rSlice(987654321,"4"));
console.log(string.rSlice(987654321,0,1));
console.log(string.rSlice("leonardo",0,2));


console.log("0 ==> " + dummyCount("leonardo", "onar", 0, 5));
console.log("1 ==> " + dummyCount("leonardo leonardo", "do"));
console.log("2 ==> " + dummyCount("leonardo leonardo", "do", 4));
console.log("3 ==> " + string.dummyCount("leonardo leonardo", "do", "as"));
console.log("4 ==> " + string.dummyCount("leonardo leonardo", "do", "as", 8));
console.log("5 ==> " + string.dummyCount("leonardo leonardo", "do", 0 , 8));
console.log("6 ==> " + string.dummyCount("leonardo", "eo", 0, 2));
console.log("7 ==> " + string.dummyCount("leonardo", "eo"));
console.log("8 ==> " + dummyCount("leonardo", "o"));
console.log("9 ==> " + dummyCount("leonardo", "o", 3));
console.log("10 ==> " + dummyCount("leonardo", "o", 2, "a"));
console.log("11 ==> " + string.dummyCount("leonardo", "o", "A", 1));
console.log("12 ==> " + string.dummyCount("leonardo", "o", "A", "a"));
console.log("13 ==> " + string.dummyCount("leonardo"));
console.log("14 ==> " + string.dummyCount());

console.log(capitalize("Leonardo Esparis"));
console.log(string.capitalize("lEONARDO ESPARIS MEZA"));
console.log(string.capitalize());

console.log(getCharPosition("Leonardo Esparis", "i"));
console.log(getCharPosition("Leonardo Esparis", "o"));
console.log(string.getCharPosition("Leonardo Esparis", "e"));
console.log(string.getCharPosition());

console.log(reverse("leonardo"));
console.log(string.reverse("leonardo javier esparis meza"));
console.log(string.reverse());

console.log(title("leONArdo esPAris"));
console.log(string.title("leONArdo esPAris"));
console.log(string.title());

console.log(lSplit("leonardo", "o"))
console.log(lSplit("leonardo", "o", 1))
console.log(string.lSplit("leonardo esparis", "e"))
console.log(string.lSplit("leonardo esparis", "e", 1))
console.log(string.lSplit("leonardo", 1))
console.log(string.lSplit("leonardo", 1, 1))

console.log(rSplit("leonardo", "o"))
console.log(rSplit("leonardo", "o", 1))
console.log(string.rSplit("leonardo leonardo", "eo" ))
console.log(string.rSplit("leonardo leonardo", "eo", 1))

console.log(isSubString("leonardo", "nar"));
console.log(string.isSubString("leonardo", "te"));
console.log(isSubString("leonardo"));
console.log(string.isSubString());

console.log(startsWith());
console.log(string.startsWith("leonardo"));
console.log(string.startsWith("leonardo", "nar"));
console.log(startsWith("leonardo", "leo"));

console.log(endsWith("leonardo", "do"));
console.log(string.endsWith("leonardo", "leo"));
console.log(endsWith("leonardo"));
console.log(string.endsWith());

console.log(swapCase("leonardo ESPARIS MeZa"));
console.log(string.swapCase("leonardo ESPARIS MeZa"));
console.log(string.swapCase());

console.log(trim("           Real                     Madrid               "));
console.log(string.trim("leonardo esparis meza"));
console.log(trim("leonardo"));
console.log(string.trim());

console.log(string.rConCat());
console.log(string.rConCat("leonardo esparis meza"));
console.log(rConCat("leonardo esparis meza", "tatatata"));
console.log(string.rConCat("leonardo esparis meza", "123123"));

console.log(string.lConCat());
console.log(string.lConCat("leonardo esparis meza"));
console.log(lConCat("leonardo esparis meza", "123123"));
console.log(string.lConCat("leonardo esparis meza", "123123"));

console.log(lReplace());
console.log(lReplace("leonardo"));
console.log(lReplace("leonardo", "o"));
console.log(lReplace("leonardo", "o"));
console.log(rReplace("lASDeASDoASD", "ASD", ""));
console.log(string.lReplace("leonardo esparis meza", "nardo", "!@#"));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 1));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 2));
console.log(string.lReplace("leonardo esparis meza", "e", "!@#", 3));

console.log(rReplace());
console.log(rReplace("leonardo"));
console.log(rReplace("leonardo", "o"));
console.log(rReplace("leonardo", "o", "123", 1));
console.log(string.rReplace("leonardo", "o", "123"));
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 1));
console.log(string.rReplace("leonardo esparis meza", "e", "!@#", 2));
console.log(string.rReplace("leonardo!@#@$%^&!@#@$%^&Esparis!@#@$%^&meza!@#@$%^&", "!@#@$%^&", ""));

console.log(join("-", "leonardo"))  
console.log(join("-", [1,2,3]))  
console.log(join("##", [1,2,3])) 
console.log(string.join("ASD", [1,2,3]))
console.log(string.join("!!!!", [1,2,3,4,5,6,7,8,9,10,11,12,13,14]))

console.log("hi" + center("leonardo") + "hi");
console.log("hi" + string.center("leonardo", 10) + "hi");
console.log("hi" + string.center() + "hi");

console.log("hi" + lJust("leonardo"));
console.log("hi" + string.lJust("leonardo", 10));
console.log("hi" + string.lJust());

console.log(rJust("leonardo") + "hi");
console.log(string.rJust("leonardo", 5) + "hi");
console.log(string.rJust() + "hi");

console.log(escape("leonardo\' has become bigger & .."));
console.log(string.escape("<>\'\""));
console.log(string.escape());

console.log(slugify("leonardo esparis"));
console.log(string.slugify(""));
console.log(string.slugify());

console.log(dummyAddTag("leonardo esparis", "html"));
console.log(string.dummyAddTag(
								string.dummyAddTag(
													string.dummyAddTag("leonardo esparis", "p"), 
													"body"), 
								"html")); 

console.log(removeTag(dummyAddTag("leonardo esparis", "html"), "html"));
console.log(removeTag("<p>leonardo esparis was here</p>"));
console.log(removeTag("<h1>leonardo esparis was here</h1>"));
console.log(string.removeTag("<1>leonardo esparis was here</1>"));
console.log(string.removeTag(string.smartAddTag("leonardo", ["DOCTYPE html", "head", "body", "div", "div", "img"])));

console.log(remove("leonardo", "o"))
console.log(string.remove("leonardo", "onar"))

console.log(insert("leonardo", "o", 0))
console.log(insert("leonardo", "o", 1))
console.log(insert("leonardo", "o", 2))
console.log(insert("leonardo", "o", 3))
console.log(insert("leonardo", "o", 4))
console.log(string.insert("leonardo", "o", 5))
console.log(string.insert("leonardo", "o", 6))
console.log(string.insert("leonardo", "o", 7))
console.log(string.insert("leonardo", "o"))
console.log(string.insert("leonardo", "o", 8))

console.log(string.toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))
console.log(toCharArray("leonardo javier esparis meza {'name':'leonardo'}"))

console.log(smartAddTag("leonardo", ["body", "header", "p"]))
console.log(string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "img"]))


console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div"))
console.log(add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1"))
console.log(add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div2"))
console.log(add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div3"))
console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "4div"))

console.log(string.add2TagClassName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div5"))
console.log(add2TagClassName("<img>leo", "image", "img1"))
console.log(add2TagClassName("<img>leo", "image", "img2"))
console.log(add2TagClassName("<img>leo", "image", "img"))
console.log(add2TagClassName("<p>leo</p>", "image", "p"))
console.log(add2TagClassName("<p>leo</p>", "image", "p1"))
console.log(string.add2TagClassName("<p>leo</p>", "image", "p2"))
console.log(string.add2TagClassName("<p>leo</p>", "image", "p3"))
console.log(string.add2TagClassName("<p>leo</p>", "image", "p4"))

console.log(add2TagIdName("<img>leo", "image", "img1"))
console.log(add2TagIdName("<img>leo", "image", "img2"))
console.log(add2TagIdName("<img>leo", "image", "img"))
console.log(add2TagIdName("<p>leo</p>", "image", "p"))
console.log(add2TagIdName("<p>leo</p>", "image", "p1"))
console.log(string.add2TagIdName("<p>leo</p>", "image", "p2"))
console.log(string.add2TagIdName("<p>leo</p>", "image", "p3"))
console.log(string.add2TagIdName("<p>leo</p>", "image", "p4"))

console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div"))
console.log(add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div1"))
console.log(add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div2"))
console.log(add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div3"))
console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "4div"))

console.log(string.add2TagIdName(
	string.smartAddTag("leonardo", ["DOCTYPE","html", "div", "div", "div", "div", "img"])
	, "a", "div5"))



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
console.log("<1>leonardo esparis was here</1>".removeTag());
console.log("leonardo".remove("o"))
console.log("leonardo".insert("o", 0))
console.log("leonardo javier esparis meza {'name':'leonardo'}".toCharArray())
console.log("leonardo".smartAddTag(["body", "header", "p"]))
var x = "leonardo".smartAddTag(["DOCTYPE","html", "div", "div", "div", "div", "img"]);
console.log(x.add2TagClassName("something", "html"));
console.log(x.add2TagClassName("a", "div"))
console.log(x.add2TagIdName("a", "div2"))
var x = "leonardo".smartAddTag(["DOCTYPE","html", "div", "div", "div", "div", "img"]);
console.log(x.add2TagIdName("a", "img"))
console.log("leonardo leonardo leonardo leonardo".dummyCount("onar"));
console.log("leonardo esparis meza".lSplit("e",1))
console.log("leonardo esparis meza".lSplit("e",2))
console.log("leonardo esparis meza".lSplit("e",3))
console.log("leonardo".isSubString("nar"));

console.log("leonardo".dummyCount('o', 1, 4))
console.log("leonardo".multiply(2))
console.log("leonardo".isUpper())
console.log("leonardo".isLower())
console.log("leonardo".isAlpha())
console.log("leonardo".isDigit())
console.log("leonardo".isAlphanumeric())
console.log("leonardo".isSpace())
console.log("leonardo".isEmpty());
console.log("leonardo".rSlice(0,3));
console.log("Leonardo Esparis".capitalize());
console.log("Leonardo esparis".getCharPosition("e"));
console.log("leonardo".reverse());
console.log("leonardo javier esparis meza".reverse());
console.log("leONArdo esPAris".title());
console.log("leonardo leonardo".rSplit("eo", 1))
console.log("leonardo leonardo".lSplit("eo", 1))