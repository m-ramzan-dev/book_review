const express = require("express");
const books = require("./booksdb.js");
const users = require("./auth_users.js").users;
const isValid = require("./auth_users.js").isValid;
const public_users = express.Router();

public_users.post("/register",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

public_users.get("/",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});


public_users.get("/isbn/:isbn",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

public_users.get("/author/:author",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

public_users.get("/title/:title",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"});
});

public_users.get("/review/:isbn",(req,res)=>{
    res.status(300).json({message:"Yet to implement!"})
});

module.exports.general = public_users;