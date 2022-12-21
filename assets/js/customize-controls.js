( function( api ) {

	// Extends our custom "industrial-lite" section.
	api.sectionConstructor['industrial-lite'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );