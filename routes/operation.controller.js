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
               
        let operation = new Operation(req.body);
       
        operation.save()
            .then(() =>{
                res.status(201);
                res.send(operation);
            })
            .catch(handleError);

    } 

    const put = (req,res) => {
        
        const reqOperationUpdated = parser.bodyParser(req);

         reqOperationUpdated.operation[0].save()
            .then(()=> {
                res.status(200);
                res.json(reqOperationUpdated.operation);
            })
            .catch (handleError);
    }
   
    const patch = (req,res) => {
        
        const reqOperationUpdated = parser.patchParser(req);

        console.log(reqOperationUpdated.operation[0]);

        reqOperationUpdated.operation[0].save()
            .then(()=> {
                console.log('Operation Updated');
                res.status(200);
                res.json(reqOperationUpdated.operation[0]);
            })
            .catch (handleError);
    }
    const deleteHandler = (req, res) => {
        req.operation[0].remove()
            .then (()=>{
                res.status(204);
            })
            .catch(handleError);
    } 

      return {
        get,
        post,
        put,
        patch,
        deleteHandler
    };

}

module.exports = operationController;