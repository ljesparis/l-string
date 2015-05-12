#!/usr/bin/env node

"use strict";

var util = require("util"),
	isNullOrUndefined = util.isNullOrUndefined,
	isNumber = util.isNumber; 

exports.multiply = function(_string, _times) {

	/*
	*
	*	This method multiply the string n-times
	*
	**/
	
	if (isNullOrUndefined(_string)){
		return "";
	}

	if (isNullOrUndefined(_times) || _times <= 0){
		return _string;
	}

	var _nString = "";

	while(_times > 0){
		_nString += _string;
		_times --;
	}

	return _nString;
};	


exports.isUpper = function(_string) {

	/**
	*
	*	This method test, if a string it is UpperCase
	*
	**/

	return /^[A-Z]+$/.test(_string);
};


exports.isLower = function(_string) {

	/**
	*
	*	This method test, if a string it is LowerCase
	*
	**/	

	return /^[a-z]+$/.test(_string);
};


exports.isAlpha = function(_string) {

	/**
	*
	*	This method test, if a string it is Alphabetic
	*
	**/

	return /^[a-zA-Z\ ]+$/.test(_string);
};


exports.isDigit = function(_string) {

	/**
	*
	*	This method test, if a string it is a digit
	*
	**/	

	return /^[0-9]+$/.test(_string);
};


exports.isAlphanumeric = function(_string) {

	/**
	*
	*	This method test, if a string it is alphanumeric
	*
	**/
	
	return /^[\w]+$/.test(_string);
};


exports.isEmpty = function(_string) {

	/**
	*
	*	This method test, if a string it is empty
	*
	**/

	return /^[\s]+$/.test(_string);
};


exports.isSpace = function(_string) {

	/**
	*
	*	This method test, if a string it is a space.
	*
	* 	This method only match 1 space;
	*	if you want to match more than 1 space
	*	use the method isEmpty.
	*
	**/

	return /^[\s]$/.test(_string);
};


exports.lslice = function(_string, _start, _end) {

	/**
	*
	* 	This method it's the same javasript's slice
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return _string.slice(_start, _end);
};


exports.rslice = function(_string, _start, _end) {

	/**
	*
	* 	This method will slice a string, from the right to left.
	*
	**/

	if (isNullOrUndefined(_string) || 
		this.isAlpha(_start) && !isNullOrUndefined(_start) ||
		this.isAlpha(_end) && !isNullOrUndefined(_end) ){
		return "";
	}
	
	if(isNumber(_string)){
		_string = _string.toString();
	}

	if (isNullOrUndefined(_start)){
		return _string;
	}

	if (isNullOrUndefined(_end)){
		_end = this.getSize(_string);
	}

	var _stringLength = this.getSize(_string);

	if (_start > (_stringLength - 1)  &&  _end > _stringLength  ){
		return '';
	}else{
		
		/**
		*
		* 	With the next two variables, i'll change the initial
		*	character... 
		*
		*	l e o    to ==>   l e o
		*	0 1 2    to ==>   2 1 0
		*
		**/
		var _nstart = ( _stringLength - 1 ) - _start;
		var _nend = ( ( _stringLength - 1 ) - _start ) - ( _end - _start );
		
		var _nString = "";

		for (var i =_nstart ; i > _nend ; i--){
			_nString = _string[i] + _nString;
		}

		return _nString;
	}
};


exports.getSize = function(_string) {

	/**
	*
	*	This method return the string size.
	*
	**/

	if (isNullOrUndefined(_string)){
		return 0;
	}

	return _string.length;
};


exports.dummyCount = function(_string, _subString, _startCount, _endCount) {

	/**
	*
	*	This method will count how many substring,
	*	the string has. It is no so effective.
	*
	**/
	
	if (isNullOrUndefined(_string) || isNullOrUndefined(_subString) ||
		this.isAlpha(_startCount) &&  !isNullOrUndefined(_startCount) || 
		!isNullOrUndefined(_endCount) && this.isAlpha(_endCount)){
		return 0;
	}
	
	if(_startCount == _endCount && 
	   isNullOrUndefined(_startCount) && 
	   isNullOrUndefined(_endCount)){
		return 0;
	}

	if (isNullOrUndefined(_startCount)) {
		_startCount = 0;
	}

	if (isNullOrUndefined(_endCount)){
		_endCount = this.getSize(_string);
	}

	var _subStringLength = this.getSize(_subString);
	var _endSlice = _subStringLength > 1? _subStringLength + _startCount : _startCount + 1;
	var _startSilce = _startCount;
	var count = 0;
	var _slice;
	var j = 0;

	for (var i = _startCount; i < _endCount; i++) {
		
		_slice = this.lslice(_string, _startSilce, _endSlice);

		if (_subString == _slice){
			count ++;
		}

		var _arraySlice = this.getCharPosition( _string, _slice[ this.getSize(_slice) - 1] );
		var _sizeArray = this.getSize(_arraySlice);

		if( _sizeArray > 1 ){
			if( _arraySlice[j] == _endCount ){
				break;
			}
		}else{
			if(_arraySlice[0] == _endCount){
				break;
			}
		}
		j++;

		_startSilce++;
		_endSlice++;
	}

	return count;
};

