import multer from 'multer';



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname + '-' + uniqueSuffix)
    }
  })
 
  
  const upload = multer({ storage: storage }).fields([
    { name: 'documents[resume]', maxCount: 1 },
    { name: 'documents[nationalID]', maxCount: 1 },
    { name: 'documents[certificate]', maxCount: 1 },
    { name: 'documents[photo]', maxCount: 1 },
  ]);
  export default upload;