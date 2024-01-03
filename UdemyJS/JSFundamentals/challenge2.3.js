person1 = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};

person2 = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
};


if (person2.calcBMI() > person1.calcBMI()) {
    console.log(`John's BMI (${person2.calcBMI()}) is higher than Mark's BMI (${person1.calcBMI()})`)
} else {
console.log(`Mark's BMI (${person1.calcBMI()}) is higher than John's BMI(${person2.calcBMI()}).`)
};