/*
exports.smartCount = function(_string, _subString, _startCount, _endCount) {
	still working on it.
};
*/

exports.getUpper = function(_string) {

	/**
	*
	*	This method return the string UpperCase.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return _string.toUpperCase();
};


exports.getLower = function(_string) {

	/**
	*
	*	This method return the string LowerCase.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return _string.toLowerCase();
};


exports.capitalize = function(_string) {

	/**
	*
	*	This method return the string capitalized.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return this.getLower(_string).replace(this.getLower(_string)[0], 
										  this.getLower(_string)[0]
															       .toUpperCase());
};


exports.getCharPosition = function(_string, _char) {

	/**
	*
	* 	This method will return an array of character position.
	*
	**/
		
	var position = [];

	if (isNullOrUndefined(_char) || isNullOrUndefined(_string)) {
		return position;
	}

	for (var j = 0; j < this.getSize(_char); j++){
		for (var i = 0; i < this.getSize(_string); i++){
			if(_string[i] == _char[j]){
				position.push(i);
			}
		} 
	}

	return position;
};


exports.reverse = function(_string) {

	/**
	*
	*	This method return the string reversed.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _newString = "";

	for (var i = this.getSize(_string); i > 0; i--){
		_newString += _string[i-1];
	}

	return _newString;
};


exports.title = function(_string) {

	/**
	*
	*	This method return the title form of the string.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _newString = "";
	var _stringLower = this.getLower(_string);

	for (var i = 0; i < this.getSize(_string); i++) {
		if (i == 0){
			_newString += _stringLower[i].toUpperCase();
		}else if (_stringLower[i-1] == " "){
			_newString += _stringLower[i].toUpperCase();
		}else{
			_newString += _stringLower[i];
		}
	}

	return _newString;
};


exports.lsplit = function (_string, _subS, maxsplit) {

	/**
	*	
	*	
	*
	**/
	
	if (this.isAlpha(maxsplit) || isNullOrUndefined(maxsplit)){
		maxsplit = 0;
	}

	if (isNullOrUndefined(_string)){
		return [];
	}

	if (isNullOrUndefined(_subS)) {
		_subS = " ";
	}

	var _string_array = [];


	if (this.isSubString(_string, _subS)){
		
		var _nString = "";
		var _subStringLength = this.getSize(_subS);
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = 0; i < this.getSize(_string); i++){
			
			_slice = this.lslice(_string, _startSlice, _endSlice);

			if (_subS != _slice){
				_nString += this.lslice(_slice, 0,1);
			}else{
				if (_nString){
					_string_array.push(_nString);
				} 
					
				_startSlice = _startSlice + ( _subStringLength - 1) ;
				_endSlice = _endSlice + ( _subStringLength - 1);
				
				_nString = "";
				
				count++;
				if (count == maxsplit){
					_subS = "";
				}
			}

			_startSlice++;
			_endSlice++;
		}

		if(_nString){
			_string_array.push(_nString);
		}
	}else{
		_string_array.push(_string);
	}

	return _string_array;
};


exports.rsplit = function (_string, _subS, maxsplit) {

	/**
	*
	*	
	*
	**/

	if (this.isAlpha(maxsplit) || isNullOrUndefined(maxsplit)){
		maxsplit = 0;
	}

	if (isNullOrUndefined(_string)){
		return [];
	}

	if (isNullOrUndefined(_subS)) {
		_subS = " ";
	}
	
	var _string_array_copy = [];
	var _string_array = [];

	if (this.isSubString(_string, _subS)) {

		var _nString = "";
		var _subStringLength = this.getSize(_subS);
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = this.getSize(_string) - 1 ; i >= 0; i--){

			_slice = this.rslice(_string, _startSlice,  _endSlice);

			if (_subS != _slice){
				_nString = this.rslice(_slice, 0, 1) + _nString;
			}else{
				if (_nString){
					_string_array_copy.push(_nString);
				}

				_startSlice = _startSlice + ( _subStringLength - 1) ;
				_endSlice = _endSlice + ( _subStringLength - 1);

				_nString = "";
				
				count++;
				if (count == maxsplit){
					_subS = "";
				}
			}

			_startSlice++;
			_endSlice++;
		}

		if(_nString){
			_string_array_copy.push(_nString);
		}
	}else{
		_string_array_copy.push(_string);
	}

	for (var i = this.getSize(_string_array_copy) - 1; i >= 0; i--){
		_string_array.push(_string_array_copy[i]);
	}

	return _string_array;
};


