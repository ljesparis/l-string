#!/usr/bin/env node

"use strict";

var string = require("./_string/_lstring");
var html   = require("./_html/_lhtml");

var isSpace          = string.isSpace;
var multiply         = string.multiply;
var isUpper          = string.isUpper;
var isLower          = string.isLower;
var isAlpha          = string.isAlpha;
var isDigit          = string.isDigit;
var isAlphanumeric   = string.isAlphanumeric;
var isEmpty          = string.isEmpty;
var rSlice           = string.rSlice;
var dummyCount       = string.dummyCount;
var capitalize       = string.capitalize;
var getCharPosition  = string.getCharPosition;
var reverse          = string.reverse;
var title            = string.title;
var lSplit           = string.lSplit;
var rSplit           = string.rSplit;
var isSubString      = string.isSubString;
var startsWith       = string.startsWith;
var endsWith         = string.endsWith;
var swapCase         = string.swapCase;
var trim             = string.trim;
var trimPrefix       = string.trimPrefix;
var rConCat          = string.rConCat;
var lConCat          = string.lConCat;
var lReplace         = string.lReplace;
var rReplace         = string.rReplace;
var join             = string.join;
var center           = string.center;
var lJust            = string.lJust;
var rJust            = string.rJust;
var remove           = string.remove;
var insert           = string.insert;
var toCharArray      = string.toCharArray;
var smartCount       = string.smartCount;
var ord              = string.ord;
var chr              = string.chr;
var escape           = html.escape;
var slugify          = html.slugify;
var removeTag        = html.removeTag;
var addClassName2Tag = html.addClassName2Tag;
var addIdName2Tag    = html.addIdName2Tag;
var addStyle2Tag     = html.addStyle2Tag;
var addAttr2Tag      = html.addAttr2Tag;


module.exports = function() {

  String.prototype.multiply = function(times) {
    return multiply(this, times);
  };

  String.prototype.isUpper = function() {
    return isUpper(this);
  };

  String.prototype.isLower = function() {
    return isLower(this);
  };

  String.prototype.isAlpha = function() {
    return isAlpha(this);
  };
  isSpace = string.isSpace,

  String.prototype.isDigit = function() {
    return isDigit(this);
  };

  String.prototype.isAlphanumeric = function() {
    return isAlphanumeric(this);
  };

  String.prototype.isEmpty = function() {
    return isEmpty(this);
  };

  String.prototype.isSpace = function() {
    return isSpace(this);
  };

  String.prototype.rSlice = function(start, end) {
    return rSlice(this, start, end);
  };

  String.prototype.dummyCount = function(_subString, _startCount, _endCount) {
    return dummyCount(this, _subString, _startCount, _endCount);
  };

  String.prototype.smartCount = function(_subString, _startCount, _endCount) {
    return smartCount(this, _subString, _startCount, _endCount);
  };

  String.prototype.capitalize = function() {
    return capitalize(this);
  };

  String.prototype.getCharPosition = function(_char) {
    return getCharPosition(this, _char);
  };

  String.prototype.reverse = function() {
    return reverse(this);
  };

  String.prototype.title = function() {
    return title(this);
  };

  String.prototype.lSplit = function(_subS, maxsplit) {
    return lSplit(this, _subS, maxsplit);
  };

  String.prototype.rSplit = function(_subS, maxsplit) {
    return rSplit(this, _subS, maxsplit);
  };

  String.prototype.isSubString = function(_sub) {
    return isSubString(this, _sub);
  };

  String.prototype.startsWith = function(_prefix) {
    return startsWith(this, _prefix);
  };

  String.prototype.endsWith = function(_prefix) {
    return endsWith(this, _prefix);
  };

  String.prototype.swapCase = function() {
    return swapCase(this);
  };

  String.prototype.trim = function() {
    return trim(this);
  };

  String.prototype.trimPrefix = function(prefix) {
    return trimPrefix(this, prefix);
  };

  String.prototype.rConCat = function(_string) {
    return rConCat(this, _string);
  };

  String.prototype.lConCat = function(_string) {
    return lConCat(this, _string);
  };

  String.prototype.lReplace = function(_old, _new, maxreplace) {
    return lReplace(this, _old, _new, maxreplace);
  };

  String.prototype.rReplace = function(_old, _new, maxreplace) {
    return rReplace(this, _old, _new, maxreplace);
  };

  String.prototype.join = function(_array) {
    return join(this, _array);
  };

  String.prototype.toCharArray = function() {
    return toCharArray(this);
  };

  String.prototype.center = function(_times, _val) {
    return center(this, _times, _val);
  };

  String.prototype.lJust = function(_times, _val) {
    return lJust(this, _times, _val);
  };

  String.prototype.rJust = function(_times, _val) {
    return rJust(this, _times, _val);
  };

  String.prototype.remove = function(_value) {
    return remove(this, _value);
  };

  String.prototype.insert = function(_value, _position) {
    return insert(this, _value, _position);
  };

  String.prototype.escape = function() {
    return escape(this);
  };

  String.prototype.slugify = function() {
    return slugify(this);
  };

  String.prototype.ord = function(){
    return ord(this);
  }

  String.prototype.chr = function(){
    return chr(this);
  }

  String.prototype.removeTag = function() {
    return removeTag(this);
  };

  String.prototype.addClassName2Tag = function(_tag, _classvalue) {
    return addClassName2Tag(this, _tag, _classvalue);
  };

  String.prototype.addIdName2Tag = function(_tag, _idvalue) {
    return addIdName2Tag(this, _tag, _idvalue);
  };

  String.prototype.addStyle2Tag = function(_tag, _styles) {
    return addStyle2Tag(this, _tag, _styles);
  };

  String.prototype.addAttr2Tag = function(_tag, attrname, attrs) {
    return addAttr2Tag(this, _tag, attrname, attrs);
  };
}
