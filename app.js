
const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const port = 3000
const router = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(router)

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, path.join(__dirname, '/upload'))
    },
    filename: function (req, file, cb){
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
            )
    }
})

app.post(
    '/upload',
    multer({storage: diskStorage}).single('photo'),
    (req, res) =>{
        const files = req.files
        console.log(files)
        res.json({status: 'success'})
    }
)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})