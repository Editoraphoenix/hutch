// CRUD test
var vows = require('vows'),
	assert = require('assert'),
	crud = require('../action/crud').new;

vows.describe('CRUD').addBatch({
	'Crud set memory': {
		topic: crud.memory.set([{book: []}]),

		'set memory with content': function ( topic ) {
			assert.equal( topic, true );
		},
	},

	'Crud set memory': {
		topic: crud.memory.set(),

		'set memory with empty content': function ( topic ) {
			assert.equal( topic, false );
		},
	},

    'Crud get memory': {
		topic: crud.memory.set([{book: []}]),

        'get memory with content': function ( topic ) {
            assert.deepEqual( crud.memory.get(), [{book: []}] );
        },
    },

    'Crud insert data in the memory': {
        topic: crud.memory.set([{book: []}]),

        'insert data': function ( topic ) {
            assert.equal( crud.insert({collection: 'book', data: {id: 1, title: 'Javascript goodparts'}}), true );
        },
    },

    'Crud remove item of memory': {
        topic: crud.memory.set([{book: []}]),

        'remove data': function ( topic ) {
            assert.equal( crud.remove({collection: 'book', filter: {id: 1}}), true );    
        },
    }
}).run();
