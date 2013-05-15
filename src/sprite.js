!function() {

	function Sprite(config) {
		this.config = config

		this._x = config.x || 0
		this._y = config.y || 0

		this.init()
	}

	Sprite.prototype = {

		// How much distance have we gone this step?
		stepDistance: 0,

		lastStepDir: false,

		lastStepCount: 0,

		moveTo: function(x, y) {
			var dir = 'right'

			if (x < this._x) {
				dir = 'left'
			}

			var dx = x - this._x
			var dy = y - this._y

			var distance = Math.sqrt( (dx*dx)+(dy*dy) );

			this._x = x
			this._y = y
			this.update(dir, distance)
		},

		init: function() {
			this._node = document.createElement('div')
			this._node.className = this.config.classes
			document.body.appendChild(this._node)

			this._node.style[engine.browserTransform] = 'translate(' + this._x + 'px, ' + this._y + 'px)'
		},

		update: function(stepDir, distance) {

			var scaleProp = ''

			// Default the last step direction if it's not set
			if (!this.lastStepDir) {
				this.lastStepDir = stepDir
			}

			this.stepDistance += distance

			var perStep = 10
			if (this.config.steps && this.config.steps[stepDir] && this.stepDistance > perStep) {

				// Reset step distance
				this.stepDistance = 0

				var nextStep

				if (stepDir !== this.lastStepDir || this.lastStepCount === this.config.steps[stepDir])
					nextStep = 0
				else
					nextStep = this.lastStepCount + 1

				this._node.classList.remove('step-' + this.lastStepDir + '-' + this.lastStepCount)
				this._node.classList.add('step-' + stepDir + '-' + nextStep)

				this.lastStepDir = stepDir
				this.lastStepCount = nextStep
			}

			if (this.lastStepDir == 'right') {
				scaleProp = ' scaleX(-1)'
			}

			// Handle transform CSS injection
			var unit = 'px'
			this._node.style[engine.browserTransform] = 'translate(' + this._x + unit + ', ' + this._y + unit + ')' + scaleProp

		}
	}

	engine.sprite = {

		map: {},

		get: function(id) {
			var sprite = new Sprite(engine.sprite.map[id])
			return sprite
		},

		create: function(config) {
			this.map[config.id] = config
		}
	}
}()