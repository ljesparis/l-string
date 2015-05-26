#!/usr/bin/env node
 
"use strict";

var util = require("util"),
	isNullOrUndefined = util.isNullOrUndefined,
	isNumber = util.isNumber,
	isArray = util.isArray,
	isString = util.isString;


var multiply = function(_string, _times) {

	/*
	*
	*	This method multiply the string n-times
	*
	**/
	var _nString = "";
	
	if (isNullOrUndefined(_string)){
		return "";
	}

	if (isNullOrUndefined(_times) || _times <= 0){
		return _string;
	}

	while(_times > 0){
		_nString += _string;
		_times --;
	}

	return _nString;
};	
exports.multiply = multiply;


var isUpper = function(_string) {

	/**
	*
	*	This method test, if a string it is UpperCase
	*
	**/

	return /^[A-Z]+$/.test(_string);
};
exports.isUpper = isUpper;


var isLower = function(_string) {

	/**
	*
	*	This method test, if a string it is LowerCase
	*
	**/	

	return /^[a-z]+$/.test(_string);
};
exports.isLower = isLower; 


var isAlpha = function(_string) {

	/**
	*
	*	This method test, if a string it is Alphabetic
	*
	**/

	return /^[a-zA-Z\ ]+$/.test(_string);
};
exports.isAlpha = isAlpha;


var isDigit = function(_string) {

	/**
	*
	*	This method test, if a string it is a digit
	*
	**/	

	return /^[0-9]+$/.test(_string);
};
exports.isDigit = isDigit;


var isAlphanumeric = function(_string) {

	/**
	*
	*	This method test, if a string it is alphanumeric
	*
	**/
	
	return /^[\w]+$/.test(_string);
};
exports.isAlphanumeric = isAlphanumeric;


var isEmpty = function(_string) {

	/**
	*
	*	This method test, if a string it is empty
	*
	**/

	return /^[\s]+$/.test(_string);
};
exports.isEmpty = isEmpty;


