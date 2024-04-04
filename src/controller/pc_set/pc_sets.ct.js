const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM `pc_sets`';
    const data = await db.query(sql);
    res.json({
        data_pc_sets: data,
        message: "Get all data pc_sets success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM `pc_sets` WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_sets: data,
        message: "Get data pc_sets success"
    })
}

// "cate_pc_set_id": 1,
// "name": "PC Gaming",
// "price": 14990000,
// "image": "pc-gaming.jpg",

const create = async (req,res) =>{
    const { cate_pc_set_id, name, price } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(cate_pc_set_id) || isEmptyOrNull(name) || isEmptyOrNull(price)){
        res.status(400).json({
            message: "Please fill all fields"
        })
    }else{
        const sql = `INSERT INTO pc_sets (cate_pc_set_id, name, price, image) VALUES (?,?,?,?)`;
        const data = await db.query(sql,[cate_pc_set_id, name, price, filename]);
        res.json({
            message: "Create data pc_set success",
            data
        })
    }
}

const update = async (req, res) =>{
    const {
        cate_pc_set_id,
        name,
        price,
        id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }
    
    message = {}
    if(isEmptyOrNull(cate_pc_set_id)){message.cate_pc_set_id = "Category PC Set is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}
    
    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }
    const sql = `UPDATE pc_sets SET cate_pc_set_id = ?, name = ?, price = ?, image = ? WHERE id = ?`;
    const data = await db.query(sql, [cate_pc_set_id, name, price, filename, id]);
    res.json({
        message: "Update data pc_set success",
        data
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM pc_sets WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_sets: data,
        message: "Delete data pc_set success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}