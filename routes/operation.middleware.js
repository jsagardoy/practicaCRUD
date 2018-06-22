 exports.loadOperationById = (Operation) => (req, res, next) =>{
    console.log(req.params.idOperation);
    Operation.find({'idOperation': req.params.idOperation})
        .then((operation) =>
            {
                if(operation){
                    req.operation = operation;
                    next();
                } else {
                    res.status(404).send(`Operation with ${req.params.idOperation} was not found`);
                }
            }
        )
        .catch(((error)=>res.status(500).send(error)))
 }

