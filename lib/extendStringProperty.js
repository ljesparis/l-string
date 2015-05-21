#!/usr/bin/env node

"use strict";

var string = require("./string"),
	multiply = string.multiply,
	isUpper = string.isUpper,
	isLower = string.isLower,
	isAlpha = string.isAlpha,
	isDigit = string.isDigit,
	isAlphanumeric = string.isAlphanumeric,
	isEmpty = string.isEmpty,
	isSpace = string.isSpace,
	lSlice = string.lSlice,
	rSlice = string.rSlice,
	getSize = string.getSize,
	dummyCount = string.dummyCount,
	getUpper = string.getUpper,
	getLower = string.getLower,
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


module.exports = function(){

    String.prototype.multiply = function (times){
    	return multiply(this, times);
    };

    String.prototype.isUpper = function (){
    	return isUpper(this);
    };

    String.prototype.isLower = function (){
    	return isLower(this);
    };

    String.prototype.isAlpha = function (){
    	return isAlpha(this);
    };
	isSpace = string.isSpace,

    String.prototype.isDigit = function (){
    	return isDigit(this);
    };

    String.prototype.isAlphanumeric = function (){
    	return isAlphanumeric(this);
    };

    String.prototype.isEmpty = function (){
    	return isEmpty(this);
    };

    String.prototype.isSpace = function (){
    	return isSpace(this);
    };
	getUpper = string.getUpper,

    String.prototype.lSlice = function (start, end){
    	return lSlice(this, start, end);
    };

    String.prototype.rSlice = function (start, end){
    	return rSlice(this, start, end);
    };

    String.prototype.getSize = function (){
    	return getSize(this);
    };

    String.prototype.dummyCount = function (_subString, _startCount, _endCount){
    	return dummyCount(this, _subString, _startCount, _endCount);
    };

    String.prototype.getUpper = function (){
    	return getUpper(this);
    };

    String.prototype.getLower = function (){
    	return getLower(this);
    };

    String.prototype.capitalize = function (){
    	return capitalize(this);
    };

    String.prototype.getCharPosition = function (_char){
    	return getCharPosition(this, _char);
    };

    String.prototype.reverse = function (){
    	return reverse(this);
    };

    String.prototype.title = function (){
    	return title(this);
    };

    String.prototype.lSplit = function (_subS, maxsplit){
    	return lSplit(this, _subS, maxsplit);
    };

    String.prototype.rSplit = function (_subS, maxsplit){
    	return rSplit(this, _subS, maxsplit);
    };

    String.prototype.isSubString = function (_sub){
    	return isSubString(this, _sub);
    };

    String.prototype.startsWith = function (_prefix){
    	return startsWith(this, _prefix);
    };

    String.prototype.endsWith = function (_prefix){
    	return endsWith(this, _prefix);
    };

    String.prototype.swapCase = function (){
    	return swapCase(this);
    };

    String.prototype.trim = function (){
    	return trim(this);
    };

    String.prototype.rConCat = function (_string){
    	return rConCat(this, _string);
    };

    String.prototype.lConCat = function (_string){
    	return lConCat(this, _string);
    };

    String.prototype.lReplace = function (_old, _new, maxreplace){
    	return lReplace(this,  _old, _new, maxreplace);
    };

    String.prototype.rReplace = function (_old, _new, maxreplace){
    	return rReplace(this,  _old, _new, maxreplace);
    };

    String.prototype.join = function (_array){
    	return join(this,  _array);
    };

    String.prototype.toCharArray = function (){
    	return toCharArray(this);
    };

    String.prototype.center = function (_times, _val){
    	return center(this, _times, _val);
    };

    String.prototype.lJust = function (_times, _val){
    	return lJust(this, _times, _val);
    };

    String.prototype.rJust = function (_times, _val){
    	return rJust(this, _times, _val);
    };

    String.prototype.remove = function (_value){
    	return remove(this, _value);
    };

    String.prototype.insert = function (_value, _position){
    	return insert(this, _value, _position);
    };

    String.prototype.escape = function (){
    	return escape(this);
    };

    String.prototype.slugify = function (){
    	return slugify(this);
    };

    String.prototype.dummyAddTag = function (_tagName){
    	return dummyAddTag(this, _tagName, _link);
    };

    String.prototype.removeTag = function (){
    	return removeTag(this);
    };

    String.prototype.smartAddTag = function (_tag_s){
    	return smartAddTag(this, _tag_s);
    };

    String.prototype.add2TagClassName = function ( _classname, _tag2addclassname){
    	return add2TagClassName(this,  _classname, _tag2addclassname);
    };

    String.prototype.add2TagIdName = function (_idname, _tag2addidname){
    	return add2TagIdName(this, _idname, _tag2addidname);
    };
}