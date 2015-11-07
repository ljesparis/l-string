#!/usr/bin/env node

"use strict";

var util = require("util"),
    isNullOrUndefined = util.isNullOrUndefined,
    isNumber = util.isNumber,
    isArray = util.isArray,
    isString = util.isString;

var utils = require("../utils");


/**
 *
 *	Test, if a string is UpperCase
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isUpper = function(_string) {
	return /^[A-Z]+$/.test(_string);
};
exports.isUpper = isUpper;


/**
 *
 *	Test, if a string it is LowerCase.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isLower = function(_string) {
	return /^[a-z]+$/.test(_string);
};
exports.isLower = isLower;


/**
 *
 *	Test, if a string it is Alphabetic.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isAlpha = function(_string) {
	return /^[a-zA-Z\ ]+$/.test(_string);
};
exports.isAlpha = isAlpha;


/**
 *
 *	Test, if a string it is a digit.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isDigit = function(_string) {
	return /^[0-9]+$/.test(_string);
};
exports.isDigit = isDigit;



/**
 *
 *	Test, if a string it is alphanumeric.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isAlphanumeric = function(_string) {
	return /^[\w]+$/.test(_string);
};
exports.isAlphanumeric = isAlphanumeric;


/**
 *
 *	Test, if a string it is empty.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isEmpty = function(_string) {
	return /^[\s]+$/.test(_string);
};
exports.isEmpty = isEmpty;


/**
 *
 *	Test, if a string it is a space.
 *
 * 	This method only match 1 space;
 *	if you want to match more than 1 space
 *	use the method isEmpty.
 *
 *	@param  {string}  simple string.
 *	@return {boolean}
 *	@public
 *
 **/
var isSpace = function(_string) {
	return /^[\s]$/.test(_string);
};
exports.isSpace = isSpace;


/**
 *
 *	This method test, if the substring belong to the string.
 *
 *	@param {string}  simple string.
 *	@param {string}  substring.
 *	@return {boolean} if substring return true, otherwise return false.
 *	@public
 *
 **/
var isSubString = function(_string, _subString) {
	if (isNullOrUndefined(_subString) ||
		isNullOrUndefined(_string)) 
		return false;

	var re = new RegExp(_subString);
	return re.test(_string);
};
exports.isSubString = isSubString;


/*
 *
 *	This method multiply the string n-times
 *
 *	@param  {string} simple string.
 *	@param  {int}    number of times that you want to repeat the _string variable.
 *	@return {string} new string value.
 *	@public
 *
 **/
var multiply = function(_string, _times) {
	if (isNullOrUndefined(_string)) 
		return "";

	if (isNullOrUndefined(_times) ||
		_times <= 0)
		return _string;

	var _nString = "";
	for (var i = _times; i > 0; i--)
		_nString += _string;

	return _nString;
};
exports.multiply = multiply;


/**
 *
 * 	Slicing a string, from the right to left.
 *
 *	@param {string} simple string.
 *	@param {int} where the slice begins.
 *	@param {int} where slice ends.
 *	@return {string} slice result.
 *	@public
 *
 **/
var rSlice = function(_string, _start, _end) {
	if (isNullOrUndefined(_string) ||
		isAlpha(_start) &&
		!isNullOrUndefined(_start) ||
		isAlpha(_end) &&
		!isNullOrUndefined(_end))
		return "";

	if (isNumber(_string))
		_string = _string.toString();

	if (isNullOrUndefined(_start))
		return _string;

	if (isNullOrUndefined(_end)) 
		_end = _string.length;


	var _stringLength = _string.length,
	/**
	*
	* 	With the next two variables, i'll change the initial
	*	character...
	*
	*	l e o    to ==>   l e o
	*	0 1 2    to ==>   2 1 0
	*
	**/
	_nstart = (_stringLength - 1) - _start,
	_nend = ((_stringLength - 1) - _start) - (_end - _start),
	_nString = "";

	for (var i = _nstart; i > _nend && i != -1; i--)
		_nString = _string[i] + _nString;

	return _nString;
};
exports.rSlice = rSlice;


