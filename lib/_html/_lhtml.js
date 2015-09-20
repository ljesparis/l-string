#!/usr/bin/env node

"use strict";


var cheerio = require('cheerio');

var util = require("util"),
    isNullOrUndefined = util.isNullOrUndefined,
    isNumber = util.isNumber,
    isArray = util.isArray,
    isString = util.isString;


var utils = require("../utils");
var string = require("../_string/_lstring"),
  isAlpha = string.isAlpha,
  isDigit = string.isDigit,
  isEmpty = string.isEmpty,
  isSpace = string.isSpace,
  lSplit = string.lSplit,
  lReplace = string.lReplace,
  rReplace = string.rReplace,
  join = string.join;



/**
 *
 *  This method help to avoid XSS attacks.
 *
 *  @param {string} simple string
 *  @return {string|html} string escaped(all).
 *  @public
 *
 **/
var escape = function(_string) {
    if (isNullOrUndefined(_string))
        return "";

    var $ = cheerio.load(_string),
        s = $("*").text(),
        s_replaced =  lReplace(
                      lReplace(
                      lReplace(
                      lReplace(
                      lReplace(s,"&", "&gt;"), 
                      "<", "&lt;"), 
                      ">", "&amp;"),
                      '"', "&quot;"), 
                      "'", "&#39;");

    return $.html();
  }
};
exports.escape = escape;


/**
 *
 *  This method will add - between every character.
 *
 *  @param {string} simple string
 *  @return {string} string joined together with '-'.
 *  @public
 *
 **/
var slugify = function(_string) {
    if (isNullOrUndefined(_string))
        return "";
    
    var _array = [];
    for (var i = 0; i < _string.length; i++) {
        if (!isSpace(_string[i]))
            _array.push(_string[i]);
    }

    return join("-", _array);
};
exports.slugify = slugify;


/**
 *
 *  This method will remove tags from a string.
 *
 *  @param {string} simple string.
 *  @return {string} string without tags.
 *  @public
 *
 **/
var removeTag = function(_string) {
    if (isNullOrUndefined(_string))
        return "";

    return _string.replace(/(<[\w\b\/]+>)+/, "")
                  .replace(/(<[\/\w\b]+>)+/, "")
                  .replace(/<!DOCTYPE[^>[]*(\[[^]]*\])?>/, "");
};
exports.removeTag = removeTag;


/**
 *
 *  Parse the passed tag.
 *
 *  @param {string} simple string.
 *  @param {string} html tag.
 *  @param {string} html attribute.
 *  @param {string} html attribute value.
 *  @return {string} html tags, with new attributes.
 *  @private
 *
 **/
var add2Tag = function(string, _tag, _attr, attrValue) {
    var cheerio = require('cheerio'),
        $ = cheerio.load(string, {normalizeWhitespace: true,});

    var _tag_parsed = utils._parse_char(_tag)
    var tag = _tag_parsed.char 
    var tagNumber = _tag_parsed.charNumber
    var element = $(tag).get(tagNumber - 1)

    if(_attr == "id"){ 

        var oldId = $(element).attr().id;
        if(!oldId) oldId = ""; 
        $(element).attr(_attr, attrValue + " " + oldId);

    } else if(_attr == "class") {

        var oldClass = $(element).attr().class;
        if(!oldClass) oldClass = "";
        $(element).attr(_attr, attrValue + " " + oldClass );

    } else if(_attr == "style"){

        var _, propertyName, propertyValue;
        attrValue.forEach(function(e){
            _ = lSplit(e, ':');
            propertyName = _[0];
            propertyValue = lSplit(_[1], ';')[0];
            $(element).css(propertyName, propertyValue);
        })
        
    } else{
        $(element).attr( _attr, attrValue );
    }

    return $.html()
}


/**
 *
 *  This method will add a class name to a specific tag.
 *
 *  @param {string}  simple string.
 *  @param {string  Tag where you want to add some classname.
 *  @param {string}  value of the class attribute.
 *  @return {string} html tag with class attribute.
 *  @public
 *
 **/
var addClassName2Tag = function(_string, _tag, _classvalue) {
    if (isNullOrUndefined(_string))
        return "";

    if (isNullOrUndefined(_classvalue) ||
        isNullOrUndefined(_tag))
         return _string;
    
    return add2Tag(_string, _tag, "class", _classvalue);
}
exports.addClassName2Tag = addClassName2Tag;


/**
 *
 *  This method will add a id name to a specific tag.
 *
 *  @param {string}  simple string.
 *  @param {string}  Tag where you want to add some idname.
 *  @param {string}  value of the id attribute.
 *  @return {string} html tag with id attribute.
 *  @public
 *
 **/
