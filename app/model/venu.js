const mongoose =require('mongoose');

var venuSchema =mongoose.Schema({   
        url:String,
        name:String,
        votedBy:[String]
});


module.exports =mongoose.model('Venu',venuSchema,'venus');