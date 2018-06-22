const parser = require ('./operation.parse');

const operationController = (Operation) =>{
    
    const handleError = (error) => {
        res.status(500).send(error);
    }

    const get = (req,res) => {
        const query = parser.queryParser(req);
        Operation.find(query).exec()
            .then((result)=>{
                res.send(result);
            }
            )
            .catch(handleError);
    };

    const post = (req,res) => {
               
        const operation = new Operation(req.body);
       
        operation.save()
            .then(() =>{
                res.status(201);
                res.send(operation);
            })
            .catch(handleError);

    } 

    const put = (req,res) => {
        const reqOperationUpdated = parser.bodyParser(req);
        reqOperationUpdated.operation.save()
            .then(()=> {
                res.status(200);
                res.json(reqOperationUpdated.operation);
            })
            .catch (handleError);
    }
   

    return {
        get,
        post,
        put
    };

}

module.exports = operationController;