/**
 *
 *	Count how many substring,
 *	the string has. It is no so effective.
 *
 *	@param {string} simple string.
 *	@param {string} substring that you want to count.
 *	@param {int} where the count begins. (if undefined, will count all substrings).
 *	@param {int} where count ends.
 *	@return {int} count result.
 *	@public
 *
 **/
var dummyCount = function(_string, _subString, _startCount, _endCount) {
	if (isNullOrUndefined(_string) ||
		isNullOrUndefined(_subString) ||
		isAlpha(_startCount) &&
		!isNullOrUndefined(_startCount) ||
		!isNullOrUndefined(_endCount) &&
		isAlpha(_endCount))
		return 0;

	if (_startCount == _endCount &&
		!isNullOrUndefined(_startCount) &&
		!isNullOrUndefined(_endCount))
		return 0;

	if (isSubString(_string, _subString)) {

		if (isNumber(_startCount) ||
			isDigit(_startCount))
			_startCount = parseInt(_startCount);

		if (isNumber(_endCount) ||
			isDigit(_endCount))
			_endCount = parseInt(_endCount);

		if (isNullOrUndefined(_startCount))
			_startCount = 0;

		if (isNullOrUndefined(_endCount))
			_endCount = _string.length;


		var _endSlice = _subString.length > 1 ?
			_subString.length + _startCount :
			_startCount + 1,
			_startSilce = _startCount,
			count = 0,
			_slice;


		for (var i = _startCount; i < _endCount; i++) {

			_slice = _string.slice(_startSilce, _endSlice);

			if (_slice.length < _subString.length)
				break;

			if (_subString == _slice)
				count++;

			_startSilce++;
			_endSlice++;
		}
		
		return count;
	}

	return 0;
};
exports.dummyCount = dummyCount;


/**
 *
 *	Count how many substring,
 *	the string has, but it is
 *	smart, exampel:
 *
 *  	"home home home".smartCount('o', "m2", 3)
 *  	"home home home".smartCount('o', 3, "m2")
 *  	"home home home".smartCount('o', "h", "h3")
 *
 *	@param {string} simple string.
 *	@param {string} substring that you want to count.
 *	@param {int|string} where the count begins. (if undefined, will count all substrings).
 *	@param {int|string} where count ends.
 *	@return {int} count result.
 *	@public
 *
 **/
var smartCount = function(_string, _subString, _startCount, _endCount){
	var _char_startnumber,
		_char_endnumber;

	if(_startCount && !isDigit(_startCount) && !isNumber(_startCount)){
		var c = utils._parse_char(_startCount),
			r = utils._find_letter_position(_string, c);

		if (c.charNumber > r.c) return 0;
		_char_startnumber = r.r;

	}else if(isDigit(_startCount) || isNumber(_startCount)){
		_char_startnumber = _startCount;
	}else {
		_char_startnumber = 0;
	}

	if(_endCount && !isDigit(_endCount) && !isNumber(_endCount)){
		var c = utils._parse_char(_endCount),
			r = utils._find_letter_position(_string, c);

		if (c.charNumber > r.c) return 0;
		_char_endnumber = r.r;

	}else if(isDigit(_endCount) || isNumber(_endCount)){
		_char_endnumber = _endCount;
	}else{
		_char_endnumber = _string.length;
	}

	if(_char_startnumber > _char_endnumber)
		return 0;

	return dummyCount(_string, _subString, _char_startnumber, _char_endnumber);
};
exports.smartCount = smartCount;


/**
 *
 *	Return the string capitalized.
 *
 *	@param {string} simple string.
 *	@return {string} capitalized string.
 *	@public
 *
 **/
