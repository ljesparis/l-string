var util = require("util");
var s    = require("./_string/_lstring");

var isNumber          = util.isNumber;
var isNullOrUndefined = util.isNullOrUndefined;


/**
 *
 *  Parse the passed character.
 *  It will extract numbers from 
 *  the character.
 *
 *  @param {string} simple string.
 *  @return {object}.
 *  @private
 *
 **/
var _parse_char = function(_char) {
    var _charNumber,
        _nchar;
    _nchar = /(^(h\d|[a-z]+))|(([a-z]+\d*)$)/g.exec(_char)[0];
    _charNumber = s.lReplace(_char, _nchar, "");

    if(!_charNumber)
        _charNumber = 1;
    
    return {
        "charNumber": _charNumber,
        "char": _nchar
    };
}
exports._parse_char = _parse_char;


/*
*  Shall find the correct letter position in the string 
*  based on the object that the _parse_char function returns.
*
*  @param {string} simple string.
*  @param {object} object returned from _parse_char function.
*  @return {object}.
*  @private
*/
function _find_letter_position(_string, object){
    var n = 0,
        r;
    for (var i = 0; i < _string.length; i++) {
        if (_string[i] == object.char){
            n++;
            if(n == object.charNumber){
                r = i;
                break;
            }
        }
    }
    return {
        "r": r,
        "n": n
    };
}
exports._find_letter_position = _find_letter_position;