#!/usr/bin/env node


// Errors 
// ------------------------------------------------
function NoValueError(message) {                //-
    this.name = "NoValueError";                 //- 
    this.message = (message || "");             //-
}                                               //-
                                                //-
NoValueError.prototype = Error.prototype;       //-
// ------------------------------------------------


exports.multiply = function(_string, _times) {

	/**
	*
	*	This method multiply the string n-times
	*
	**/
	
	var _nString = "";

	if (this.isAlpha(_times) && _times != null)
		throw new TypeError("the second argument need to be a number");

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_times == null)
		_times = -1;

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

	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isDigit(_string) && _string != " ")
		throw new TypeError("this function recive, string or a character, not numbers ");		

	return /^[A-Z]+$/.test(_string);
};


exports.isLower = function(_string) {

	/**
	*
	*	This method test, if a string it is LowerCase
	*
	**/
	
	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isDigit(_string) && _string != " ")
		throw new TypeError("this function recive, string or a character, not numbers ");		

	return /^[a-z]+$/.test(_string);
};


exports.isAlpha = function(_string) {

	/**
	*
	*	This method test, if a string it is Alphabetic
	*
	**/

	if (_string == null)
		throw new NoValueError("the first argument can't be null");	

	if (this.isDigit(_string))
		_string = _string.toString();	

	return /^[a-zA-Z\ ]+$/.test(_string);
};


exports.isDigit = function(_string) {

	/**
	*
	*	This method test, if a string it is a digit
	*
	**/

	if (!isNaN(_string))
		_string = _string.toString();	
	
	if (_string == null)
		throw new NoValueError("this function can't recive null as an argument ");	

	return /^[0-9]+$/.test(_string);
};


exports.isAlphanumeric = function(_string) {

	/**
	*
	*	This method test, if a string it is alphanumeric
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();	
	
	if (_string == null)
		throw new NoValueError("this function can't recive null as an argument ");	
	
	return /^[\w]+$/.test(_string);
};


exports.isEmpty = function(_string) {

	/**
	*
	*	This method test, if a string it is empty
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

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

	if (this.isDigit(_string))
		_string = _string.toString();	
	
	if (_string == null)
		throw new NoValueError("this function can't recive null as an argument ");	

	return /^[\s]$/.test(_string);
};


exports.lslice = function(_string, _start, _end) {

	/**
	*
	* 	This method it's the same javasript's slice
	*
	**/

	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isAlpha(_start))
		throw new TypeError("the second argument need to be a number");

	if (this.isAlpha(_end))
		throw new TypeError("the thrid argument need to be a number");

	if (this.isDigit(_string))
		_string = _string.toString();

	return _string.slice(_start, _end);
};


exports.rslice = function(_string, _start, _end) {

	/**
	*
	* 	This method will slice a string, from the right to left.
	*
	**/

	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isAlpha(_start))
		throw new TypeError("the second argument need to be a number");

	if (this.isAlpha(_end))
		throw new TypeError("the thrid argument need to be a number");

	if (this.isDigit(_string))
		_string = _string.toString();

	var _stringLength = _string.length;

	if (_start > (_stringLength - 1)  &&  _end > _stringLength  )
		return '';
	else{
		
		/**
		*
		* 	With the next two variable, i'll change the initial
		*	Character... 
		*
		*	l e o    to ==>   l e o
		*	0 1 2    to ==>   2 1 0
		*
		**/
		var _nstart = (_stringLength - 1) - _start;
		var _nend = ((_stringLength - 1) - _start) - (_end - _start);
		
		var _nString = "";

		for (var i =_nstart ; i > _nend ; i--)
			_nString = _string[i] + _nString;

		return _nString;
	}
};


exports.getSize = function(_string) {

	/**
	*
	*	This method return the string size.
	*
	**/

	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isDigit(_string))
		_string = _string.toString();

	return _string.length;
};


