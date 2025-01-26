## Table of Contents

1. [Midnight Manuscripts Codebase](#midnight-manuscripts-codebase)  
2. [Directory Layout](#directory-layout)  
3. [Installation](#installation)  
   - [Client-side](#client-side)  
   - [Server-side](#server-side)  

# Midnight Manuscripts Codebase

 Midnight Manuscripts is a modern online bookstore that offers a seamless shopping experience, a blog for book enthusiasts, and information about the store. The site includes the following pages:

```Homepage```: Welcomes users with featured books and promotions.

```Blogpage``` A collection of articles about books, authors, and literary trends.

```Aboutpage``` Information about Midnight Manuscripts and its mission.


# Directory Layout
Should look like the image below: 

![image](https://github.com/user-attachments/assets/ab064215-147a-4e45-81a1-457c090e9f59)


# Installation
## client-side

Navigate to client directory: 
```
cd client
```

Install Dependencies
```yml
npm install
```

Start the development
```
npm start
```

## server-side

Navigate to server directory
```
cd server
```

Install Dependencies
```yml
npm i chalk cors debug dotenv express mongodb mongoose morgan
```

Start the server
```
nodemon server.js
```

To send data using postman to **newsletter** collection within the web app. 

```
http://localhost:5000/newsletter
```
```
{
  "title": "New Blog Title",
  "description": "This is the description of the new blog post",
  "author": "Author Name",
  "date": 2024-12-20T07:13:43.740+00:00
}
```

To send data using postman to **blogData** collection within the web app.

```
http://localhost:5000/feed
```
```
{
  "name": "Alan Walker",
  "email address": "adamtanweer4@gmail.com",
}
```

Data will be found in and located in collection test for development purposes.

![image](https://github.com/user-attachments/assets/b3456e52-da23-463d-b345-839f38fe584b)


## Appendix

![image](https://github.com/user-attachments/assets/63d05356-efdd-4cce-a334-b3049d76fd1b)


