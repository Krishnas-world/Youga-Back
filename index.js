import express from 'express';
import multer from 'multer';

const multerParse = multer({ dest: 'uploads/' });




const app = express();
app.listen(3000, ()=>{console.log('Server is running on port 3000')});