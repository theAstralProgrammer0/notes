/home/ty/.nvm/versions/node/v22.3.0/bin/node

class Car {
  constructor(name, year, make) {
    this.name = name,
    this.year = year,
    this.make = make
  }
}

const car = new Car('Mercedes Benz', '2025', '4matic');
const { name: n, year: y, make: m } = car;
console.log(n + " " + y + " " + m);

//////////////////////////////////////////////////////////

class SmartCar extends Car {
  constructor(name, year, make, words) {
    super(name, year, make);
    this.words = words;
  }

  talk() {
    return `Hey! I'm a smart car! I'm a ${this.year} ${this.name} ${this.make}, and these are the words you wanted me to speak: "${this.words}". Happy?!`
  }
}

const smartCar = new SmartCar(n, y, m, "You're awesome");
console.log(smartCar);
smartCar.talk();

//////////////////////////////////////////////////////////

class SmartElectrcCar extends SmartCar {
  constructor(name, year, make, words, batteryLife) {
    super(name, year, make, words, batteryLife);
    this.batteryLife = batteryLife;
  }

  battery() {
    if (this.batteryLife < 0) {
            return `You're currently using your backup/reserve. Please find where to recharge urgently!`;
        }
        else if (this.batteryLife > 0 && this.batteryLife <= 30) {
            return `Battery Life: ${this.batteryLife}%. Please recharge immediately.`;
        }
        else if (this.batteryLife > 30 && this.batteryLife < 70) {
            return `Battery Life: ${this.batteryLife}%. You're okay.`;
        }
        else {
            return `Battery Life: ${this.batteryLife}%. Enjoy your ride baby!`;
        }

