(function() {
  function Game(options) {
    this.assets = new Cane.AssetManager(this)
    this.element = options.document.createElement('canvas')
    this.element.width = options.width
    this.element.height = options.height
    this.context = this.element.getContext('2d')
    this.keyboard = new Cane.Keyboard(options.document)
    this.options = options
  }

  Game.prototype = {
    nextTick: function() {
      requestAnimationFrame(this.tick.bind(this))
    },
    tick: function(timestamp) {
      if(this.lastTickAt) {
        var timeDelta = timestamp - this.lastTickAt
        this.update(timeDelta)
        this.draw(timeDelta)
      }
      this.lastTickAt = timestamp
      this.nextTick()
    },
    start: function() {
      this.assets.load()
      this.nextTick()
    },
    update: function(timeDelta) {
      this.scene.update(timeDelta)
    },
    loadingComplete: function() {
      this.loaded = true
    },
    draw: function(timeDelta) {
      this.clear()
      this.scene.transformAndDraw(timeDelta)
    },
    buildScene: function(Constructor) {
      var options = {
        context: this.context,
        assets: this.assets,
        keyboard: this.keyboard
      }
      var scene = new Constructor(options)
      return scene
    },
    clear: function() {
      this.context.clearRect(0, 0, this.element.width, this.element.height)
    }
  }

  Cane.Game = Game;
})();