var util = require("util"),
    isNumber = util.isNumber,
    isNullOrUndefined = util.isNullOrUndefined;

var s = require("./_string/_lstring");

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