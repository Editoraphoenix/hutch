var CRUD = (function () {
	// Book action to basic CRUD
	var _ = function () {};

	var underscore = require('underscore');
	var memory = null;

	_.prototype = {
		inherit: function () {
			// Create a new book object
			return new ( _ );
		},

		memory: {
			set: function ( data ) {
				var output = false;

				data = data || [];

				if ( memory === null && data ) {
					memory = data;

					output = true;
				}

				return output;
			},

			get: function () {
				return memory;
			},
		},

		list: function ( settings ) {
			// List data in memory
			var output = [];

			settings = settings || {};

			if ( settings && 'collection' in settings ) {
				underscore.map( memory, function ( item ) {
					var keys = underscore.keys( item );

					for ( var key in keys ) {
						if ( settings['collection'] === keys[ key ] ) {
							if ( 'filter' in settings ) {
								var collection = item[ settings['collection'] ],
									result = {};

								for ( var field in collection ) {
									var line = collection[ field ];

									for ( var fieldName in line ) {
										for ( var filterID in settings['filter'] ) {
											var filterName = settings['filter'][ filterID ]
											
											if ( fieldName === filterName ) {
												result[ fieldName ] = line[ fieldName ];
											}
										}
									}
								}

								output = result;
							} else {
								output = item[ settings['collection'] ];
							}
						}
					}
				});
			}

			return output;
		},

		insert: function () {
			// Create a new item
		},

		edit: function () {
			// Edit a item
		},

		remove: function () {
			// Remove item
		},
	};

	return new ( _ );
} ());

exports.new = CRUD;