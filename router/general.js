const express = require("express");
const books = require("./booksdb.js");
const users = require("./auth_users.js").users;
const isValid = require("./auth_users.js").isValid;
const public_users = express.Router();



public_users.post("/register",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const filteredUser = users.filter((u)=>{
        return u.username === username;
    });
    if(filteredUser.length>0){
        res.status(400).json({error:"User already exits with this username!"});
    }
    users.push({username:username,password:password});
    res.send({message:"User added successfully!"});
});





public_users.get("/", async (req, res) => {
    
    try {
        let bks = [];
        for (let k in books) {
            bks.push(books[k]);
        }
        res.send(JSON.stringify(bks, null, 2));
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }   
});







public_users.get("/isbn/:isbn",(req,res)=>{
    let isbn = req.params.isbn;
    if(!isbn){
        res.status(400).json({message:"ISBN number is requred!"});
    }
    const bks = [];
    for(let key in books){
        if(books[key].isbn === isbn){
            bks.push(books[key]);
        }
    }
    res.send(JSON.stringify(bks,null,2));
});





public_users.get("/author/:name", (req, res) => {
    const author = req.params.name; 
    if (!author) {
        return res.status(400).json({ error: "Author parameter is required!" });
    }

    const authorBooks = [];
    for (let key in books) {
        if (books[key].author === author) {
            authorBooks.push(books[key]);
        }
    }

    
    res.send(JSON.stringify(authorBooks, null, 2));
});







public_users.get("/title/:title",(req,res)=>{
    const title = req.params.title;
    if(!title){
        res.status(400).json({error:"Title parameter is required!"});
    }
    const authorBooks = [];
    for (let key in books){
        if(books[key].title === title){
            authorBooks.push(books[key]);
        }
    }
    res.send(JSON.stringify(authorBooks, null, 2));
});






public_users.get("/review/:isbn",(req,res)=>{
    const isbn = req.params.isbn;
    if(!isbn){
        res.status(300).json({error:"ISBN is required!"});
    }
    let reviews = {};
    for(let key in books){
        if(books[key].isbn === isbn){
            reviews = books[key].reviews;
        }
    }
    res.send(JSON.stringify(reviews,null,2));

});

module.exports.general = public_users;