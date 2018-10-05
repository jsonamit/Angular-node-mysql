const user=require('../../sql/models').User;


module.exports.getuser=(req,res)=>{
    res.send('get user by id');
}
module.exports.userregister=(req,res)=>{
    var response={};
     if(req.body.username && req.body.email && req.body.password)
    {
        user.create({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }).then(function (data) {
            response.success="Successfully inserted";
            response.status=200;
            res.send(response);
        });
     }
     else {
         response.failuere="Missed some data";
         response.status=404;
         res.send(response);
     }
}
module.exports.getuserById=(req,res)=>{
    res.send('get user by id');
}

