const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM laptop_category';
    const data = await db.query(sql);
   res.json({
        data_laptop: data,
        message: "Get all data laptop_category success"
    })
}

// Create data By req.body
const create = async (req, res) =>{
    const {
        name,
    } = req.body;
    
    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(name)){message.name = "Name is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "INSERT INTO laptop_category (name, image) VALUES (?, ?)";
    let param_create = [
        name,
        filename
    ];
    db.query(sql,param_create,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_laptop: result,
                message: "Create data laptop_category success"
            })
        }
    })
}

// Update data By req.body
const update = async (req, res) =>{
    const {
        name,
        laptop_cate_id 
    } = req.body;
    
    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(laptop_cate_id)){message.laptop_cate_id = "laptop_cate_id is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "UPDATE laptop_category SET name = ?, image = ? WHERE laptop_cate_id = ?";
    let param_update = [
        name,
        filename,
        laptop_cate_id
    ];
    db.query(sql,param_update,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_laptop: result,
                message: "Update data laptop_category success"
            })
        }
    })
}

// Delete data By req.params
const remove = async (req, res) =>{
    const { laptop_cate_id } = req.params;

    let sql = "DELETE FROM laptop_category WHERE laptop_cate_id = ?";
    let param_delete = [
        laptop_cate_id
    ];
    db.query(sql,param_delete,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_laptop: result,
                message: "Delete data laptop_category success"
            })
        }
    })
}


module.exports = {
    getAll,
    create,
    update,
    remove
}