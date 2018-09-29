const User=require('../../model/userModel/user.model');



module.exports.getuser=(req,res)=>{

    res.send('user base route');
}
module.exports.getuserById=(req,res)=>{
    res.send('get user by id');
}
