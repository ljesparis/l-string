module.exports = function(extendStringProperty) {
	if(typeof extendStringProperty === 'boolean') {
		if(extendStringProperty) {
			return require('./lib/extendStringProperty')();
		}
	}

	return require('./lib/_lstring');
}
