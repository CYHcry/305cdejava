var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');
var mimeTypes = {
           "html": "text/html",
           "jpeg": "image/jpeg",
           "jpg": "image/jpeg",
           "png": "image/png",
           "js": "text/javascript",
           "css": "text/css"};
//var databaseUrl = "test"; 
var collection = ["test"];
//var db = require("mongojs").connect(databaseUrl, collections);
var mongojs = require('mongojs');
var mongodb = require('mongodb');
//var db = mongojs('databaseUrl', collections);
var MongoClient = mongodb.MongoClient;
var dbUrl = 'mongodb://localhost:27017/my_database_name';
var mongodbServer = new mongodb.Server('THISserver', 27017, {auto_reconnect: true, poolSize: 10});

var server = http.createServer(function onRequest(request, response) {
       var urlParts = url.parse(request.url);
       var fullPath = urlParts.pathname;
       //var page = 'pages' + urlParts.pathname;
  var page = './' + urlParts.pathname;
  //console.log(fullPath);
  
       var jsonUserOject = '';
	   
	   var action, form, formData, msg, publicPath, urlData;
        urlData = url.parse(request.url, true);
        action = urlData.pathname;
        publicPath = __dirname + "\\public\\";
	      //console.log(request.url);
        
  
        if (request.method === "POST") {
          formData = '';
           msg = '';
            return request.on('data', function(data) {
              formData += data;
                return request.on('end', function() {
                  var obj, user;
                  obj = qs.parse(formData);
									msg = JSON.stringify(obj);
									user = JSON.parse(msg);

                  var type = user.type;
				  
				obj = JSON.parse(msg);
				
				if (type == "login"){
									   console.log("Go to login");
										var name = user.name;
										var email_address = user.email_address;
										var password = user.password;
										console.log("User " + name + " login with password " + password + " and email address is " + addemail_address + ".");
										/*
										MongoClient.connect("mongodb://localhost:27017/THISdb", function (err, db) {
											db.collection("USER", function (err, collection) {
												collection.find().toArray(function(err, items) {
													if(err) throw err;
													// Check whether there is data in the database
													if (items !== "") {
														// Check whether the user account exists
														for (var i=0; i<items.length; i++) {
															if (username == items[i].username && password == items[i].password) {
																console.log("Login successful");
															}
														}
													}
												});
											});	
										});
										*/
									} else if (type == "signup") {
										console.log("Start to signup");
										var addname = user.name;
										var addemail_address = user.email_address;
										var addpassword = user.confirm_password;
										
										console.log("User " + addname + " signup with password is " + addpassword + " and email address is " + addemail_address + ".");
										
											MongoClient.connect(dbUrl, function (err, db) {
												if (err) {
													console.log('Unable to connect to the mongoDB server. Error:', err);
												} else {
													//HURRAY!! We are connected. :)
													console.log('Connection established to', url);

													// do some work here with the database.

													//Close connection
													db.close();
												}
											});
										
											/*
											db.open(function() {
												console.log("database can open");
												db.collection("USER", function(err, collection) {
													collection.insert({
														user: user.username,
														email: user.email,
														password: user.password
													}, function(err, data) {
														if (data) {
															console.log("Successfully Insert");
														} else {
															console.log("Failed to Insert");
														}
													});
												});
											});*/
										
									}
															
									console.log("obj = qs.parse(formData);");
                  console.log(obj);
									console.log("msg = JSON.stringify(obj);");
                  console.log(msg);
									console.log("The End");
									
									

                  response.writeHead(200, {
                    "Content-Type": "application/json",
                    "Content-Length": msg.length
                  });
                    return response.end(msg);
                });
            });
        }
		
		
		if (fullPath == "/posts") {
         console.log("post call");
            var userName = '';
               request.on('data', function(chunk) {
               jsonUserObject = JSON.parse(chunk.toString());
               userName = jsonUserObject.name;
               userEmail = jsonUserObject.email;
               db.testData.insert({name: userName, email: userEmail}, function(err, testData) {
                   if( err || !testData) console.log("Unable to add user"); else console.log("User added");
                   });
               });
        }
		
		
    var mimeType = mimeTypes[path.extname(page).split(".")[1]];
    fs.exists(page, function fileExists(exists) {
        if (exists) {
            response.writeHead(200, mimeType);
            fs.createReadStream(page).pipe(response);
        } else if (request.url == '/index') {
			form = "index.html";
			fs.readFile(form, function(err, contents) {
				if (err !== true) {
					response.writeHead(200, {
					"Content-Type": "text/html"
					});
					response.end(contents);
				} else {
					response.writeHead(500);
					response.end('_testcb(\'{"message": 444"}\')');
				}
			});
		} else if (request.url == '/about') {
			form = "about.html";
			fs.readFile(form, function(err, contents) {
				if (err !== true) {
					response.writeHead(200, {
					"Content-Type": "text/html"
					});
					response.end(contents);
				} else {
					response.writeHead(500);
					response.end('_testcb(\'{"message": "Hello world 444!"}\')');
				}
			});
		} else if (request.url == '/type') {
			form = "type.html";
			fs.readFile(form, function(err, contents) {
				if (err !== true) {
				    response.writeHead(200, {
				    "Content-Type": "text/html"
				    });
				    response.end(contents);
			    } else {
					response.writeHead(500);
					response.end('_testcb(\'{"message": "Hello world 444!"}\')');
				}
			});
		} else if (request.url == '/contcat') {
			form = "contact.html";
			fs.readFile(form, function(err, contents) {
				if (err !== true) {
					response.writeHead(200, {
					"Content-Type": "text/html"
					});
				    response.end(contents);
				} else {
					response.writeHead(500);
					response.end('_testcb(\'{"message": "Hello world 444!"}\')');
				}
			});
		} else if (request.url == '/search') {
			form = "search.html";
			fs.readFile(form, function(err, contents) {
				if (err !== true) {
					response.writeHead(200, {
					"Content-Type": "text/html"
					});
					response.end(contents);
				} else {
					response.writeHead(500);
					response.end('_testcb(\'{"message": "Hello world 444!"}\')');
				}
		    });
		} else {
            response.write('Page Not Found');
            response.end();
        }
    });
}).listen(3300);