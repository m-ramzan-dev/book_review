const express =require( "express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const customer_routes = require("./router/auth_users.js").authenticated;
const genrl_routes = require("./router/general.js").general;
const app = express();
app.use(express.json());



app.use("/customer",session({secret:"fingerprint_customer",resave:true,saveUninitialized:true}));
app.use("/customer/auth",function auth(req,res,next){
    const token = req.headers['authorization'];
    if(!token){
        res.status(403).json({error:"Auth token not found!"});
    }
    jwt.verify(token,"fingerprint_customer",(error, decoded)=>{
        if(error){
            res.status(403).json({error:"Request is unauthentiated. Login again!"});
        }
        req.session.username = decoded.username;
        next();
    });

    
});



app.use("/customer",customer_routes);
app.use("/",genrl_routes);


app.listen(3000,()=>{
    console.log("server is listening at port 3000");
});