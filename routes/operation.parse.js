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
    let operation = req.operation[0];

    operation.nameOperation = req.body.nameOperation;
    operation.idOperation = req.body.idOperation;
    operation.state =  req.body.state;
    operation.operationType = req.body.operationType;
       
    for (let i = 0; i<operation.people.length; i++){
        operation.people[i] = req.body.people[i]; 

        for (let j= 0; j<operation.people[i].picsLinks.length; j++){
            operation.people[i].picsLinks[j] = req.body.people[i].picsLinks[j];
        }

        for (let j= 0; j<operation.people[i].addressPic.length; j++){
            operation.people[i].addressPic[j] = req.body.people[i].addressPic[j];
        }
        
        for (let j= 0; j<operation.people[i].vehicles.length; j++){
            operation.people[i].vehicles[j] = req.body.people[i].vehicles[j];
            for (let k=0; k<operation.people[i].vehicles[j].pic.length;k++){
                operation.people[i].vehicles[j].pic[k] = req.body.people[i].vehicles[j].pic[k];
            }
        }

        for (let j= 0; j<operation.people[i].companies.length; j++){
            operation.people[i].companies[j] = req.body.people[i].companies[j];
        }
        for (let j= 0; j<operation.people[i].rutine.length; j++){
            operation.people[i].rutine[j] = req.body.people[i].rutine[j];
        }
        for (let j= 0; j<operation.people[i].links.length; j++){
            operation.people[i].links[j] = req.body.people[i].links[j];
        }

        for (let j= 0; j<operation.people[i].familiars.length; j++){
            operation.people[i].familiars[j] = req.body.people[i].familiars[j];
            for (let k=0; k<operation.people[i].familiars[j].familiarPics.length;k++){
                operation.people[i].familiars[j].familiarPics[k] = req.body.people[i].familiars[j].familiarPics[k];
            }
        }

    }

    /*
    req.operation.people =  people;
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
    req.operation.familiars.related = req.body.related; */
    req.operation[0] = operation;
    return req;
}