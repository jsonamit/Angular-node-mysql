const city=require('../../model/userModel/user.model');



module.exports.getuser=(req,res)=>{
    city.create({
        username:'Cell Phone',
        birthday: '3453',
    }).then(function (data) {
        console.log("data inserted successfully")
        res.send('user base route');
    });


}
module.exports.getuserById=(req,res)=>{
    res.send('get user by id');
}
