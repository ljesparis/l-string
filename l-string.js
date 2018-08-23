module.exports = function(extendStringProperty) {
	if(typeof extendStringProperty === 'boolean') {
		if(extendStringProperty) {
			return require('./lib/_property/extendStringProperty')();
		}
	}

	return require('./lib/_lstring');
}
