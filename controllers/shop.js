const Item = require('../models/item')
exports.getItems = function(req,res,next){
    Item.find({}, function (err, docs) {
        if (err){
            res.json({msg: err})
        }
        else{
            res.render('shop',{docs})
        }
    });
}