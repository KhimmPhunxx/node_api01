const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM `cate_pc_sets`';
    const data = await db.query(sql);
    res.json({
        data_cate_pc_sets: data,
        message: "Get all data cate_pc_sets success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM `cate_pc_sets` WHERE cate_pc_set_id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_cate_pc_sets: data,
        message: "Get data cate_pc_sets success"
    })
}

// "name": "PC Gaming",
// "image": "pc-gaming.jpg",

const create = async (req,res) =>{
    const { name } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(name)){
        res.status(400).json({
            message: "Please fill all fields"
        })
    }else{
        const sql = `INSERT INTO cate_pc_sets (name, image) VALUES (?,?)`;
        const data = await db.query(sql,[name, filename]);
        res.json({
            message: "Create data cate_pc_set success",
            data
        })
    }
}

const update = async (req, res) =>{
    const {
        name,
        cate_pc_set_id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(name)){
        res.status(400).json({
            message: "Please fill all fields"
        })
    }else{
        const sql = `UPDATE cate_pc_sets SET name = ?, image = ? WHERE cate_pc_set_id = ?`;
        const data = await db.query(sql,[name, filename, cate_pc_set_id]);
        res.json({
            message: "Update data cate_pc_set success",
            data
        })
    }
}

const remove = async (req, res) =>{
    const sql = `DELETE FROM cate_pc_sets WHERE cate_pc_set_id = ?`;
    const data = await db.query(sql,[req.params.id]);
    res.json({
        message: "Delete data cate_pc_set success",
        data
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}