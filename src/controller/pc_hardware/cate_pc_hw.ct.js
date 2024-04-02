const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM cate_pc_hw';
    const data = await db.query(sql);
   res.json({
        data_pc_hw: data,
        message: "Get all data pc_hw success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM cate_pc_hw WHERE cate_pc_hw_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_hw: data,
        message: "Get data pc_hw success"
    })
}

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
        return res.status(400).json({message: message})
    }
    
    const sql = 'INSERT INTO cate_pc_hw (name, image) VALUES (?,?)';
    const data = await db.query(sql, [name, filename]);
    res.json({
        data_pc_hw: data,
        message: "Create data pc_hw success"
    })
}

const update = async (req, res) =>{
    const {
        name,
        cate_pc_hw_id
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
    
    const sql = 'UPDATE cate_pc_hw SET name = ?, image = ? WHERE cate_pc_hw_id = ?';
    const data = await db.query(sql, [name, filename, cate_pc_hw_id]);
    res.json({
        data_pc_hw: data,
        message: "Update data pc_hw success"
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM cate_pc_hw WHERE cate_pc_hw_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_hw: data,
        message: "Remove data pc_hw success"
    })
}

module.exports = {
    getAll,
    create,
    getOne,
    update,
    remove
}

