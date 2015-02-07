DogEditView = Backbone.View.extend({

	template: _.template($('#dog-edit-template').html()),

	events: {
		'click .submit': 'submit',
		'click .cancel': 'cancel'
	},

	saveModel: function () {
		this.model.save({
			fullname: $('.fullname').val(),
			age: $('.age').val(),
			fleas: $('.fleas').val()
		});
	},

	submit: function (event) {
		if (this.model) {
			this.saveModel();
		} else {
			var dog = new Dog();
			this.model = dog;
			dogs.add(dog);
			this.saveModel();
		}
		event.preventDefault();
	},

	cancel: function (event) {
		router.navigate('dogs', {trigger: true});
		event.preventDefault();
	},

	render: function () {
		if (this.model) {
			this.$el.html(this.template( { adj: 'Edit', verb: 'Update', dog: this.model.toJSON() } ));		
		} else {
			this.$el.html(this.template( { adj: 'New', verb: 'Create', dog: {fullname: 'unknown', age: 0, fleas: false } } ));
		}
		return this.el;
	}

});