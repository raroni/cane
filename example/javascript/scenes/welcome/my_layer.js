function MyLayer(options, secretMessage) {
  Cane.Layer.call(this, options);
  this.marioSprite = new Cane.Sprite(this.game, 'mario');
  this.luigiSprite = new Cane.Sprite(this.game, 'sub_dir/luigi');

  this.addChild(this.marioSprite);
  this.addChild(this.luigiSprite);

  console.log('Secret: ' + secretMessage);

  this.i = 0;
  this.direction = 1;
}
MyLayer.prototype = Object.create(Cane.Layer.prototype);

MyLayer.prototype.update = function() {
  this.i += this.direction;
  this.y = this.i+100;

  if(this.i == 50) {
    this.direction = -1;
  }
  else if(this.i == 0) {
    this.direction = 1;
  }
};