var isSpace = function(_string) {

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
exports.isSpace = isSpace;


var rSlice = function(_string, _start, _end) {

	/**
	*
	* 	This method will slice a string, from the right to left.
	*
	**/

	if (isNullOrUndefined(_string) || 
		isAlpha(_start) && !isNullOrUndefined(_start) ||
		isAlpha(_end) && !isNullOrUndefined(_end) ){
		return "";
	}
	
	if(isNumber(_string)){
		_string = _string.toString();
	}

	if (isNullOrUndefined(_start)){
		return _string;
	}

	if (isNullOrUndefined(_end)){
		_end = _string.length;
	}
	
	var _stringLength = _string.length;

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
}
exports.rSlice = rSlice;


var dummyCount = function(_string, _subString, _startCount, _endCount) {

	/**
	*
	*	This method will count how many substring,
	*	the string has. It is no so effective.
	*
	**/
	if(isNumber(_startCount) || isDigit(_startCount)){
		_startCount = parseInt(_startCount); 
	}else if (isNumber(_endCount) || isDigit(_endCount)){
		_endCount = parseInt(_endCount);
	}

	if (isNullOrUndefined(_string) || isNullOrUndefined(_subString) ||
		isAlpha(_startCount) &&  !isNullOrUndefined(_startCount) || 
		!isNullOrUndefined(_endCount) && isAlpha(_endCount)){
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
		_endCount = _string.length;
	}

	var _subStringLength = _subString.length;
	var _endSlice = _subStringLength > 1? _subStringLength + _startCount : _startCount + 1;
	var _startSilce = _startCount;
	var count = 0;
	var _slice;
	var j = 0;

	for (var i = _startCount; i < _endCount; i++) {
		
		_slice = _string.slice(_startSilce, _endSlice);

		if (_subString == _slice){
			count ++;
		}

		var _arraySlice = getCharPosition( _string, _slice[ _slice.length - 1] );
		var _sizeArray = _arraySlice.length;

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
exports.dummyCount = dummyCount;


var capitalize = function(_string) {

	/**
	*
	*	This method return the string capitalized.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return lReplace(_string.toLowerCase(), 
					_string.toLowerCase()[0],
					_string.toLowerCase()[0].toUpperCase());
};
exports.capitalize = capitalize;


var getCharPosition = function(_string, _char) {

	/**
	*
	* 	This method will return an array of character position.
	*
	**/
		
	var position = [];

	if (isNullOrUndefined(_char) || isNullOrUndefined(_string)) {
		return position;
	}

	for (var j = 0; j < _char.length; j++){
		for (var i = 0; i < _string.length; i++){
			if(_string[i] == _char[j]){
				position.push(i);
			}
		} 
	}

	return position;
};
exports.getCharPosition = getCharPosition;


var reverse = function(_string) {

	/**
	*
	*	This method return the string reversed.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _newString = "";

	for (var i = _string.length; i > 0; i--){
		_newString += _string[i-1];
	}

	return _newString;
};
exports.reverse = reverse;


var title = function(_string) {

	/**
	*
	*	This method return the title form of the string.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _newString = "";
	var _stringLower = _string.toLowerCase();

	for (var i = 0; i < _string.length; i++) {
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
exports.title = title;


var lSplit = function (_string, _subS, maxsplit) {

	/**
	*	
	*	
	*
	**/
	
	if (isAlpha(maxsplit) || isNullOrUndefined(maxsplit)){
		maxsplit = 0;
	}

	if (isNullOrUndefined(_string)){
		return [];
	}

	if (isNullOrUndefined(_subS)) {
		_subS = " ";
	}

	var _string_array = [];


	if (isSubString(_string, _subS)){
		
		var _nString = "";
		var _subStringLength = _subS.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = 0; i < _string.length; i++){
			
			_slice = _string.slice(_startSlice, _endSlice);

			if (_subS != _slice){
				_nString += _slice.slice(0,1);
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
exports.lSplit = lSplit;


var rSplit = function (_string, _subS, maxsplit) {

	/**
	*
	*	
	*
	**/

	if (isAlpha(maxsplit) || isNullOrUndefined(maxsplit)){
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

	if (isSubString(_string, _subS)) {

		var _nString = "";
		var _subStringLength = _subS.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = _string.length - 1 ; i >= 0; i--){

			_slice = rSlice(_string, _startSlice,  _endSlice);

			if (_subS != _slice){
				_nString = rSlice(_slice, 0, 1) + _nString;
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

	for (var i = _string_array_copy.length - 1; i >= 0; i--){
		_string_array.push(_string_array_copy[i]);
	}

	return _string_array;
};
exports.rSplit = rSplit;


var isSubString = function(_string, _subString) {

	/**
	*
	*	This method test, if the substring belong to the string.
	*
	**/

	if (isNullOrUndefined(_subString) || isNullOrUndefined(_string)){
		return false;
	}

	var _startSilce = 0;
	var _endSlice = _subString.length;
	var _slice;

	for (var i = 0; i < _string.length; i++) {
		_slice = _string.slice(_startSilce, _endSlice);
		
		if (_slice == _subString){
			return true;
		}

		_startSilce++;
		_endSlice++;
	}

	return false;
};
exports.isSubString = isSubString;


var startsWith = function(_string, _prefix) {
	
	/**
	*
	*	This method test, if the string start with the prefix.
	*
	**/

	if (isNullOrUndefined(_prefix) || isNullOrUndefined(_string)) {
		return false;
	}

	var _prefix_len = _prefix.length;
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
exports.startsWith = startsWith;


var endsWith = function(_string, _prefix) {

	/**
	*
	*	This method test, if the string end with the prefix.
	*
	**/

	if (isNullOrUndefined(_string) || isNullOrUndefined(_prefix)){
		return false;
	}

	var cont = 0;
	var _prefixLength = _prefix.length;
	var i = _string.length;
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
exports.endsWith = endsWith;


var swapCase = function(_string) {

	/**
	*
	*	
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _nString = "";

	for (var i = 0; i < _string.length; i++) {
		if (isUpper(_string[i])){
			_nString += _string[i].toLowerCase();
		}else if (isLower(_string[i])){
			_nString += _string[i].toUpperCase();
		}else if (isSpace(_string[i])){
			_nString += _string[i];
		}
	}

	return _nString;
};
exports.swapCase = swapCase;


var trim = function(_string) {

	/**
	*
	*	This method remove all the spacess from the string	
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return lReplace(_string, " ");
};
exports.trim = trim;


var rConCat = function(_string, _newValue) {

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
exports.rConCat = rConCat;


var lConCat = function(_string, _newValue) {

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
exports.lConCat = lConCat;


var lReplace = function(_string, _old, _new, maxreplace) {

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from left to right.
	*
	**/
	if (isNullOrUndefined(_string)){
		return "";
	}

	if(isAlpha(maxreplace) || isNullOrUndefined(maxreplace)){
		console.log(typeof _string)
		maxreplace = _string.length;
	}

	if (isNullOrUndefined(_old)){
		return _string;
	}
	
	if (isNullOrUndefined(_new)){
		_new = "";
	}

	var _nString = "";

	if (isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = _old.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _oldLength;

		for (var j = 0; j < _string.length; j++) {
			
			_slice = _string.slice(_startSlice, _endSlice);

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
				_nString += _slice.slice(0,1); 
			}

			_startSlice++;
			_endSlice++;
		}
	}else{
		_nString = _string;
	}

	return _nString;
};
exports.lReplace = lReplace;


var rReplace = function(_string, _old, _new, maxreplace){

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from right to left.
	*
	**/
	if (isNullOrUndefined(_string)){
		return "";
	}

	if(isAlpha(maxreplace) || isNullOrUndefined(maxreplace)){
		maxreplace = _string.length;
	}

	if (isNullOrUndefined(_old)){
		return _string;
	}

	if (isNullOrUndefined(_new)){
		_new = "";
	}

	var _nString = "";

	if (isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = _old.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _oldLength;

		for (var j = 0; j < _string.length; j++) {
			
			_slice = rSlice(_string, _startSlice, _endSlice);

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
				_nString = rSlice(_slice, 0,1) + _nString; 
			}

			_startSlice++;
			_endSlice++;
		}
	}else{
		return _string;
	}

	return _nString;
}
exports.rReplace = rReplace;


var join = function (_string, _array) {

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

	for (var i = 0; i < _array.length; i++) {
		if(isNumber(_array[i]) || isDigit(_array[i])){
			_array[i] = _array[i].toString(); 
		}
		_nstring += _array[i] + _string;
	}

	return rReplace(_nstring, _string, "", 1);
}
exports.join = join;


var toCharArray = function(_string) {

	/**
	*
	*	
	*	
	*
	**/

	if(isNullOrUndefined(_string)){
		return "";
	}

	var _array = [];

	for (var i = 0; i < _string.length; i++) {
		_array.push(_string[i]);
	}

	return _array;
}
exports.toCharArray = toCharArray;


var insert = function(_string, _value, _position) {

	/**
	*
	*	this method will add n-values to the string.	
	*
	**/

	if(isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_value)){
		return _string;
	}

	if(isNullOrUndefined(_position)){
		_position = _string.length - 1;
	}

	if(_position == _string.length){
		return _string + _value;
	}else if (i > _string.length){
		return _string;
	}

	var _array = toCharArray(_string);
	var _nString = "";

	for (var i = 0; i < _string.length ;i++) {
		if(i == _position){
			_array[i] = _value;
			for (var j = 1; j <= _string.slice(i).length; j++) {
				_array[i+j] = _string.slice(i)[j-1];
			}
			break;
		}
	}

	for (var i = 0; i < _array.length; i++) {
		_nString += _array[i];
	}

	return _nString;

}
exports.insert = insert;


var remove = function(_string, _value) {

	/**
	*
	*	This method will delete n-characters
	*	that you want.
	*
	*
	**/
	
	if(isNullOrUndefined(_string)){
		return "";
	}
	if(isNullOrUndefined(_value)){
		return _string;
	}

	return lReplace(_string, _value, "");
}
exports.remove = remove;


var center = function(_string, _times, _val) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_val)){
		_val = " ";
	}

	return multiply(_val, _times) + _string + multiply(_val, _times);
};	
exports.center = center;


var lJust = function(_string, _times, _val) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_val)){
		_val = " ";
	}

	return multiply(_val, _times) + _string;
};	
exports.lJust = lJust;


var rJust = function(_string, _times, _val) {

	/**
	*
	*	
	*
	**/

	if(isNullOrUndefined(_times) || isAlpha(_times)){
		_times = 0;
	}

	if (isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_val)){
		_val = " ";
	}

	return _string + multiply(_val, _times);
};	
exports.rJust = rJust;


// from here to down, all methods will be, html string's methods

var escape = function(_string) {

	/**
	*
	*	This method help to avoid XSS attacks.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	return lReplace(
				lReplace(
					lReplace(
						lReplace(
							lReplace(
								_string, 
							"&", "&gt;"), 
						"<", "&lt;"), 
					">", "&amp;"), 
				'"', "&quot;"), 
			"'", "&#39;");
};
exports.escape = escape;


var slugify = function(_string) {

	/**
	*
	*	This method will add - between every character.
	*
	**/

	if (isNullOrUndefined(_string)){
		return "";
	}

	var _array = [];

	for (var i = 0; i < _string.length; i++) {
		if ( !isSpace(_string[i]) ) {
			_array.push(_string[i]);
		}
	}

	return join("-", _array);
};
exports.slugify = slugify;


var dummyAddTag = function(_string, _tagName) {

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
	var _ = "";

	if(_tagName == "meta" || _tagName == "img"){
		return lConCat(_string, _startTag + _); 
	}else if(_tagName == "DOCTYPE" || isSubString(_tagName, "DOCTYPE")){
		_ = "!";
		if (isSubString(_tagName, "html" )){
			return insert(lConCat(_string, _startTag ), _, 1);
		}else{
			return insert(lConCat(_string, insert(_startTag, " html") ), _, 1);
		}
	}

	return rConCat(lConCat(_string, _startTag), _endTag);
};
exports.dummyAddTag = dummyAddTag;


var removeTag = function(_string) {

	/**
	*
	*	This method will remove tags from a string.
	*
	*
	**/

	if (isNullOrUndefined(_string))
		return "";

	return _string.replace(/(<[\w\b\/]+>)+/, "")
				  .replace(/(<[\/\w\b]+>)+/, "")
				  .replace(/<!DOCTYPE[^>[]*(\[[^]]*\])?>/, "");
};
exports.removeTag = removeTag;


var smartAddTag = function(_string, _tag_s) {

	/**
	*
	*	This function add tags to your string.
	*	This function recieve a tag or an array of tags.
	*
	**/

	if(isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_tag_s)){
		return _string;
	}

	if(!isArray(_tag_s)){
		return dummyAddTag(_string, _tag_s);
	}else{

		for (var i = _tag_s.length -1; i >= 0 ; i--) {
			_string = dummyAddTag(_string, _tag_s[i]);
		}

		return _string;
	}
}
exports.smartAddTag = smartAddTag;


