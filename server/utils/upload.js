

import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';


const storage=new GridFsStorage({
url:"mongodb://127.0.0.1:27017/Dattakrupa_Db",
options:{useNewUrlParser: true },
file:(request,file)=>{
    const match=["image/png","image/jpg"];

    if(match.indexOf(file.memeType) === -1){
        return `${Date.now()}-product-${file.originalname}`;
    }
    return{
        bucketName:"photos",
        filename:`${Date.now()}-product-${file.originalname}`
    }
}
})

export default multer({storage});