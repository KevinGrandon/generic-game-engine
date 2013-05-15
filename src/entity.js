!function() {

	function Entity(config) {
		this.config = config

		// Instantiate the sprite if there is one
		if (this.config.sprite) {
			this.sprite = new engine.sprite.get(this.config.sprite)
		}
	}

	Entity.prototype = {

		draw: function() {
			if (this.config.draw) {
				this.config.draw.apply(this)
			}
		},

		/**
		 * Moves an entity by X and Y
		 */
		move: function(x, y) {
			this.sprite.moveTo(this.sprite._x + x, this.sprite._y + y)
		},

		/**
		 * Moves an entity to the X/Y coordinates
		 */
		moveTo: function(x, y) {
			this.sprite.moveTo(x, y)
		}
	}


	engine.entity = {

		create: function(config) {
			var entityWrapper = new Entity(config)
			engine.manager.add(entityWrapper)

			if (config.init) {
				config.init.apply(entityWrapper)
			}
		}
	}
}()