const db = require("../data/db-config")

module.exports = {
    getAll(){
        return db ("cars")
    },
    findCars(id){
        return db('cars as c')
        .join('VIN as v', 'make as mk', 'model as mo', 'mileage as mi')
        .select('mk.make', )
        .where()
    }
}