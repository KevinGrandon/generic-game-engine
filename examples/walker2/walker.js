engine.layer.create({
	classes: 'background'
})

engine.sprite.create({
	id: 'myPlayerArt',
	classes: 'player',
	steps: {
		left: 7,
		right: 7
	}
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
			this.headingTo = false
		}
	}
})

engine.timer.start()
engine.manager.start()