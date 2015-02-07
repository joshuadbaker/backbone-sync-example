Router = Backbone.Router.extend({

	routes: {
		'dogs/new': 'new',       // #dogs/new
		'dogs/:id/edit': 'edit', // #dogs/1/edit
		'dogs/:id': 'show',      // #dogs/1
		'dogs': 'index',         // #dogs
		'': 'index'              // #
	},

	before: function (callback) {
		if (dogs.models.length) {
			callback();
		} else {
			$.when(dogs.fetch()).then(function () {
				callback();
			});
		}
	},

	displayView: function (view) {
		if (this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		$('main').html(this.currentView.render());
	},

	new: function () {
		var self = this;
		this.before(function () {
			self.displayView(new DogEditView());
		});
	},

	edit: function (id) {
		var self = this;
		this.before(function () {
			var dog = dogs.get(id);
			dog.editView = new DogEditView({model: dog});
			self.displayView(dog.editView);
		});
	},

	show: function (id) {
		var self = this;
		this.before(function () {
			var dog = dogs.get(id);
			dog.view = new DogShowView({model: dog});
			self.displayView(dog.view);
		});

	},

	index: function () {
		var self = this;
		this.before(function () {
			dogs.view = new DogsIndexView({collection: dogs });
			self.displayView(dogs.view);
		});

	}

});