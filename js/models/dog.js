Dog = Backbone.Model.extend({

	initialize: function () {
		this.on('sync', function() {
			router.navigate('dogs', {trigger: true});
		});
	}
});

Dogs = Backbone.Collection.extend({

	model: Dog,

	url: 'http://fe-backbone-rails-api-example.herokuapp.com/dogs'
});