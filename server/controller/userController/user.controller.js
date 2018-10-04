const user=require('../../sql/models').User;


module.exports.getuser=(req,res)=>{
    user.create({
        // username:'xxxxxxxxxx',
        // email: 'jsonamit@gmail.com',
        // password: '3453',
    }).then(function (data) {
        console.log("data inserted successfully")
        user.findAll().then(user=>{
            res.send(user);
        });
    });
    //

}
module.exports.getuserById=(req,res)=>{
    res.send('get user by id');
}
