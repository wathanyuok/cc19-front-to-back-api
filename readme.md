# Server

## Step 1 create package
```bash
npm init -y
```

## Step 2 install package....
```bash
npm install express nodemon cors morgan bcryptjs jsonwebtoken zod prisma
```
```bash
npx prisma init
```
## Step 3 Git
```bash
git init
git add .
git commit -m "message"
```
next step
copy code from repo
only first time
```bash
git remote add origin https://github.com/wathanyuok/cc19-front-to-back-api.git
git branch -M main
git push -u origin main
```

when uppdate code
```bash
git add .
git commit -m "message"
git push
```
## Step 4 update package.json
``` json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start" : "nodemon index.js"
  },
```
and code
index.js
```js
const express = require('express')
const app = express();

// Start Server
const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```
## Step 5 Middlewares
```s
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(cors()); // Allows cross domain
app.use(morgan('dev')); // Show log terminal
app.use(express.json()); // For read json


// Start Server
const PORT = 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

## Step 6 Routes & controllers [register]
```bash
// /controllers/auth-controller.js
exports.register = (req, res, next) => {
    try {
        // code
        res.json({ message: "hello register " });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error!!" });
    }
};

// /routes/auth-route.js
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");

// @ENDPOINT http://localhost:8000/api/register
router.post("/register", authControllers.register);

// export
module.exports = router;
```
## Step 7 controllers [Login]
```bash
exports.register = (req, res, next) => {
    try {
        // code
        res.json({ message: "hello register " });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error!!" });
    }
};

exports.login = (req, res, next) => {
    try {
        res.json({ message: "hello login " });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error!!" });
    }
}
```
##  Step8 [middilewares -> error.js]
``` bash
const handleErrors = (err, req, res, next) => {

    res
    .status(err.statusCode ||500)
    .json({ message: err.message || "Something wrong!!"})

}

// export
module.exports = handleErrors;
------------------------------------------------------------
จากนั้นไปที่ index.js
const handleErrors = require('./middlewares/error')
// Error Handling
app.use(handleErrors);

ลอง ปรับจาก auth-controller.js ให้เป็นแบบนี้
exports.login = (req, res, next) => {
    try {
        console.log(sdfsdf)
        res.json({ message: "hello login " });
    } catch (error) {
        next(error)
    }
}

จากนั้นลองยิง postman -> POST
http://localhost:8000/api/login
{
    "message": "aaa is not defined"
}

----------------
อย่าลืมเปลี่ยนเป็น next(error)  [middilewares -> auth-contoller.js]

exports.register = (req, res, next) => {
    try {
        // code
        res.json({ message: "hello register " });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error!!" });
    }
};


// เปลี่ยนเป็น next(error)
exports.register = (req, res, next) => {
    try {
        // code
        res.json({ message: "hello register " });
    } catch (error) {
        next(error)
    }
};

exports.login = (req, res, next) => {
    try {
        console.log(aaa)
        res.json({ message: "hello login " });
    } catch (error) {
        next(error)
    }
}

