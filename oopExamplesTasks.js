// oopExamplesTasks.js
//Example 1
class Person {
    constructor (name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    talks () {
        console.log(
             `My name is ${this.name} and I am ${this.age} and I work as ${this.job}`
        );
    }
    Worker() {
        console.log(`I am going to build a house, because I am a ${this.job}`);
    }
}
    const dave= new Person('Dave', 30, 'builder');

    dave.talks();
    dave.Worker();

//Example 2

    //Parent class
    class Animal {
        constructor (petName) {
        this.petName = petName;
        this.health = 100;
        this.hunger = 100;
        }
    //Methods
    drinks () {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log("${this.name}'s health is ${this.health}");
        return this;
        }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
        });
    }
    }

    //subclass / child class
    //Using the super keyword inside a constructor runs the constructor from the parent class to set up the properties for the new subclass.
    class Dog extends Animal {
        constructor (petName, happy) {        
        super (petName, happy);
        this.happy - happy;
        }
    //Dog specific methods here: 
    playBall () {
        this.health += 10;
        this. hunger -= 10;
        console. log ('${this.name} is happy');
        return this;
        }
    walks() {
        console.log('Taking ${this.name} for a walk, they are ${this.happy}');
        this.health += 10;
        return this;
    }
}

//Add the parameters of your properties that you want to use as arguments into both the subclass constructor and super.
class Cat extends Animal {
    constructor (petName, content) {
        super (petName, content);
        this.content = content;
    }
    playWool () {
        this.health += 10;
        this. hunger -= 10;
        console. log ('${this.name} is happy');
        return this;
        }
    naps() {
        console.log('Taking ${this.name} for a nap, they are ${this.happy}');
        this.health += 10;
        return this;
    }
}    

// TAKS 1.A
// Create new class that contains 3 properties and 3 method
class Stock {
    constructor(unitBarcode, unitName, unitPrice, unitQuantity) {
        this.unitBarcode = unitBarcode;
        this.unitName = unitName;
        this.unitPrice = unitPrice;
        this.unitQuantity = unitQuantity;
        this.unitsSold = 0;
        this.totalRevenue = 0;
    }

    // Method to simulate selling a unit
    sellUnit() {
        if (this.unitQuantity > 0) {
            this.unitQuantity -= 1;
            this.unitsSold += 1;
            this.totalRevenue += this.unitPrice;
            console.log(`${this.unitName} sold. Units remaining: ${this.unitQuantity}. Total revenue: ${this.totalRevenue}`);
        } else {
            console.log("Out of stock!");
        }
    }

    // Method to restock units
    restockUnit(quantity) {
        this.unitQuantity += quantity;
        console.log(`${quantity} units of ${this.unitName} added. Total units: ${this.unitQuantity}.`);
    }

    // Display stock summary
    displayStockSummary() {
        console.log(`Stock Summary for ${this.unitName}: Barcode: ${this.unitBarcode}, Price: ${this.unitPrice}, Quantity: ${this.unitQuantity}, Units Sold: ${this.unitsSold}, Total Revenue: ${this.totalRevenue}`);
    }
}

//Create a subclass from the class you just created 
class Phone extends Stock {
    constructor(unitBarcode, unitName, unitPrice, unitQuantity, screenSize, isSmartphone) {
        super(unitBarcode, unitName, unitPrice, unitQuantity);
        this.screenSize = screenSize; 
        this.isSmartphone = isSmartphone;
    }

    // Display phone details
    displayPhoneDetails() {
        console.log(`Details of ${this.unitName}: Screen Size: ${this.screenSize} inches, Smartphone: ${this.isSmartphone ? 'Yes' : 'No'}`);
    }

    // An example of a method specific to the Phone subclass
    updatePrice(newPrice) {
        this.unitPrice = newPrice;
        console.log(`The price of ${this.unitName} has been updated to ${this.unitPrice}.`);
    }

    // Override the displayStockSummary method to include phone-specific details
    displayStockSummary() {
        super.displayStockSummary();
        console.log(`Additional Info - Screen Size: ${this.screenSize} inches, Smartphone: ${this.isSmartphone ? 'Yes' : 'No'}`);
    }
}


// //Then create new instances of that class
// Creating an instance of the Phone class
let iphone = new Phone("12345", "iPhone 12", 999, 50, 6.1, true);

// Selling an iPhone unit
iphone.sellUnit();

// Restocking iPhone units
iphone.restockUnit(20);

// Displaying iPhone details and stock summary
iphone.displayPhoneDetails();
iphone.displayStockSummary();



// TAKS 1.B
// Create new class that contains 3 properties and 3 method

class MinecraftEntity {
    constructor(name, health, location) {
        this.name = name;
        this.health = health;
        this.location = location;
    }

    // Methods
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} took ${amount} damage and now has ${this.health} health.`);
        return this;
    }

    heal(amount) {
        this.health += amount;
        console.log(`${this.name} healed ${amount} health and now has ${this.health} health.`);
        return this;
    }

    moveTo(newLocation) {
        this.location = newLocation;
        console.log(`${this.name} moved to ${this.location}.`);
    }

    entityStats() {
        console.log(`Stats for ${this.name}: Health - ${this.health}, Location - ${this.location}`);
    }
}

// Create a subclass from the class you just created

class Creeper extends MinecraftEntity {
    constructor(name, health, location, fuseTime) {
        super(name, health, location);
        this.fuseTime = fuseTime; // Unique to Creeper
    }

    // Creeper-specific method
    explode() {
        console.log(`${this.name} is exploding in ${this.fuseTime} seconds!`);
        // Assuming explosion reduces health to 0
        this.health = 0;
        console.log(`${this.name} has exploded and no longer has any health.`);
    }

    entityStats() {
        super.entityStats();
        console.log(`Fuse Time: ${this.fuseTime} seconds`);
    }
}

// Then create new instances of that class
const steve = new MinecraftEntity("Steve", 100, "Spawn Village");
const creeper = new Creeper("Creeper", 40, "Nether", 10);
creeper.explode();
creeper.entityStats();
    

// Create a subclass from the class you just created
class Skeleton extends MinecraftEntity {
    constructor(name, health, location) {
        super(name, health, location);
        this.weapon = "Bow"; // Adding a weapon property unique to Skeleton
    }

    // Skeleton-specific method for attacking
    attack(target) {
        console.log(`${this.name}, armed with a ${this.weapon}, is attacking ${target.name}!`);
        target.takeDamage(10); // Assuming a fixed damage value for simplicity
    }

    // Overriding the entityStats method to include weapon information
    entityStats() {
        super.entityStats();
        console.log(`Weapon: ${this.weapon}`);
    }
}


      