var capitalize = function(_string) {
	if (isNullOrUndefined(_string))
		return "";
	
	return lReplace(_string.toLowerCase(),
			    	_string.toLowerCase()[0],
			    	_string.toLowerCase()[0].toUpperCase());

};
exports.capitalize = capitalize;


/**
 *
 * 	Return an array of character position.
 *
 *	@param {string} simple string.
 *	@param {char} simple character, that this function will it find.
 *	@return {int} char position.
 *	@public
 *
 **/
var getCharPosition = function(_string, _char) {
	if (isNullOrUndefined(_char) ||
		isNullOrUndefined(_string))
		return [];

	var position = [];
	for (var j = 0; j < _string.length; j++)
		if (_string[j] == _char)
			position.push(j);

	return position;
};
exports.getCharPosition = getCharPosition;


/**
 *
 *	Return the string reversed.
 *
 *	@param {string} simple string.
 *	@return {string} reversed string.
 *	@public
 *
 **/
var reverse = function(_string) {
	if (isNullOrUndefined(_string))
		return "";

	var _newString = "";

	for (var i = _string.length; i > 0; i--)
		_newString += _string[i - 1];

	return _newString;
};
exports.reverse = reverse;


/**
 *
 *	Return the title form of the string.
 *
 *	@param {string} simple string.
 *	@return {string} simple string.
 *	@public
 *
 **/
var title = function(_string) {
	if (isNullOrUndefined(_string))
		return "";

	var _newString = "",
		_stringLower = _string.toLowerCase();

	for (var i = 0; i < _string.length; i++) {
		if (i == 0) {
			_newString += _stringLower[i].toUpperCase();
		} else if (_stringLower[i - 1] == " ") {
			_newString += _stringLower[i].toUpperCase();
		} else {
			_newString += _stringLower[i];
		}
	}

	return _newString;
};
exports.title = title;


/**
 *
 *	Split a string in many parts, from left to right.
 *
 *	@param {string} simple string.
 *	@param {string}  string's substring.
 *	@param {int} many times , the string is split..
 *	@return {string|array} array string.
 *	@public
 *
 **/
var lSplit = function(_string, _subS, maxsplit) {
	if (isNullOrUndefined(_string))
		return [];

	if (isAlpha(maxsplit) ||
		isNullOrUndefined(maxsplit))
		maxsplit = 0;

	if (isNullOrUndefined(_subS))
		_subS = " ";


	var _string_array = [];

	if (isSubString(_string, _subS)) {

		var _nString = "",
			_slice, _startSlice = 0,
			_endSlice = _subS.length,
			count = 0;

		for (var i = 0; i < _string.length; i++) {

			_slice = _string.slice(_startSlice, _endSlice);

			if (_subS != _slice) {
				_nString += _slice.slice(0, 1);
			} else {
				if (_nString)
					_string_array.push(_nString);

				_startSlice = _startSlice + (_subS.length - 1);
				_endSlice = _endSlice + (_subS.length - 1);

				_nString = "";

				count++;
				if (count == maxsplit)
					_subS = "";
			}

			_startSlice++;
			_endSlice++;
		}

		if (_nString) {
			_string_array.push(_nString);
		}
	} else {
		_string_array.push(_string);
	}

	return _string_array;
};
exports.lSplit = lSplit;


/**
 *
 *	Split a string in many parts, from right to left.
 *
 *	@param {string} simple string.
 *	@param {string}  string's substring.
 *	@param {int} many times , the string is split..
 *	@return {string|array} array string.
 *	@public
 *
 **/