exports.count = function(_string, _subString, _startSilce, _endSlice) {

	/**
	*
	*	This method will count how many substring,
	*	the string has.
	*
	**/

	if (_string == null)
		throw new NoValueError("the first argument can't be null");

	if (this.isDigit(_string))
		_string = _string.toString();

	if (_subString == null) 
		throw new NoValueError("the second argument can't be null");

	if (this.isDigit(_subString))
		_subString = _subString.toString();

	if (!_startSilce) 
		_startSilce = 0;

	if (!_endSlice)
		_endSlice = this.getSize(_subString);
	
	if (this.isAlpha(_startSilce) && _startSilce != null)
		throw new TypeError("the thrid argument need to be a number");

	if (this.isAlpha(_endSlice) && _endSlice != null)
		throw new TypeError("the fourth argument need to be a number");

	var _endCount = this.getSize(_string);
	var _startCount = _startSilce;
	var count = 0;
	var _slice;

	for (var i = _startCount; i < _endCount; i++) {
		_slice = this.lslice(_string, _startSilce, _endSlice);
		if (_subString == _slice)
			count ++;

		_startSilce++;
		_endSlice++;
	}

	return count;
};


exports.getUpper = function(_string) {

	/**
	*
	*	This method return the string UpperCase.
	*
	**/

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (this.isAlpha(_string)) 
		return _string.toUpperCase();
	else
		throw new TypeError("This method only works with strings, characters");
};


exports.getLower = function(_string) {

	/**
	*
	*	This method return the string LowerCase.
	*
	**/

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (this.isAlpha(_string)) 
		return _string.toLowerCase();
	else
		throw new TypeError("This method only works with strings, characters");
};


exports.capitalize = function(_string) {

	/**
	*
	*	This method return the string capitalized.
	*
	**/

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _stringLower = this.getLower(_string);

	if (this.isAlpha(_string))
		return _stringLower.replace(_stringLower[0], _stringLower[0].toUpperCase());
	else
		throw new TypeError("This method only works with strings, characters");
};


exports.getCharPosition = function(_string, _char) {

	/**
	*
	* 	This method will return an array of character position.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (this.isDigit(_char))
		_char = _char.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (!_char) 
		throw new NoValueError("the second argument can't be null");
		
	position = [];

	if (!_char) 
		return position;

	for (var j = 0; j < this.getSize(_char); j++)
		for (var i = 0; i < this.getSize(_string); i++) 
			if(_string[i] == _char[j])
				position.push(i);

	return position;
};


exports.reverse = function(_string) {

	/**
	*
	*	This method return the string reversed.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _newString = "";

	for (var i = this.getSize(_string); i > 0; i--)
			_newString += _string[i-1];

	return _newString;
};


exports.title = function(_string) {

	/**
	*
	*	This method return the title form of the string.
	*
	**/

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if(this.isAlpha(_string)){
		var _newString = "";
		var _stringLower = this.getLower(_string);

		for (var i = 0; i < this.getSize(_string); i++) {
			if (i == 0)
				_newString += _stringLower[i].toUpperCase();
			else if (_stringLower[i-1] == " ")
				_newString += _stringLower[i].toUpperCase();
			else{
				_newString += _stringLower[i];
			}
		};

		return _newString;
	}
	else
		throw new TypeError("This method only works with strings, characters");
};


exports.lsplit = function (_string, _subS, maxsplit) {

	/**
	*	
	*	
	*
	**/
	
	if (!maxsplit)
		maxsplit = 0;

	if (this.isAlpha(maxsplit) && maxsplit != null)
		throw new TypeError("the thrid argument need to be a number");

	if (this.isDigit(_subS))
		throw new TypeError("The second argument need to be a character");

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (!_subS) 
		_subS = " ";

	var _string_array = [];


	if (this.isSubString(_string, _subS)){
		
		var _nString = "";
		var _subStringLength = _subS.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = 0; i < this.getSize(_string); i++){
			
			_slice = this.lslice(_string, _startSlice, _endSlice);

			if (_subS != _slice)
				_nString += this.lslice(_slice, 0,1);

			else{
				if (_nString) 
					_string_array.push(_nString);
					
				_startSlice = _startSlice + ( _subStringLength - 1) ;
				_endSlice = _endSlice + ( _subStringLength - 1);
				
				_nString = "";
				
				count++;
				if (count == maxsplit)
					_subS = "";
			}

			_startSlice++;
			_endSlice++;
		};

		if(_nString)
			_string_array.push(_nString);
	}
	else
		_string_array.push(_string);

	return _string_array;
};


