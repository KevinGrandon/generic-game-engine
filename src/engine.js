window.engine = {

	manager: {

		_objects: [],

		/**
		 * Registers an entity
		 */
		add: function(obj) {
			this._objects.push(obj)
		},

		start: function() {
			this.interval = setInterval(this.draw.bind(this), 10);
		},

		draw: function() {
			for (var i = 0, obj; obj = this._objects[i]; i++) {
				obj.draw()
			}
			engine.timer.tick();
		}
	},

	timer: {

		/**
		 * Whether or not the timer is running
		 */
		running: false,

		/**
		 * Last timestamp
		 */
		last: null,

		/**
		 * Starts the timer
		 */
		start: function() {
			this.running = true
			this.last = (new Date()).getTime()
			this.tick()
		},

		seconds: function() {
			var seconds = this.frameSpacing / 1000
			if( isNaN(seconds) ) {
				return 0
			}
		
			return seconds;
		},
	
		tick: function() {
			var currentTick = (new Date()).getTime()
			this.frameSpacing = currentTick - this.last
			this.last = currentTick
		}
	}
}