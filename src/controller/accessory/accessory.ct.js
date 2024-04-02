const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM accessory';
    const data = await db.query(sql);
   res.json({
        data_accessory: data,
        message: "Get all data accessory success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM accessory WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_accessory: data,
        message: "Get data accessory success"
    })
}

const create = async (req, res) =>{
    const {
        cate_accessory_id,
        name,
        price,
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(cate_accessory_id)){message.cate_accessory_id = "Cate_accessory_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "INSERT INTO accessory (cate_accessory_id, name, price, acces_image) VALUES (?, ?, ?, ?)";
    let param_create = [ cate_accessory_id, name, price, filename ];
    db.query(sql,param_create,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_accessory: result,
                message: "Create data accessory success"
            })
        }
    })
}

const update = async (req, res) =>{
    const {
        id,
        cate_accessory_id,
        name,
        price,
    } = req.body;
    
    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(cate_accessory_id)){message.cate_accessory_id = "Cate_accessory_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "UPDATE accessory SET cate_accessory_id = ?, name = ?, price = ?, acces_image = ? WHERE id = ?";
    let param_update = [ cate_accessory_id, name, price, filename, id ];
    db.query(sql,param_update,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_accessory: result,
                message: "Update data accessory success"
            })
        }
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM accessory WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_accessory: data,
        message: "Delete data accessory success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}