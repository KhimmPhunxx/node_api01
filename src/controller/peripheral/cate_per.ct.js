const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM `cate_per`';
    const data = await db.query(sql);
    res.json({
        data_peripheral: data,
        message: "Get all data peripheral success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM `cate_per` WHERE cate_per_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_peripheral: data,
        message: "Get data peripheral success"
    })
}

const create = async (req,res) =>{
    const {name} = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(name)){
        res.status(400).json({
            message: "Name is required"
        })
        return;
    }
    const sql = `INSERT INTO cate_per (name, image) VALUES ( ?, ?)`;
    const data = await db.query(sql, [name, filename]);
    res.json({
        data_peripheral: data,
        message: "Create data peripheral success"
    })
}

const update = async (req, res) =>{
    const {
        name,
        cate_per_id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }
    
    message = {}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    
    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }
    
    const sql = 'UPDATE cate_per SET name = ?, image = ? WHERE cate_per_id = ?';
    const data = await db.query(sql, [name, filename, cate_per_id]);
    res.json({
        data_peripheral: data,
        message: "Update data peripheral success"
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM cate_per WHERE cate_per_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_peripheral: data,
        message: "Delete data peripheral success"
    })
}

module.exports = {
    getAll,
    create,
    getOne,
    update,
    remove
}