var rSplit = function(_string, _subS, maxsplit) {
	if (isNullOrUndefined(_string))
		return [];

	if (isAlpha(maxsplit) ||
		isNullOrUndefined(maxsplit))
		maxsplit = 0;

	if (isNullOrUndefined(_subS))
		_subS = " ";

	var _string_array_copy = [],
		_string_array = [];

	if (isSubString(_string, _subS)) {

		var _nString = "",
			_slice = "",
			_startSlice = 0,
			_endSlice = _subS.length,
			count = 0;

		for (var i = _string.length - 1; i >= 0; i--) {

			_slice = rSlice(_string, _startSlice, _endSlice);

			if (_startSlice > _string.length)
				break;

			if (_subS != _slice) {
				_nString = rSlice(_slice, 0, 1) + _nString;
			}else {
				if (_nString)
					_string_array_copy.push(_nString);

				_startSlice = _startSlice + (_subS.length - 1);
				_endSlice = _endSlice + (_subS.length - 1);

				_nString = "";

				count++;
				if (count == maxsplit) 
					_subS = "";
			}
			
			_startSlice++;
			_endSlice++;
		}

		if (_nString)
				_string_array_copy.push(_nString);

	} else {
		_string_array_copy.push(_string);
	}

	for (var i = _string_array_copy.length - 1; i >= 0; i--)
		_string_array.push(_string_array_copy[i]);

	return _string_array;
};
exports.rSplit = rSplit;


/**
 *
 *	This method test, if the string start with the prefix.
 *
 *	@param {string} simple string.
 *	@param {string} prefix to test.
 *	@return {boolean} if string startswith prefix, return true, otherwise, return false.
 *	@public
 *
 **/
var startsWith = function(_string, _prefix) {
	if (isNullOrUndefined(_prefix) ||
		isNullOrUndefined(_string))
		return false;
	
	return _string.slice(0, _prefix.length) === _prefix;
};
exports.startsWith = startsWith;


/**
 *
 *	This method test, if the string end with the prefix.
 *
 *	@param {string} simple string.
 *	@param {string} prefix to test.
 *	@return {boolean} if string endswith prefix, return true, otherwise, return false.
 *	@public
 *
 **/
var endsWith = function(_string, _prefix) {
	if (isNullOrUndefined(_string) ||
		isNullOrUndefined(_prefix))
		return false;

	return rSlice(_string, 0, _prefix.length) === _prefix;
};
exports.endsWith = endsWith;


/**
 *
 *	Method that toggle between uppercase and lowercase.
 *
 *	@param {string} simple string.
 *	@return {string} swapped string.
 *	@public
 *
 **/
var swapCase = function(_string) {
	if (isNullOrUndefined(_string))
		return "";

	var _nString = "";

	for (var i = 0; i < _string.length; i++) {
		if (isUpper(_string[i])) {
			_nString += _string[i].toLowerCase();
		} else if (isLower(_string[i])) {
			_nString += _string[i].toUpperCase();
		} else if (isSpace(_string[i])) {
			_nString += _string[i];
		}
	}
		
	return _nString;
};
exports.swapCase = swapCase;


/**
 *
 *	Remove all the spacess from the string.
 *
 *	@param {string} simple string.
 *	@return {string} spaceless string.
 *	@public
 *
 **/
var trim = function(_string) {
	if (isNullOrUndefined(_string))
		return "";
	
	return lReplace(_string, " ");
};
exports.trim = trim;


/**
 *
 *	Remove all the prefix from the string.
 *
 *	@param {string} simple string.
 *	@param {string} prefix that you want to clean.
 *	@return {string} spaceless string.
 *	@public
 *
 **/
var trimPrefix = function(_string, _prefix) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_prefix)) _prefix = "";

	return lReplace(_string, _prefix);
};
exports.trimPrefix = trimPrefix;


/**
 *
 *	Concatenate to the right of the string,
 *	a new value.
 *
 *	@param {string} simple string.
 *	@param {string} new string to concatenate.
 *	@return {string} concatenation between _string and _newValue.
 *	@public
 *
 **/
var rConCat = function(_string, _newValue) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_newValue)) 
		return _string;
	
	return _string + _newValue;
};
exports.rConCat = rConCat;


/**
 *
 *	Concatenate to the right of the string,
 *	a new value.
 *
 *	@param {string} simple string.
 *	@param {string} new string to concatenate.
 *	@return {string} concatenation between _string and _newValue.
 *	@public
 *
 **/
