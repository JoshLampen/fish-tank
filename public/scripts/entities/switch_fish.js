class SwitchFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside Fish's constructor
    this.imageUri = '/images/switch-fish.jpg';
  }

  onClick(event) {
    this.makeNewVelocity(50);
    this.enlarge(10);
  }
}
