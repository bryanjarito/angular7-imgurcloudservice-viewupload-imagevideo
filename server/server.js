const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const { resolveSoa } = require('dns');
const app = express();
const router = express.Router();

const DIR = './src/assets/uploads';
const files = fs.readdirSync(DIR)
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
let upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if(ext !== '.mp4' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('Only accepts .mp4 and .jpg file extensions'))
        }
        cb(null, true)
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
// app.use(function (req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET');
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Authorization', 'Bearer bca631bf98252ea2696f341413d05692c188c59a')
//   next();
// });
 
app.get('/api', function (req, res) {
  res.end('file catcher example');
});
 
app.post('/api/upload',upload.single('file'), function (req, res) {
    // if (!req.file) {
    //     console.log("No file received");
    //     return res.send({
    //       success: false
    //     });
    
    //   } else {
    //     console.log('file received successfully');
    //     console.log(req.file)
    //     return res.send({
    //       success: true,
    //       details:req.file
    //     })
    //   }
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    // Define a JSONobject for the image attributes for saving to database

    var finalImg = {
        contentType: req.file.mimetype,
        image:  new Buffer(encode_image, 'base64')
      };
    db.collection('quotes').insertOne(finalImg, (err, result) => {
      console.log(result)

      if (err) return console.log(err)

      console.log('saved to database')
      res.redirect('/')
      
        
    })
});

app.get('/api/list', function (req, res) {
    // const files = fs.readdirSync(DIR)
    // let temp = []
    // let ext = ''
    // for (file of files) {
    //     if(path.extname(file) == '.jpg' || path.extname(file) == '.jpeg')
    //         ext = 'JPEG'
    //     else
    //         ext = 'MP4'
    //     temp.push({
    //         'filename': file,
    //         'filetype': ext
    //     })
    // }
    console.log(res)
    return (res)
});
 
const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});