exports.isSubString = function(_string, _subString) {

	/**
	*
	*	This method test, if the substring belong to the string.
	*
	**/

	if (isNullOrUndefined(_subString) || isNullOrUndefined(_string)){
		return false;
	}

	var _startSilce = 0;
	var _endSlice = this.getSize(_subString);
	var _slice;

	for (var i = 0; i < this.getSize(_string); i++) {
		_slice = this.lslice(_string, _startSilce, _endSlice);
		
		if (_slice == _subString){
			return true;
		}

		_startSilce++;
		_endSlice++;
	}

	return false;
};


exports.startsWith = function(_string, _prefix) {
	
	/**
	*
	*	This method test, if the string start with the prefix.
	*
	**/

	if (isNullOrUndefined(_prefix) || isNullOrUndefined(_string)) {
		return false;
	}

	var _prefix_len = this.getSize(_prefix);
	var cont = 0;

	for (var i = 0; i < _prefix_len ; i++) {
		if(_string[i] == _prefix[i]){
			cont ++;
		}else{
			break;
		}
	}

	if(cont == _prefix_len){
		return true;
	}else{
		return false;
	}
};


exports.endsWith = function(_string, _prefix) {

	/**
	*
	*	This method test, if the string end with the prefix.
	*
	**/

	if (isNullOrUndefined(_string) || isNullOrUndefined(_prefix)){
		return false;
	}

	var cont = 0;
	var _prefixLength = this.getSize(_prefix);
	var i = this.getSize(_string);
	var j = _prefixLength;

	while(j > 0){
		j--; i--;
		if(_string[i] == _prefix[j]){
			cont++;
		}
	}

	if(cont == _prefixLength){
		return true;
	}else{
		return false;
	}
};


exports.swapCase = function(_string) {

	/**
	*
	*	
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _nString = "";

	for (var i = 0; i < this.getSize(_string); i++) {
		if (this.isUpper(_string[i])){
			_nString += _string[i].toLowerCase();
		}else if (this.isLower(_string[i])){
			_nString += _string[i].toUpperCase();
		}else if (this.isSpace(_string[i])){
			_nString += _string[i];
		}
	}

	return _nString;
};


exports.trim = function(_string) {

	/**
	*
	*	This method remove all the spacess from the string	
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return this.lreplace(_string, " ");
};


exports.rConCat = function(_string, _newValue) {

	/**
	*
	*	This method concatenate to the right of the string,
	*	a new value.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	if (isNullOrUndefined(_newValue)){
		return _string;
	}

	return _string + _newValue;
};


exports.lConCat = function(_string, _newValue) {

	/**
	*
	*	This method concatenate to the left of the string,
	*	a new value.	
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	if (isNullOrUndefined(_newValue)){
		return _string;
	}

	return  _newValue + _string;
};


exports.lreplace = function(_string, _old, _new, maxreplace) {

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from left to right.
	*
	**/

	if(this.isAlpha(maxreplace) || isNullOrUndefined(maxreplace)){
		maxreplace = this.getSize(_string);
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	if (typeof _old == "undefined"){
		return _string;
	}
	
	if (typeof _new == "undefined"){
		_new = "";
	}

	var _nString = "";

	if (this.isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = this.getSize(_old);
		var _slice;
		var _startSlice = 0;
		var _endSlice = _oldLength;

		for (var j = 0; j < this.getSize(_string); j++) {
			
			_slice = this.lslice(_string, _startSlice, _endSlice);

			if(_old == _slice){
				_nString += _new;

				_startSlice = _startSlice + (_oldLength - 1);
				_endSlice = _endSlice + (_oldLength - 1);

				count ++;
				if (count == maxreplace){
					_old = "";
				}
			}else{
				// this sentence will remove duplicated characters
				_nString += this.lslice(_slice, 0,1); 
			}

			_startSlice++;
			_endSlice++;
		}
	}else{
		_nString = _string;
	}

	return _nString;
};


exports.rreplace = function(_string, _old, _new, maxreplace){

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from right to left.
	*
	**/

	if(this.isAlpha(maxreplace) || isNullOrUndefined(maxreplace)){
		maxreplace = this.getSize(_string);
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	if (isNullOrUndefined(_old)){
		return _string;
	}

	if (isNullOrUndefined(_new)){
		_new = "";
	}

	var _nString = "";

	if (this.isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = this.getSize(_old);
		var _slice;
		var _startSlice = 0;
		var _endSlice = _oldLength;

		for (var j = 0; j < this.getSize(_string); j++) {
			
			_slice = this.rslice(_string, _startSlice, _endSlice);

			if(_old == _slice){
				_nString = _new + _nString;

				_startSlice = _startSlice + (_oldLength - 1);
				_endSlice = _endSlice + (_oldLength - 1);

				count ++;
				if (count == maxreplace){
					_old = "";
				}

			}else{
				// this sentence will remove duplicated characters
				_nString = this.rslice(_slice, 0,1) + _nString; 
			}

			_startSlice++;
			_endSlice++;
		}
	}else{
		return _string;
	}

	return _nString;
}


exports.join = function (_string, _array) {

	if ( !(_array instanceof Array) &&
		isNullOrUndefined(_array) || 
		isNullOrUndefined(_string) ){

		return '';
	}

	var _nstring = "";

	for (var i = 0; i < this.getSize(_array); i++) {
		if(isNumber(_array[i])){
			_array[i] = _array[i].toString(); 
		}
		_nstring += _array[i] + _string;
	}

	return this.rreplace(_nstring, _string, "", 1);
}


exports.center = function(_string, _times) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || this.isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	var space = " ";
	var value = this.multiply(space, _times);
	return value + _string + value;
};	


exports.ljust = function(_string, _times) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || this.isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	var space = " ";
	var value = this.multiply(space, _times);
	return value + _string;
};	


