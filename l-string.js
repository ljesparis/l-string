#!/usr/bin/env node

"use strict";

var string = require("./lib/string");
module['exports'] = string;
require('./lib/extendStringProperty')();