exports.rsplit = function (_string, _subS, maxsplit) {

	/**
	*
	*	
	*
	**/
	
	if (!maxsplit)
		maxsplit = 0;

	if (this.isAlpha(maxsplit) && maxsplit != null)
		throw new TypeError("the thrid argument need to be a number");

	if (this.isDigit(_subS))
		throw new TypeError("The second argument need to be a character");

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (!_subS) 
		_subS = " ";
	
	var _string_array_copy = [];
	var _string_array = [];

	if (this.isSubString(_string, _subS)) {

		var _nString = "";
		var _subStringLength = _subS.length;
		var _slice;
		var _startSlice = 0;
		var _endSlice = _subStringLength;
		var count = 0;

		for (var i = this.getSize(_string) - 1 ; i >= 0; i--){

			_slice = this.rslice(_string, _startSlice,  _endSlice);

			if (_subS != _slice)
				_nString = this.rslice(_slice, 0, 1) + _nString;
			else{
				if (_nString) 
					_string_array_copy.push(_nString);

				_startSlice = _startSlice + ( _subStringLength - 1) ;
				_endSlice = _endSlice + ( _subStringLength - 1);

				_nString = "";
				
				count++;
				if (count == maxsplit)
					_subS = "";
			}

			_startSlice++;
			_endSlice++;
		};

		if(_nString)
			_string_array_copy.push(_nString);
	}
	else
		_string_array_copy.push(_string);

	for (var i = _string_array_copy.length - 1; i >= 0; i--)
			_string_array.push(_string_array_copy[i]);

	return _string_array;
};


exports.isSubString = function(_string, _subString) {

	/**
	*
	*	This method test, if the substring belong to the string.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (this.isDigit(_subString))
		_subString = _subString.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_subString == null) 
		throw new NoValueError("the second argument can't be null");

	var _startSilce = 0;
	var _endSlice = this.getSize(_subString);
	var _slice;

	for (var i = 0; i < this.getSize(_string); i++) {
		_slice = this.lslice(_string, _startSilce, _endSlice);
		
		if (_slice == _subString)
			return true;

		_startSilce++;
		_endSlice++;
	};

	return false;
};


exports.startsWith = function(_string, _prefix) {
	
	/**
	*
	*	This method test, if the string start with the prefix.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (this.isDigit(_prefix))
		_prefix = _prefix.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_prefix == null) 
		throw new NoValueError("the second argument can't be null");

	var _prefix_len = this.getSize(_prefix);
	var cont = 0;

	for (var i = 0; i < _prefix_len ; i++) {
		if(_string[i] == _prefix[i])
			cont ++;
		else
			break;
	};

	if(cont == _prefix_len)
		return true;
	else
		return false;
};


exports.endsWith = function(_string, _prefix) {

	/**
	*
	*	This method test, if the string end with the prefix.
	*
	**/
	
	if (this.isDigit(_string))
		_string = _string.toString();

	if (this.isDigit(_prefix))
		_prefix = _prefix.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_prefix == null) 
		throw new NoValueError("the second argument can't be null");

	var cont = 0;
	var _prefixLength = this.getSize(_prefix);
	var i = this.getSize(_string);
	var j = _prefixLength;

	while(j > 0){
		j--; i--;
		if(_string[i] == _prefix[j])
			cont++;
	};

	if(cont == _prefixLength)
		return true;
	else
		return false;
};


exports.swapCase = function(_string) {

	/**
	*
	*	
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _nString = "";

	for (var i = 0; i < this.getSize(_string); i++) {
		if (this.isUpper(_string[i]))
			_nString += _string[i].toLowerCase();
		else if (this.isLower(_string[i]))
			_nString += _string[i].toUpperCase();
		else if (this.isSpace(_string[i]))
			_nString += _string[i];
	};

	return _nString;
};


exports.trim = function(_string) {

	/**
	*
	*	This method remove all the spacess from the string	
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _nString = "";
	var _empty = " ";

	for (var i = 0; i < this.getSize(_string); i++)
		if (this.isSpace( _string[i] )) 
			_nString += "";
		else
			_nString += _string[i];

	return _nString;
};


exports.rConCat = function(_string, _newValue) {

	/**
	*
	*	This method concatenate to the right of the string,
	*	a new value.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (!_newValue)
		_newValue = "";

	return _string + _newValue;
};


exports.lConCat = function(_string, _newValue) {

	/**
	*
	*	This method concatenate to the left of the string,
	*	a new value.	
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (!_newValue)
		_newValue = "";

	return  _newValue + _string;
};


exports.lreplace = function(_string, _old, _new, maxreplace) {

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from left to right.
	*
	**/

	if(!maxreplace)
		maxreplace = this.getSize(_string);

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_old == null) 
		throw new NoValueError("this second argument can't be null");

	if (this.isDigit(_old))
		_old = _old.toString();

	if (this.isDigit(_new))
		_new = _new.toString();

	if (this.isAlpha(maxreplace) && maxreplace != null)
		throw new TypeError("the last argument only accept numbers");

	var _nString = "";
	
	if (!_new)
		_new = "";

	if (this.isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = _old.length;
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
				if (count == maxreplace) 
					_old = "";
			}
			else{
				// this sentence will remove duplicated characters
				_nString += this.lslice(_slice, 0,1); 
			}

			_startSlice++;
			_endSlice++;
		};
	}
	else
		_nString = _string;

	return _nString;
};


