!function() {

	function Sprite(config) {
		this.config = config

		this._x = 0
		this._y = 0

		this.init()
	}

	Sprite.prototype = {

		set x(x) {
			this._x = x
			this.update()
		},

		set y(y) {
			this._y = y
			this.update()
		},

		init: function() {
			this._node = document.createElement('div')
			this._node.className = this.config.classes
			document.body.appendChild(this._node)
		},

		update: function() {
			var unit = 'px'
			this._node.style.transition = 'transform 1s'
			this._node.style[engine.browserTransform] = 'translate(' + this._x + unit + ', ' + this._y + unit + ')'
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