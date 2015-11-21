#!/usr/bin/env node

"use strict";

var util = require("util");
    
var isNullOrUndefined = util.isNullOrUndefined;
var isNumber          = util.isNumber;
var isArray           = util.isArray;
var isString          = util.isString;


function Formatter(_string){
	this._string = _string;
	this._common_elements = ['%s', '%r']
}

Formatter.prototype.__getElementsToFormat = function() {
	
}

Formatter.prototype._format = function(values) {
	return "leoanrdo"  + this._string + " " +values;
}

Formatter.prototype._vformat = function(values) {
	return "leoanrdo"  + this._string + " " +values;
}

exports.Formatter = Formatter;