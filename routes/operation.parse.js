exports.queryParser = (req) =>{
    const query = {}

    if (req.query.idOperation){
        query.idOperation =  req.query.idOperation;
    }
    if (req.query.nameOperation){
        query.nameOperation =  req.query.nameOperation;
    }


    return query;
}

exports.bodyParser = (req) =>{
    req.operation.name = req.body.nameOperation;
    req.operation.idOperation =  req.body.idOperation;
    req.operation.state =  req.body.state;
    req.operation.operationType = req.body.operationType;
    req.operation.people= req.body.people;
    req.operation.people.idPerson = req.body.idPerson;
    req.operation.people.namePerson = req.body.namePerson;
    req.operation.people.aka =  req.body.aka;
    req.operation.people.picsLinks =  req.body.picsLinks; 
    req.operation.people.address =  req.body.address;
    req.operation.people.addressLink =  req.body.addressLink;
    req.operation.people.addressPic = req.body.addressPic;
    req.operation.people.vehicles = req.body.vehicles;
    req.operation.people.vehicles.idVehicle = req.body.idVehicle;
    req.operation.people.vehicles.brand = req.body.brand;
    req.operation.people.vehicles.model = req.body.model;
    req.operation.people.vehicles.vehicleType = req.body.vehicleType;
    req.operation.people.vehicles.plate = req.body.plate;
    req.operation.people.vehicle.frame = req.body.frame;
    req.operation.people.vehicle.pic = req.body.pic;
    req.operation.people.companies.idCompany = req.body.idCompany;
    req.operation.people.companies.name = req.body.nameCompany;
    req.operation.people.companies.cif = req.body.cif;
    req.operation.people.companies.address = req.body.address;
    req.operation.people.companies.map = req.body.map;
    req.operation.people.rutine = req.body.rutine;
    req.operation.people.links = req.body.links;
    req.operation.familiars.idFamiliars = req.body.idFamiliars;
    req.operation.familiars.name = req.body.nameFamiliar;
    req.operation.familiars.familiarPics = req.body.familiarPics;
    req.operation.familiars.familiarAddress = req.body.familiarAddress;
    req.operation.familiars.addressLink = req.body.addressLink;
    req.operation.familiars.related = req.body.related;
 
    return req;
}