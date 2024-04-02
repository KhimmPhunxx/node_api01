const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM cate_accessory';
    const data = await db.query(sql);
   res.json({
        data_cate_accessory: data,
        message: "Get all data cate_accessory success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM cate_accessory WHERE cate_accessory_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_cate_accessory: data,
        message: "Get data cate_accessory success"
    })
}

const create = async (req, res) =>{
    const {
        name
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

    let sql = "INSERT INTO `cate_accessory` (`name`, `image`) VALUES (?, ?)";
    let param_create = [ name, filename ];
    db.query(sql,param_create,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_cate_accessory: result,
                message: "Create data cate_accessory success"
            })
        }
    })
}

const update = async (req, res) =>{
    const {
        cate_accessory_id,
        name
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(cate_accessory_id)){message.cate_accessory_id = "Cate_accessory_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "UPDATE `cate_accessory` SET `name` = ?, `image` = ? WHERE `cate_accessory_id` = ?";
    let param_update = [ name, filename, cate_accessory_id ];
    db.query(sql,param_update,(err,result)=>{
        if(err){
            res.json({
                message:err,
                error:true
            })
        }else{
            res.json({
                data_cate_accessory: result,
                message: "Update data cate_accessory success"
            })
        }
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM cate_accessory WHERE cate_accessory_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_cate_accessory: data,
        message: "Delete data cate_accessory success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}