const express = require("express");
const jwt = require("jsonwebtoken");
const books = require("./booksdb.js");
const regd_users = express.Router();
let users = [];

const isValid = (username)=>{}

const authenticatedUser = (username,password)=>{}

regd_users.post("/login",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

regd_users.put("/auth/review/:isbn",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;