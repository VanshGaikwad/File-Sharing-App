import multer from 'multer';

const storage = multer({dest:'fileFolder/'});


export default storage;