var add2Tag = function (_string, _name, _tag2add, _type2add){

	var position = getCharPosition(_string, ">");
	var char_;
	var charPosition;
	var stop;

	if(isAlphanumeric(_tag2add) && 
	   (isNumber(_tag2add[0]) || isDigit(_tag2add[0])) ){

		stop = _tag2add[0];
		_tag2add = remove(_tag2add, _tag2add[0]);

	}else if(isAlphanumeric(_tag2add) && 
			(isNumber(_tag2add[ _tag2add.length -1 ] ) || 
			 isDigit(_tag2add[_tag2add.length -1])) ){

		stop = _tag2add[ _tag2add.length -1];
		_tag2add = remove(_tag2add, _tag2add[_tag2add.length -1]);
	}else{
		stop = 1;
	}

	if(isSubString(_string, "!DOCTYPE html") && _tag2add == "html"){
		stop = parseInt(stop) + 1;
	}

	if(position.length >= 3){
		if(isSubString(_string, _tag2add)){

			char_ = _tag2add[_tag2add.length - 1];
			charPosition = getCharPosition(_string, char_);

			if( (charPosition.length / 2) < stop && 
				(charPosition.length / 2) > 1 ){
				return _string;
			}

			if(charPosition.length >= 2){

				for(var i = 0; i < charPosition.length; i++){
					if(_string[charPosition[i] + 1] == ">"){
						position = charPosition[i] + 1;
						if(stop == (i + 1)){
							break;
						}
					}
				}
			}else{
				if(_string[charPosition[0] + 1] == ">"){
						position = charPosition[0] + 1;
				}
			}
		}else{
			return _string;
		}
	}else{
		if(isSubString(_string, _tag2add) && 
		   ( position.length == 1 && stop == 1) || 
			 (stop == 1 && position.length == 2) ){
			
			position = position[0];
		
		}else{
			return _string;
		}
	}

	return insert(_string, 
			      " "+_type2add+"='" + _name + "'", 
			      position);
}


var add2TagClassName = function(_string, _classname, _tag2addclassname){

	/**
	*
	*	This method will add a class name to a tag.
	*
	**/

	if(isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_classname) || isNullOrUndefined(_tag2addclassname)){
		return _string;
	}

	return add2Tag(_string, _classname, _tag2addclassname, "class");
}
exports.add2TagClassName = add2TagClassName;


var add2TagIdName = function(_string, _idname, _tag2addidname){

	/**
	*
	*	This method will add a id name to a tag.
	*
	**/

	if(isNullOrUndefined(_string)){
		return "";
	}

	if(isNullOrUndefined(_idname) || isNullOrUndefined(_tag2addidname)){
		return _string;
	}

	return add2Tag(_string, _idname, _tag2addidname, "id");
}
exports.add2TagIdName = add2TagIdName;