exports.rreplace = function(_string, _old, _new, maxreplace){

	/**
	*
	*	This method replace an old character for a new character
	*	in a string.. and start searching from right to left.
	*
	**/

	if(!maxreplace)
		maxreplace = this.getSize(_string);

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_old == null) 
		throw new NoValueError("this second argument can't be null");

	if (this.isDigit(_old))
		_old = _old.toString();

	if (this.isDigit(_new))
		_new = _new.toString();

	if (this.isAlpha(maxreplace) && maxreplace != null)
		throw new TypeError("the last argument only accept numbers");

	var _nString = "";
	
	if (!_new)
		_new = "";

	if (this.isSubString(_string, _old) && _old != _new){
		
		var count = 0;
		var _oldLength = _old.length;
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
				if (count == maxreplace) 
					_old = "";
			}
			else{
				// this sentence will remove duplicated characters
				_nString = this.lslice(_slice, 0,1) + _nString; 
			}

			_startSlice++;
			_endSlice++;
		};
	}
	else
		_nString = _string;

	return _nString;
}


exports.center = function(_string, _times) {

	/**
	*
	*	
	*
	**/

	if(!_times)
		_times = 0;

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_times != null && this.isAlpha(_times)) 
		throw new NoValueError("this second argument need to be a number");

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

	if(!_times)
		_times = 0;

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_times != null &&  this.isAlpha(_times)) 
		throw new NoValueError("this second argument need to be a number");

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

	if(!_times)
		_times = 0;

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if (_times != null && this.isAlpha(_times)) 
		throw new NoValueError("this second argument need to be a number");

	var space = " ";
	var value = this.multiply(space, _times);
	return _string + value;
};	


// from here to down, all methods will be, html string's methods

exports.escape = function(_string) {

	/**
	*
	*	
	*
	**/
	
	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _nString = _string;

	_nString = this.lreplace(_nString, "&", "&gt;");
	_nString = this.lreplace(_nString, "<", "&lt;");
	_nString = this.lreplace(_nString, ">", "&amp;");
	_nString = this.lreplace(_nString, '"', "&quot;");
	_nString = this.lreplace(_nString, "'", "&#39;");

	return _nString;
};


exports.slugify = function(_string) {

	/**
	*
	*	This method will add - between every character.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _newString = "";
	var _stringSize = this.getSize(_string);

	for (var i = 0; i < _stringSize; i++) {
		if (i == (_stringSize - 1) ) 
			_newString += _string[i];
		else
			if ( !this.isSpace(_string[i]) ) 
				_newString += _string[i] + "-";
	};

	return _newString;
};


exports.dummyAddTag = function(_string, _tagName) {

	/**
	*
	*	This method will add tags from a string, 
	*	but it is not so efficient.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	if ( this.isDigit(_tagName))
		throw new TypeError("this argument accept only tag's names(string) as an arguments");

	if (!_tagName)
		_tagName = "p";

	var _startTag = "<" + _tagName + ">";
	var _endTag = "</" + _tagName + ">";

	return _startTag + _string + _endTag;
};


exports.dummyRemoveTag = function(_string) {

	/**
	*
	*	This method will remove tags from a string, 
	*	but it is not so efficient.
	*
	**/

	if (this.isDigit(_string))
		_string = _string.toString();

	if (!_string)
		throw new NoValueError("the first argument can't be null");

	var _nString = _string;

	_nString = _nString.replace(/(<[\w]+>)/, "");
	_nString = _nString.replace(/(<[\/][\w]+>)/, "");

	return _nString;
};


/*
exports.smartAddTag = function(_string) {

	var tree = ["<html>", "<head>", "</head>", "<body>", "</body>", "</html>"];
	var headTree = ["<title>", "</title>", "<meta/>", "<style>", "</style>"];
	var bodyTree = ["<header>", "</header>", "<footer>", "</footer>"];
	// still working on it
};


exports.smartRemoveTag = function(_string) {

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