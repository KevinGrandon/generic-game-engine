!function() {

	function Layer(config) {
		this.config = config
		this.init()
	}

	Layer.prototype = {
		init: function() {
			this._node = document.createElement('div')
			this._node.className = this.config.classes
			document.body.appendChild(this._node)
		}
	}

	engine.layer = {
		create: function(config) {
			var layer = new Layer(config)
		}
	}
}()