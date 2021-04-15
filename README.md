# Project-2
This is a project to create a Content Management System (CMS) restuarant review site to publish restaurant reviews, and subsequent comments and thoughts about restaurants and fast food outlets. It is created using the Model-View-Controller paradigm. The system is created using node.js, handlebars.js, Sequelize and mySQL2.

## *User Story*
AS A fast food fanatic
I WANT to be able to see and post reviews of fast food restaurants
SO THAT I can get a grasp of what the restaurant, food & staff are like
AND can post funny stories regarding that restaurant.

## *Our Approach*

Our approach has been to create a blog style review site where a user can read, review and post (if signed up) of their favourite eaterys.  They will be able to upload images as well.

## *The Database Schema* 

The database schema should match the given design below

![alt text](/Images/EntityRelDiagram.png)

The app is deployed in Heroku here: https://few-fries-short.herokuapp.com/

## *The MVC Method*

MVC Model-View-Controller
MVC is short for Model, View, and Controller. MVC is a popular way of organizing code. The big idea behind MVC is that each section of your code has a purpose, and those purposes are different. Some of your code holds the data of your app, some of your code makes your app look nice, and some of your code controls how your app functions.

MVC is a way to organize your code’s core functions into their own, neatly organized boxes. This makes thinking about your app, revisiting your app, and sharing your app with others much easier and cleaner.

The parts of MVC Model: Model code typically reflects real-world things. This code can hold raw data, or it will define the essential components of your app. For instance, if you were building a To-do app, the model code would define what a “task” is and what a “list” is – since those are the main components of a todo app. View: View code is made up of all the functions that directly interact with the user. This is the code that makes your app look nice, and otherwise defines how your user sees and interacts with it. Controller: Controller code acts as a liaison between the Model and the View, receiving user input and deciding what to do with it. It’s the brains of the application, and ties together the model and the view.



## *Table of Contents*
- [Installation](#installation)
- [A Few Fries Short](#few-fries-short)
- [Packages](#Packages) 
- [Credits](#Credits) 
- [Contributing](#contributing)
- [Authors](#authors)
- [Contact Me](#contact-me)

## *Installation*

**To run, the user just has to access the Heroku link shown above.**

However to run the program, the user must clone all files from this repository.  It is important that the file locations remain the same in relation to each other.

To run the program, the database must be running.  The program has been written using MySQL Workbench and using Visual Studio.  

## **A Few Fries Short**

![alt text](/Images/Landingpage.png) 

The landing page shows any reviews added to the site and allows the user to navigate to the restaurant, to login (to enable the ability to contribute to the site) and to go to the signup page as a new user.

![alt text](/Images/Restaurantpage.png)
This page enables the user to select the Restaurant to view existing information on restaurants already added to the site.  Additionally there is a button which enables you to add a review but only if you have signed up to the site.  So the user has to login or signup first.

![alt text](/Images/Restaurantpage.png)

The user, once successfully signed up, can add a review to an existing Restaurant or for a new one by completing the Add a restaurant at the bottom of the page:

![alt text](/Images/reviewadd.png)

The user is able to add a photo to the page:

![alt text](/Images/showspicture.png)

## Packages ##
Bcrypt

Sequelize

Dotenv

Express

Handlebars

MySQL2

Cloudinary

Node

Heroku

Semantic UI

Javascript

CSS


## Credits ##
1. BCS for their timely help

2. Paul and Chiggy for their help in class
                  
## *Contributing and Questions*
For any suggestions or questions, please feel free to contact me via my Github page. (github.com/sallyxp)

## *Authors*
George Cope
Olivia Owen
Alisha Saleh
Sally Rodgers

## *Contact Us*
- Github: **[sallyxp](github.com/sallyxp)
- LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1)  
- Email: **[sallyhello1@yahoo.com](mailto:sallyhello1@yahoo.com)

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet) 
&copy; 2021 FFS Team



















