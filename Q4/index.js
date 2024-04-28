
class Car {

    constructor(name) {
        this.name = name
    }

    startCar() {
        console.log(this.name + " Started")
    }

}

function mySomeFunction() {
    console.log("mySomeFunction Running");
    console.log(brands)
}

const brands = ["Maruti", "Mahindra", "Tata", "Hyundai"];

export { Car, mySomeFunction, brands }