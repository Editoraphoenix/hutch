// CRUD test
var vows = require('vows'),
	assert = require('assert'),
	crud = require('../action/crud').new;

vows.describe('CRUD').addBatch({
	'Crud set memory': {
		topic: crud.memory.set([{id: 1, title: 'Test', author: 'test'}]),

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
		topic: crud.memory.set([{id: 1, title: 'Test', author: 'test'}]),

        'get memory with content': function ( topic ) {
            assert.deepEqual( crud.memory.get(), [{id: 1, title: 'Test', author: 'test'}] );
        },
    }
}).run();