var lConCat = function(_string, _newValue) {
	if (isNullOrUndefined(_string)) 
		return "";

	if (isNullOrUndefined(_newValue)) 
		return _string;

	return _newValue + _string;
};
exports.lConCat = lConCat;


/**
 *
 *	This method replace an old character for a new character
 *	in a string.. and start searching from left to right.
 *	This method offers better performance than the original
 *	javascript's replace method.
 *
 *	@param {string} simple string.
 *	@param {string} old value that you want to replace in the string.
 *	@param {string} new value that you want to set in the string.
 *	@param {int}  number of times you want to replace the _old value.
 *	@return {string} string with replaced characters.
 *	@public
 *
 **/
var lReplace = function(_string, _old, _new, maxreplace) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_old)) 
		return _string;

	if (isAlpha(maxreplace) ||
		isNullOrUndefined(maxreplace))
		maxreplace = _string.length;

	if (isNullOrUndefined(_new))
		_new = "";

	var _nString = "";

	if (isSubString(_string, _old) && _old != _new) {

		var count = 0,
			_slice, _startSlice = 0,
			_endSlice = _old.length

		for (var j = 0; j < _string.length; j++) {

			_slice = _string.slice(_startSlice, _endSlice);

			if (_old == _slice) {
				_nString += _new;

				_startSlice = _startSlice + (_old.length - 1);
				_endSlice = _endSlice + (_old.length - 1);

				count++;
				if (count == maxreplace)
					_old = "";
						
			} else {
				// this sentence will remove duplicated characters
				_nString += _slice.slice(0, 1);
			}

			_startSlice++;
			_endSlice++;
		}
	} else {
		_nString = _string;
	}

	return _nString;
};
exports.lReplace = lReplace;


/**
 *
 *	This method replace an old character for a new character
 *	in a string.. and start searching from right to left.
 *
 *	@param {string} simple string.
 *	@param {string} old value that you want to replace in the string.
 *	@param {string} new value that you want to set in the string.
 *	@param {int}  number of times you want to replace the _old value.
 *	@return {string} string with replaced characters.
 *	@public
 *
 **/
var rReplace = function(_string, _old, _new, maxreplace) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_old))
		return _string;

	if (isAlpha(maxreplace) ||
		isNullOrUndefined(maxreplace))
		maxreplace = _string.length;

	if (isNullOrUndefined(_new))
		_new = "";

	var _nString = "";

	if (isSubString(_string, _old) && _old != _new) {

		var count = 0,
			_slice, _startSlice = 0,
			_endSlice = _old.length;

		for (var j = 0; j < _string.length; j++) {

			_slice = rSlice(_string, _startSlice, _endSlice);

			if (isSubString(_slice, "undefined"))
				break;

			if (_old == _slice) {
				_nString = _new + _nString;

				_startSlice = _startSlice + (_old.length - 1);
				_endSlice = _endSlice + (_old.length - 1);

				count++;
				if (count == maxreplace)
					_old = "";

			} else {
				// this sentence will remove duplicated characters
				_nString = rSlice(_slice, 0, 1) + _nString;
			}

			_startSlice++;
			_endSlice++;
		}
	} else {
		_nString = _string;
	}

	return _nString;
};
exports.rReplace = rReplace;


/**
 *
 *	Every element in the array will join together,
 *	with the _string argument.
 *
 *	A string it's a array of characters, so...
 *	this is equivalent, ['l', 'e', 'o']  <==> "leo"
 *	if _string = "".
 *
 *	@param {string} simple string.
 *	@param {array}  array you want to unite with.
 *	@return {string} united array together.
 *	@public
 *
 **/
