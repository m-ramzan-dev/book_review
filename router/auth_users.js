const express = require("express");
const jwt = require("jsonwebtoken");
const books = require("./booksdb.js");
const regd_users = express.Router();
let users = [];

const isValid = (username)=>{
    console.log(username);
    return users.find(user => user.username === username);
}

regd_users.post("/login",(req,res)=>{
    
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
        res.status(400).json({error:"Parameters are missing!"});
    }
    const user = this.isValid(username);
    
    if(user && user.password === password){
        const token = jwt.sign({username:user.username},'fingerprint_customer',{expiresIn:'1h'});
        res.send({message:"Login successfully!",token:token});
    }
    res.status(400).json({error:"Unable to login!"})
});








regd_users.put("/auth/review/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const review = req.body.review;
    const username = req.session.username;
    if(!review){
        res.status(400).json({error:"Review is missing!"});
    }
    let book = Object.values(books).find(book => book.isbn === isbn);
    if(!book){
        res.status(400).json({error:"Invalid isbn number!"});
    }
    if(!book.reviews){
        book.reviews = {};
    }
    book.reviews[username] = review;
    res.send({message:"Review added successfully!"});

});





regd_users.delete("/auth/review/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    const username = req.session.username;

    let book = Object.values(books).find(book => book.isbn === isbn);
    if(!book){
        res.status(400).json({error:"Invalid isbn number!"});
    }
    if(book.reviews && book.reviews[username]){
        delete book.reviews[username];
    }
    
    res.send({message:"Review deleted successfuylly!"});

});



module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;