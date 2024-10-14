const fileuploaded = require("../models/file.model");

const createfile = async (req,res)=>{
    try {
        let file = req.file
        let userId = req.userId
        let data = {
            ...file,
            userId,   
        }
        let save = await fileUploaded.create(data);
        res.json({
            save,
            message:"file uploaded completed"
        })
    } catch (error) {
          res.json(error.message)
    }
}

module.exports = {
    createfile,
}