var addIdName2Tag = function(_string, _tag, _idvalue) {
    if (isNullOrUndefined(_string))
        return "";

    if (isNullOrUndefined(_idvalue) ||
        isNullOrUndefined(_tag))
        return _string;

    return add2Tag(_string, _tag, "id", _idvalue);
};
exports.addIdName2Tag = addIdName2Tag;


/**
 *
 *  This function will add any style to a specific tag.
 *
 *  @param {string}  simple string.
 *  @param {string  Tag where you want to add some styles.
 *  @param {string}  value of the style attribute.
 *  @return {string} html tag with style attribute.
 *  @public
 *
 **/
var addStyle2Tag = function(_string, _tag, _styles) {
    if (isNullOrUndefined(_string))
        return "";
    
    // parsin the styles
    var style = "",
        styles = [];
    if (isArray(_styles)) {
        if (_styles.length >= 3) {
            for (var i = 0; i < _styles.length; i++) {
                if (isArray(_styles[i])) {
                    for (var j = 0; j < _styles[i].length; j++) {
                        if (isArray(_styles[i][j])) {
                            for (var m = 0; m < _styles[i][j].length; m++) {
                                style += j == 1 && m < _styles[i][j].length - 1 ?
                                _styles[i][j][m] + ' ' : _styles[i][j][m] + ';';
                            }
                        } else {
                            style += j == 0 ? _styles[i][j] + ':' : _styles[i][j] + ';';
                        }
                    }
                }
                if (style) {
                    styles.push(style);
                }
                style = "";
            }
        } else {
            if (_styles.length == 2) {
                if (!isArray(_styles[0])) {
                    for (var i = 0; i < _styles.length; i++) {
                        if (isArray(_styles[i])) {
                            for (var j = 0; j < _styles[i].length; j++) {
                                style += i == 1 && j != _styles[i].length - 1 ?
                                    _styles[i][j] + " " : _styles[i][j] + ";";
                            }
                        } else {
                            style += i == 0 ? _styles[i] + ':' : _styles[i] + ';';
                        }
                    }
                } else {
                    for (var i = 0; i < _styles.length; i++) {
                        for (var j = 0; j < _styles[i].length; j++) {
                            if (isArray(_styles[i][j])) {
                                for (var m = 0; m < _styles[i][j].length; m++) {
                                    style += j == 1 && m < _styles[i][j].length - 1 ?
                                        _styles[i][j][m] + " " : _styles[i][j][m] + ";";
                                }
                            } else {
                                style += j == 0 ? _styles[i][j] + ':' : _styles[i][j] + ';';
                            }
                        }
                        if (style) {
                            styles.push(style);
                        }
                        style = "";
                    }
                }
            } else {
                if (isArray(_styles[0])) {
                    for (var i = 0; i < _styles[0].length; i++) {
                        style += i == 0 ? _styles[0][i] + ':' : _styles[0][i] + ';';
                    }
                }
            }
            if (style) {
                styles.push(style);
            }
            style = "";
        }
    }
    return add2Tag(_string, _tag, "style", styles);
};
exports.addStyle2Tag = addStyle2Tag;


/*
 *
 *  this function will add any attr to the choosen tag,
 *  except class, id, style attr.
 *
 *  @param {string}  simple string.
 *  @param {string}  Tag where you want to add some attributes.
 *  @param {string}  attribute name that you want to add.
 *  @param {string}  attributes that you want to add.
 *  @return {string} html tag with other attrs.
 *  @public
 *
 *  Example:
 *      data-city or data-language or href or src
 *
 **/
var addAttr2Tag = function(_string, _tag, attrname, attrs) {
    if (isNullOrUndefined(_string))
        return "";

    if (isNullOrUndefined(_tag) ||
        isNullOrUndefined(attrname) &&
        attrname != "class" &&
        attrname != "id" &&
        attrname != "style") 
        return _string;

    if (isNullOrUndefined(attrs))
        attrs = "";

    if (isEmpty(attrs) ||
        attrs == "") {
        var _result = add2Tag(_string, _tag, attrname, attrs);
        for (var i = 0; i < _result.length; i++) {
            if (_result.slice(i, attrname.length + i) == attrname) {
                var _ = _result[attrname.length + i] +
                        _result[attrname.length + i + 1] +
                        _result[attrname.length + i + 2];
                if (_ == "=''")
                        return lReplace(_result, _, "", 1);

                return _result
            }
        }
    } else {
        return add2Tag(_string, _tag, attrname, attrs);
    }
}
exports.addAttr2Tag = addAttr2Tag;