const express=require('express');
const http=require('http');
const app=express();
const config=require('./config/express');
require('./dbconnection/conn');

config(app);
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
   console.log(`server running on port ${PORT}`);
});