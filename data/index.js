const mongoose = require ('mongoose');
const Operations = require ('./model/operation.schema');

const connect = (path) => mongoose.connect(path);

module.exports = {  
                    connect, 
                    Operations
                };

