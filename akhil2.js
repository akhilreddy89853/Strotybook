
var http=require("http");
const express = require('express');
const path = require('path');
var app = require('express')();
app.use("/", express.static(path.join(__dirname, "./public")));

app.get('/Story/page_number/:id',function(req,res){
	var page_number = req.params.id;
   if(page_number == 1){
       const fs = require('fs');
       var  config = require('./story.json');
    //res.send('<html><h1>' +config.title_en+ '</h1> <img src ='+'/'+config.cover_image+' width ="340" height="250"> </html>')
	res.send('<html lang="te" dir="ltr"><head><meta charset="utf-8"><title>Story book</title><style>img {margin: auto;display: block;}.ali {text-align: center;} h3 {text-align:center}button {float: right;background-color: burlywood;font-size: 30;}</style> </head><body><h3>' +config.title_en+ '</h3><br><img  src = '+'/'+config.cover_image+' height=300px; width="300px"><br><h3>'+ config.title+'</h3><button><a href="'+(number - 1 + 2)+'">Nextpage</a></button></body></html>');
	}
	 else if(page_number >= 2){
		 const fs = require('fs');
       let data = fs.readFileSync('story.json', (err) => {if (err) throw err;});
       let data1 = JSON.parse(data);
       var pages = data1.pages;
       var currentPage = pages[page_number -2];
       if(pages[page_number - 2] == null){
           res.send('<html lang="te" dir="ltr"><head><meta charset="utf-8">  <style> *{ margin: 0px; padding: 0px;}body{width: 550px;height: 400px;}.n1{ position: relative;top: 250px;left: 600px;}</style></head><body><div class="n1"><h1>THE END</h2></div></body></html>');
        }
       console.log(pages[page_number - 2]); 
	  res.send('<html lang="te" dir="ltr"><head><meta charset="utf-8"><title>Story book</title><style>img {margin: auto;display: block;}.ali {text-align: center;} h3{text-align:center}</style> </head><body><h3>'+currentPage.english+'</h3><br><img  src = '+'/'+currentPage.image+' height=300px; width="300px"><br><h3>'+ currentPage.telugu+'</h3><button float:right><a href="'+(number - 1)+'">Previous</a></button><button float:left><a href="'+(number - 1 + 2)+'">Nextpage</a></button></body></html>');
}
});
app.listen(3000, function() {;
console.log("Server start");
});
