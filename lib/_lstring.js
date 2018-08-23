var lstring = require('./_string/_lstring');

var isUpper = function(str, func) {
	if(typeof func === 'function') func(lstring.isUpper(str));
};
exports.isUpper = isUpper;


var isLower = function(str, func) {
	if(typeof func === 'function') func(lstring.isLower(str));
};
exports.isLower = isLower;

var isAlpha = function(str, func) {
	if(typeof func === 'function') func(lstring.isAlpha(str));
};
exports.isAlpha = isAlpha;

var isDigit = function(str, func) {
	if(typeof func === 'function') func(lstring.isDigit(str));
};
exports.isDigit = isDigit;

var isAlphanumeric = function(str, func) {
	if(typeof func === 'function') func(lstring.isAlphanumeric(str));
};
exports.isAlphanumeric = isAlphanumeric;

var isEmpty = function(str, func) {
	if(typeof func === 'function') func(lstring.isEmpty(str));
};
exports.isEmpty = isEmpty;

var isSpace = function(str, func) {
	if(typeof func === 'function') func(lstring.isSpace(str));
};
exports.isSpace = isSpace;

var isSubString = function(_string, _subString, func) {
	if(typeof func === 'function') func(lstring.isSubString(_string, _subString));
};
exports.isSubString = isSubString;

var multiply = function(_string, _times, func) {
	if(typeof func === 'function') func(lstring.multiply(_string, _times));
};
exports.multiply = multiply;

var rSlice = function(_string, _start, _end, func) {
	if(typeof func === 'function') func(lstring.rSlice(_string, _start, _end));
};
exports.rSlice = rSlice;

var dummyCount = function(_string, _subString, _startCount, _endCount, func) {
	if(typeof func === 'function') func(lstring.dummyCount(_string, _subString, _startCount, _endCount));
};
exports.dummyCount = dummyCount;

var smartCount = function(_string, _subString, _startCount, _endCount, func){
	if(typeof func === 'function') func(lstring.smartCount(_string, _subString, _startCount, _endCount));
};
exports.smartCount = smartCount;

var capitalize = function(_string, func) {
	if(typeof func === 'function') func(lstring.capitalize(_string));
};
exports.capitalize = capitalize;

var getCharPosition = function(_string, _char, func) {
	if(typeof func === 'function') func(lstring.getCharPosition(_string, _char));
};
exports.getCharPosition = getCharPosition;

var reverse = function(_string, func) {
	if(typeof func === 'function') func(lstring.reverse(_string));
};
exports.reverse = reverse;

var title = function(_string, func) {
	if(typeof func === 'function') func(lstring.title(_string));
};
exports.title = title;

var lSplit = function(_string, _subS, maxsplit, func) {
	if(typeof func === 'function') func(lstring.lSplit(_string, _subS, maxsplit));
};
exports.lSplit = lSplit;

var rSplit = function(_string, _subS, maxsplit, func) {
	if(typeof func === 'function') func(lstring.rSplit(_string, _subS, maxsplit));
};
exports.rSplit = rSplit;

var startsWith = function(_string, _prefix, func) {
	if(typeof func === 'function') func(lstring.startsWith(_string, _prefix));
};
exports.startsWith = startsWith;

var endsWith = function(_string, _prefix, func) {
	if(typeof func === 'function') func(lstring.endsWith(_string, _prefix));
};
exports.endsWith = endsWith;

var swapCase = function(_string, func) {
	if(typeof func === 'function') func(lstring.swapCase(_string));
};
exports.swapCase = swapCase;

var trim = function(_string, func) {
	if(typeof func === 'function') func(lstring.trim(_string));
};
exports.trim = trim;

var trimPrefix = function(_string, _prefix, func) {
	if(typeof func === 'function') func(lstring.trimPrefix(_string, _prefix));
};
exports.trimPrefix = trimPrefix;

var rConCat = function(_string, _newValue, func) {
	if(typeof func === 'function') func(lstring.rConCat(_string, _newValue));
};
exports.rConCat = rConCat;

var lConCat = function(_string, _newValue, func) {
	if(typeof func === 'function') func(lstring.lConCat(_string, _newValue));
};
exports.lConCat = lConCat;

var lReplace = function(_string, _old, _new, maxreplace, func) {
	if(typeof func === 'function') func(lstring.lReplace(_string, _old, _new, maxreplace));
};
exports.lReplace = lReplace;

var rReplace = function(_string, _old, _new, maxreplace, func) {
	if(typeof func === 'function') func(lstring.rReplace(_string, _old, _new, maxreplace));
};
exports.rReplace = rReplace;

var join = function(_string, _array, func) {
	if(typeof func === 'function') func(lstring.join(_string, _array));
};
exports.join = join;

var toCharArray = function(_string, func) {
	if(typeof func === 'function') func(lstring.toCharArray(_string));
};
exports.toCharArray = toCharArray;

var insert = function(_string, _value, _position, func) {
	if(typeof func === 'function') func(lstring.insert(_string, _value, _position));
};
exports.insert = insert;

var remove = function(_string, _value, func) {
	if(typeof func === 'function') func(lstring.remove(_string, _value));
};
exports.remove = remove;

var center = function(_string, _times, _val, func) {
	if(typeof func === 'function') func(lstring.center(_string, _times, _val));
};
exports.center = center;

var lJust = function(_string, _times, _val, func) {
	if(typeof func === 'function') func(lstring.lJust(_string, _times, _val));
};
exports.lJust = lJust;

var rJust = function(_string, _times, _val, func) {
	if(typeof func === 'function') func(lstring.rJust(_string, _times, _val));
};
exports.rJust = rJust;

var ord = function (_s, func) {
	if(typeof func === 'function') func(lstring.ord(_s));
}
exports.ord = ord;

var chr = function(integer, func){
	if(typeof func === 'function') func(lstring.chr(integer));
}
exports.chr = chr;
