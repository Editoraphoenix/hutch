var CRUD = (function () {
	// Book action to basic CRUD
	var _ = function () {};

	var memory = [];

	_.prototype = {
		inherit: function () {
			// Create a new book object
			return new ( _ );
		},

		memory: function ( data ) {
			var output = this;

			data = data || [];

			if ( data ) {
				memory = data;
			}

			return output;
		},

		list: function () {

		},

		insert: function () {
			// Create a new book
		},

		edit: function () {

		},

		remove: function () {

		},
	};

	return new ( _ );
} ());

exports.new = CRUD;