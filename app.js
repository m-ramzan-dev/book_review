const express =require( "express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const customer_routes = require("./router/auth_users.js").authenticated;
const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server is Live!");
});
app.listen(3000,()=>{
    console.log("server is listening at port 3000");
});