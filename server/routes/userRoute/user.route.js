const express=require('express');
const route=express.Router();
const userController=require('../../controller/userController/user.controller');

route.get('/',userController.getuser);
route.post('/register',userController.userregister);
route.get('/getuserById',userController.getuserById);

module.exports=route;