const userRoute=require('./userRoute/user.route');

module.exports=(app)=>{
    app.use('/api/user',userRoute);
}