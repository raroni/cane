(function() {
  function SoundLoader(delegate, container) {
    Cane.Loader.call(this, delegate, container);
  }
  SoundLoader.prototype = Object.create(Cane.Loader.prototype);

  SoundLoader.prototype.load = function(shortPath, fullPath) {
    var audio = new Audio();
    audio.addEventListener('loadeddata', function() {
      this.assetLoaded(shortPath, sound);
    }.bind(this));
    audio.src = fullPath;
    var sound = new Cane.Sound(audio);
  };

  Cane.SoundLoader = SoundLoader;
})();
