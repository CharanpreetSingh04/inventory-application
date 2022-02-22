const Item = require('../models/item')
const Cart = require('../models/cart');
const cart = require('../models/cart');

exports.addItem = async function(req,res,next){
    const id = req.params.id;
    try{
        const itemExistsInCart = await Cart.findOne({_id:id});
        if(itemExistsInCart === null || itemExistsInCart === {}){
            try{
                const item = await Item.findOne({_id:id});
                const newItem = await Cart({
                    _id: id,
                    name: item.name,
                    price: parseInt(item.price),
                    manufactured_at: item.manufacturedAt,
                    packaging_date: item.packagingDate,
                    category: item.category,
                    // image: item.image,
                    quantity: 1
                })
                await newItem.save();
                res.redirect('/cart')
            }catch(e){
                console.log(e.message)
            }
        }
        else{
            try{
                itemExistsInCart.quantity += 1;
                await itemExistsInCart.save();
                res.redirect('/cart')
            } catch(e){
                console.log(e.message)
            }
        }
    }catch(e){
        res.json(e.message);
    }
}

exports.getItems = function(req,res,next){
    Cart.find({}, function (err, docs) {
        if (err){
            res.json({msg: err})
        }
        else{
            res.render('cart',{docs})
        }
    });
}


exports.subtractItem = async function(req,res,next){
    const id = req.params.id;
    try{
        const itemExistsInCart = await Cart.findOne({_id:id});
        if(itemExistsInCart === null || itemExistsInCart === {}){
            try{
                res.redirect('/cart')
            }catch(e){
                console.log(e.message)
            }
        }
        else{
            try{
                itemExistsInCart.quantity -= 1;
                if(itemExistsInCart.quantity === 0){
                    await Cart.deleteOne({_id:id})
                }
                else{
                    await itemExistsInCart.save();
                }
                res.redirect('/cart')
            } catch(e){
                console.log(e.message)
            }
        }
    }catch(e){
        res.json(e.message);
    }
}

exports.removeItem = async function(req,res,next){
    const id = req.params.id;
    try{
        const itemExistsInCart = await Cart.findOne({_id:id});
        if(itemExistsInCart === null || itemExistsInCart === {}){
            try{
                res.redirect('/cart')
            }catch(e){
                console.log(e.message)
            }
        }
        else{
            try{
                await Cart.deleteOne({_id:id})
                res.redirect('/cart')
            } catch(e){
                console.log(e.message)
            }
        }
    }catch(e){
        res.json(e.message);
    }
}