const karmaCoreConfig = require( '../elementor/karma.conf' );

module.exports = function( config ) {
	karmaCoreConfig( config );

	config.basePath = __dirname + '/../elementor/';

	Object.entries( config.files ).some( ( [ key, path ] ) => {
		if ( 'assets/js/qunit-tests.js' === path ) {
			config.files[ key ] = __dirname + '/' + path;
			return true;
		}
		return false;
	} );
};
