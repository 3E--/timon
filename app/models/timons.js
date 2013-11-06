exports.definition = {
	config: {
	    	adapter: {
			type: "mongodb",
			collection_name: "timons",
			base_url: "http://192.168.1.100:3000/timons/"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			  idAttribute: '_id'
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};