var join = function(_string, _array) {
	if (!(isArray(_array)) && !(isString(_array)) ||
		isNullOrUndefined(_array) ||
		isNullOrUndefined(_string)) 
		return '';

	var _nstring = "";

	for (var i = 0; i < _array.length; i++) {
		if (isNumber(_array[i]) || isDigit(_array[i]))
			_array[i] = _array[i].toString();

		if (!isSpace(_array[i]))
			_nstring += _array[i] + _string;
	}
	
	return rReplace(_nstring, _string, "", 1);
};
exports.join = join;


/**
 *
 *	this function convert a simple string, to a char array.
 *
 *	@param {string} simple string.
 *	@return {array|string} set of all elements of the string.
 *	@public
 *
 **/
var toCharArray = function(_string) {
	if (isNullOrUndefined(_string))
		return "";

	var _array = [];

	for (var i = 0; i < _string.length; i++)
		_array.push(_string[i]);

	return _array;
};
exports.toCharArray = toCharArray;


/**
 *
 *	this method will add n-values to the string.
 *
 *	@param {string} simple string.
 *	@param {string} value that you want to insert.
 *	@param {int}  position where you want to insert the value.
 *	@return {string} new string.
 *	@public
 *
 **/
var insert = function(_string, _value, _position) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_value))
		return _string;

	if (isNullOrUndefined(_position))
		_position = _string.length - 1;

	if (_position == _string.length)
		return _string + _value;

	var _array = toCharArray(_string),
		_nString = "";

	for (var i = 0; i < _string.length; i++) {
		if (i == _position) {
			_array[i] = _value;
			for (var j = 1; j <= _string.slice(i).length; j++)
				_array[i + j] = _string.slice(i)[j - 1];
			break;
		}
	}

	for (var i = 0; i < _array.length; i++)
		_nString += _array[i];

	return _nString;
};
exports.insert = insert;


/**
 *
 *	This method will delete n-characters
 *	that you want.
 *
 *
 *	@param {string}  simple string.
 *	@param {string}  value that you want to remove.
 *	@return {string} _string without _value.
 *	@public
 *
 **/
var remove = function(_string, _value) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_value)) 
		return _string;
	
	return lReplace(_string, _value, "");
};
exports.remove = remove;


/**
 *
 *	justify the string to the center.
 *
 *	@param {string}  simple string.
 *	@param {int} number of times you want to justify the string to the center.
 *	@param {string} value to use to justify the string to the center.
 *	@return {string} string justified.
 *	@public
 *
 **/
var center = function(_string, _times, _val) {
	if (isNullOrUndefined(_string))
		return "";

	if (isNullOrUndefined(_times) ||
		isAlpha(_times))
		_times = 0;

	if (isNullOrUndefined(_val))
		_val = " ";

	return multiply(_val, _times) + _string + multiply(_val, _times);
};
exports.center = center;


/**
 *
 *	justify the string to the left.
 *
 *	@param {string}  simple string.
 *	@param {int} number of times you want to justify the string to the left.
 *	@param {string} value to use to justify the string to the left.
 *	@return {string} string justified.
 *	@public
 *
 **/
var lJust = function(_string, _times, _val) {
	if (isNullOrUndefined(_string)) 
		return "";

	if (isNullOrUndefined(_times) ||
		isAlpha(_times))
		_times = 0;

	if (isNullOrUndefined(_val))
		_val = " ";

	return multiply(_val, _times) + _string;
};
exports.lJust = lJust;


/**
 *
 *	justify the string to the right.
 *
 *	@param {string}  simple string.
 *	@param {int} number of times you want to justify the string to the right.
 *	@param {string} value to use to justify the string to the right.
 *	@return {string} string justified.
 *	@public
 *
 **/
var rJust = function(_string, _times, _val) {
	if (isNullOrUndefined(_string)) 
		return "";

	if (isNullOrUndefined(_times) ||
		isAlpha(_times))
		_times = 0;

	if (isNullOrUndefined(_val))
		_val = " ";

	return _string + multiply(_val, _times);
};
exports.rJust = rJust;
