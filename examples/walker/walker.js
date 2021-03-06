engine.layer.create({
	classes: 'background'
})

engine.sprite.create({
	id: 'myPlayerArt',
	classes: 'player'
})

engine.entity.create({
	sprite: 'myPlayerArt',

	init: function() {
		window.addEventListener('click', function(e) {
			this.headingTo = [e.clientX, e.clientY]
		}.bind(this))
	},

	draw: function() {
		if (this.headingTo) {
			this.moveTo(this.headingTo[0], this.headingTo[1])
		}
	}
})

engine.timer.start()
engine.manager.start()