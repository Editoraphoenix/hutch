var CRUD = (function () {
	// Book action to basic CRUD
	var _ = function () {};

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

			if ( settings ) {
				
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