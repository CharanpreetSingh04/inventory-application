const Item = require('../models/item');
exports.getForm = function(req,res,next){
    // res.json({msg: "Hi everyone"});
    res.render('new_item')
}

exports.addItem = async function(req,res,next){
    try{
        const newItem = await Item({
            name: req.body.name,
            price: parseInt(req.body.price),
            manufactured_at: req.body.manufacturedAt,
            packaging_date: req.body.packagingDate,
            category: req.body.category,
            image: req.body.image
        })
        await newItem.save();
    }catch(e){
        console.log(e.message)
    }
    res.redirect('/shop');
}