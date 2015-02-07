DogShowView = Backbone.View.extend({

	template: _.template($('#dog-show-template').html()),

	events: {
		'click .destroy': 'destroy'
	},

	destroy: function (event) {
		if (window.confirm("Do you really want to destory this dog?")) {
			this.model.destroy();
		}
		event.preventDefault();
	},

	render: function () {
		this.$el.html(this.template({ dog: this.model.toJSON() }));
		return this.el;
	}
});