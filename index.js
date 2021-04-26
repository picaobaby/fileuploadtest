const express = require('express')
const multer = require('multer')
// uuid 
// cors 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

const upload = multer({storage: storage})
const app = express()

app.use(express.static('views'))

app.post('/', upload.array('photos', 100), (req, res) => {
    console.log('post /photos')
    res.send('post photos: ' + req.files.length)
})
app.listen(3000, () => console.log('listening at 3000 ...'))