#!/usr/bin/env node

"use strict";

var util = require("util"),
	isNullOrUndefined = util.isNullOrUndefined,
	isNumber = util.isNumber,
	isArray = util.isArray,
	isString = util.isString;


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


exports.lSlice = function(_string, _start, _end) {

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


exports.rSlice = function(_string, _start, _end) {

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
	}else if(this.isDigit(_string)){
		_string = _string.toString();
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
	if(isNumber(_startCount) || this.isDigit(_startCount)){
		_startCount = parseInt(_startCount); 
	}else if (isNumber(_endCount) || this.isDigit(_endCount)){
		_endCount = parseInt(_endCount);
	}

	if (isNullOrUndefined(_string) || isNullOrUndefined(_subString) ||
		this.isAlpha(_startCount) &&  !isNullOrUndefined(_startCount) || 
		!isNullOrUndefined(_endCount) && this.isAlpha(_endCount)){
		return 0;
	}
	
	if(_startCount == _endCount && 
	   !isNullOrUndefined(_startCount) && 
	   !isNullOrUndefined(_endCount)){
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
		
		_slice = this.lSlice(_string, _startSilce, _endSlice);

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


exports.smartCount = function(_string, _subString, _startCount, _endCount) {
	//still working on it.

	if(isNullOrUndefined(_string) || isNullOrUndefined(_subString)){
		return 0;
	}

	if ( ( this.isAlpha(_startCount) && 
		!isNullOrUndefined(_startCount) ) && 
		( this.isAlpha(_endCount) && 
		!isNullOrUndefined(_endCount) ) ){

	}else if( ( this.isAlpha(_startCount) && 
			  !isNullOrUndefined(_startCount) ) && 
			  ( this.isDigit(_endCount) ||  
			  isNumber(_endCount) ) ){

	}else if ( ( this.isDigit(_startCount) || 
		       isNumber(_startCount) ) && 
			   ( this.isAlpha(_endCount) && 
			   !isNullOrUndefined(_endCount) ) ) {

	}else{
		return this.dummyCount(_string, _subString, _startCount, _endCount);		
	}

};


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

	return this.lReplace(this.getLower(_string), 
						 this.getLower(_string)[0],
						 this.getLower(_string)[0].toUpperCase());
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


exports.lSplit = function (_string, _subS, maxsplit) {

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
			
			_slice = this.lSlice(_string, _startSlice, _endSlice);

			if (_subS != _slice){
				_nString += this.lSlice(_slice, 0,1);
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


exports.rSplit = function (_string, _subS, maxsplit) {

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

			_slice = this.rSlice(_string, _startSlice,  _endSlice);

			if (_subS != _slice){
				_nString = this.rSlice(_slice, 0, 1) + _nString;
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
		_slice = this.lSlice(_string, _startSilce, _endSlice);
		
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

	return this.lReplace(_string, " ");
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

/*
exports.insert = function (_string, _nString) {
	// still working on it
}
*/

exports.lReplace = function(_string, _old, _new, maxreplace) {

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
			
			_slice = this.lSlice(_string, _startSlice, _endSlice);

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
				_nString += this.lSlice(_slice, 0,1); 
			}

			_startSlice++;
			_endSlice++;
		}
	}else{
		_nString = _string;
	}

	return _nString;
};


exports.rReplace = function(_string, _old, _new, maxreplace){

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
			
			_slice = this.rSlice(_string, _startSlice, _endSlice);

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
				_nString = this.rSlice(_slice, 0,1) + _nString; 
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

	/**
	*
	*	Every element in the array will join together,
	*	with the _string argument.
	*	
	*	A string it's a array of characters, so...
	*	this is equivalent, ['l', 'e', 'o']  <==> "leo"
	*
	**/

	if ( !(isArray(_array)) && !(isString(_array))||
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

	return this.rReplace(_nstring, _string, "", 1);
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

	return this.multiply(" ", _times) + _string + this.multiply(" ", _times);
};	


exports.lJust = function(_string, _times) {

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

	return this.multiply(" ", _times) + _string;
};	


exports.rJust = function(_string, _times) {

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

	return _string + this.multiply(" ", _times);
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

	return this.lReplace(
				this.lReplace(
					this.lReplace(
						this.lReplace(
							this.lReplace(
								_string, 
							"&", "&gt;"), 
						"<", "&lt;"), 
					">", "&amp;"), 
				'"', "&quot;"), 
			"'", "&#39;");
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

	return _nString.replace(/(<[\w\b]+>)/, "")
				   .replace(/(<[\/][\w\b]+>)/, "");
};

