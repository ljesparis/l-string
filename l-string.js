#!/usr/bin/env node

var string = require("./lib/string");
module['exports'] = string;
require('./lib/extendStringProperty')();