engine.layer.create({
	classes: 'background'
})

engine.sprite.create({
	id: 'myPlayerArt',
	classes: 'player',
	steps: {
		left: 7,
		right: 7
	},
	x: 200,
	y: 200
})

engine.entity.create({
	sprite: 'myPlayerArt',

	init: function() {

		this.posX = 200
		this.posY = 200

		window.addEventListener('click', function(e) {
			this.headingTo = [e.clientX, e.clientY]
		}.bind(this))
	},

	draw: function() {

		var SPEED = 80

		if (this.headingTo) {

			var tickSpeed = SPEED * engine.timer.seconds();

			var dx = this.headingTo[0] - this.posX
			var dy = this.headingTo[1] - this.posY

			var distance = Math.sqrt( (dx*dx)+(dy*dy) );

			if( distance <= tickSpeed ) {
				this.posX = this.headingTo[0]
				this.posY = this.headingTo[1]
			} else {
				this.posX += (dx/distance) * tickSpeed
				this.posY += (dy/distance) * tickSpeed
			}

			this.moveTo(this.posX, this.posY)
		}
	}
})

engine.timer.start()
engine.manager.start()