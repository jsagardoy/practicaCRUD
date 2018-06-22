const express = require ('express');
const operationRouter =  express.Router();
const middleware = require ('./operation.middleware');



const routes = (Operation) => {

    
    const operationController = require ('./operation.controller') (Operation);

    operationRouter.route('/')
        .get(operationController.get)
        .post(operationController.post);

        operationRouter.use('/:idOperation', middleware.loadOperationById(Operation))
        operationRouter.route('/:idOperation')
            .get((req,res) => res.json(req.operation))
            .put(operationController.put)
            /* .patch()
            .delete() */;
    
    return operationRouter;
}

module.exports = routes;