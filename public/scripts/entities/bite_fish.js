class BiteFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside Fish's constructor
    this.imageUri = '/images/bite-fish.gif';
  }

  onClick(event) {
    this.enlarge(10);
  }

}