exports.rjust = function(_string, _times) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || this.isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	var space = " ";
	var value = this.multiply(space, _times);
	return _string + value;
};	


// from here to down, all methods will be, html string's methods

exports.escape = function(_string) {

	/**
	*
	*	This method help to avoid XSS attacks.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return _string.replace("&", "&gt;")
				  .replace("<", "&lt;")
				  .replace(">", "&amp;")
				  .replace('"', "&quot;")
				  .replace("'", "&#39;");
};


exports.slugify = function(_string) {

	/**
	*
	*	This method will add - between every character.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _array = [];

	for (var i = 0; i < this.getSize(_string); i++) {
		if ( !this.isSpace(_string[i]) ) {
			_array.push(_string[i]);
		}
	}

	return this.join("-", _array);
};


exports.dummyAddTag = function(_string, _tagName) {

	/**
	*
	*	This method will add tags from a string, 
	*	but it is not so efficient.
	*
	**/

	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_tagName))
		_tagName = "p";

	var _startTag = "<" + _tagName + ">";
	var _endTag = "</" + _tagName + ">";

	return this.rConCat(this.lConCat(_string, _startTag), _endTag);
};


exports.dummyRemoveTag = function(_string) {

	/**
	*
	*	This method will remove tags from a string, 
	*	but it is not so efficient.
	*
	**/

	if (isNullOrUndefined(_string))
		return "";

	var _nString = _string;

	return _nString .replace(/(<[\w\b]+>)/, "")
					.replace(/(<[\/][\w\b]+>)/, "");
};


/*
exports.smartAddTag = function(_string, _arrayTag) {

	if ( !(_arrayTag instanceof Array) ){
		return _string;
	}

	var tree = ["<html>", "<head>", "</head>", "<body>", "</body>", "</html>"];
	var headTree = ["<title>", "</title>", "<meta/>", "<style>", "</style>"];
	var bodyTree = ["<header>", "</header>", "<footer>", "</footer>"];
	// still working on it
};


exports.smartRemoveTag = function(_string, _arrayTag) {

	if ( !(_arrayTag instanceof Array) ){
		return _string;
	}

	var tree = ["<html>", "<head>", "</head>", "<body>", "</body>", "</html>"];
	var headTree = ["<title>", "</title>", "<meta/>", "<style>", "</style>"];
	var bodyTree = ["<header>", "</header>", "<footer>", "</footer>"];
	// still working on it
};


exports.addStyleToTag = function() {
	// still working on it
};


exports.addClassNameToTag = function() {
	// still working on it
};


exports.addIdNameToTag = function() {
	// still working on it
};
*/