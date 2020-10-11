function compareToObj(obj1, obj2) {
    console.log(JSON.stringify(obj1) === JSON.stringify(obj2))
}

let myCar = {
    name: 'Lada',
    foundation: '1971',
    models: '20 models',
    founders: 'ЦК КПСС и Советское правительство',

    toString() {
        console.log('Foundation of Lada is ' + this.foundation + ' There are ' + this.models  + ' The founders are ' + this.founders)

    }
    
}

console.log(myCar.toString())

let myAnotherCar = {
    name: 'BMW',
    foundation: '1916',
    models: 'about 50 models',
    founders: 'Karl Friedrich Rapp',
}

compareToObj(myCar, myAnotherCar)