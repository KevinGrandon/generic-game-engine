!function() {

	function Sprite(config) {
		this.config = config

		this._x = 0
		this._y = 0

		this.init()
	}

	Sprite.prototype = {

		set x(x) {
			this._node.style.left = x + 'px'
			this._x = x
		},

		set y(y) {
			this._node.style.top = y + 'px'
			this._y = y
		},

		init: function() {
			this._node = document.createElement('div')
			this._node.className = this.config.classes
			document.body.appendChild(this._node)
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