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
			var output = false;

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

		insert: function ( settings ) {
			// Create a new item
			var output = false;

			settings = settings || {};

			if ( settings && 'collection' in settings ) {
				underscore.map( memory, function ( item ) {
					var keys = underscore.keys( item );

					for ( var key in keys ) {
						if ( settings['collection'] === keys[ key ] ) {
								var collection = item[ settings['collection'] ];

								if ( 'data' in settings && settings['data'] ) {
									collection.push( settings['data'] );
									output = true;
								}
						}
					}
				});
			}

			return output;
		},

		edit: function () {
			// Edit a item
		},

		remove: function ( settings ) {
			// List data in memory
			var output = false;

			settings = settings || {};

			if ( settings ) {
				var result = underscore.map( memory, function ( collections ) {
					if ( underscore.has( collections, settings['collection'] ) ) {
						return underscore.map( collections, function ( collection ) {
							for ( var filter in settings['filter'] ) {
								if ( underscore.has( collection, filter ) && collection[ filter ] === settings['filter'][ filter ] ) {
									return collections;
								}
							}
						});
					}
				});

				if ( !underscore.isEmpty( underscore.compact( result ) ) ) {
					output = result;
				}
			}

			return output;		
		},
	};

	return new ( _ );
} ());

exports.new = CRUD;