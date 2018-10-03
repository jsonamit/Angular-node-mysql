//const user=require('../../model/userModel/user.model');
const user=require('../../migrations/models').User;


module.exports.getuser=(req,res)=>{
    // user.create({
    //     username:'Amitkumar',
    //     email: 'jsonamit@gmail.com',
    //     password: '3453',
    // }).then(function (data) {
    //     console.log("data inserted successfully")
    //     res.send('user base route');
    // });
    //
    user.findAll().then(user=>{
        res.send(user);
    });
}
module.exports.getuserById=(req,res)=>{
    res.send('get user by id');
}
