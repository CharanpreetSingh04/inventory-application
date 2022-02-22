require('dotenv').config({path:'/home/charanpreet/Documents/svasth/My task/nodeProjects/inventory-application/.env'})
const email = process.env.EMAIL;
exports.getContacts = function(req,res,next){
    res.render('contact',{email})
}