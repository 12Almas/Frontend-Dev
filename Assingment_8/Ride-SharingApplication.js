class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance < 0 || this.distance === undefined) {
            throw new Error("Invalid distance provided.");
        }
        const ratePerKm = 10;
        return this.distance * ratePerKm;
    }
}

try {
    const myTrip = new Trip("Home", "Office", 15);
    console.log(`Fare: $${myTrip.calculateFare()}`);

    const badTrip = new Trip("A", "B", -5);
    console.log(`Fare: $${badTrip.calculateFare()}`);
} catch (error) {
    console.log("Error:", error.message);
}