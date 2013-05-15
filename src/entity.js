!function() {

	function EntityWrapper(config) {
		this.config = config

		// Instantiate the sprite if there is one
		if (this.config.sprite) {
			this.sprite = new engine.sprite.get(this.config.sprite)
		}
	}

	EntityWrapper.prototype = {

		draw: function() {
			if (this.config.draw) {
				this.config.draw.apply(this)
			}
		},

		/**
		 * Moves an entity by X and Y
		 */
		move: function(x, y) {
			this.sprite.x = this.sprite._x + x
			this.sprite.y = this.sprite._y + y
		},

		/**
		 * Moves an entity to the X/Y coordinates
		 */
		moveTo: function(x, y) {
			this.sprite.x = x
			this.sprite.y = y
		}
	}


	function Entity() {

	}

	Entity.prototype = {

		create: function(config) {
			var entityWrapper = new EntityWrapper(config)
			engine.manager.add(entityWrapper)

			if (config.init) {
				config.init.apply(entityWrapper)
			}
		}

	}

	engine.entity = new Entity()
}()