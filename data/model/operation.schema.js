const mongoose = require('mongoose');

const operationSchema = mongoose.Schema({
    idOperation: Number,
    nameOperation: String,
    state: Boolean,
    operationType: String,
    people: [{
        idPerson: Number,
        namePerson: String,
        aka: String,
        picsLinks: [String],
        address: String,
        addressLink: String,
        addressPic: [String],
        vehicles: [{
            idVehicle: Number,
            brand: String,
            model: String,
            vehicleType: String,
            plate: String,
            frame: String,
            pic: [String],
        }],
        companies: [{
            idCompany: Number,
            nameCompany: String,
            cif: String,
            address: String,
            map: String,
        }],
        rutine: [String],
        links: [String],
        familiars: [{
            idFamiliar: Number,
            nameFamiliar: String,
            familiarPics: [String],
            familiarAddress: String,
            addressLink: String,
            related: String,
        }],
    }],

})

const Operations = mongoose.model('operations', operationSchema);

module.exports = Operations; 