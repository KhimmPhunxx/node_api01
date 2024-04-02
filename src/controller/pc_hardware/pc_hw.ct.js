const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM pc_hw';
    const data = await db.query(sql);
   res.json({
        data_pc_hw: data,
        message: "Get all data pc_hw success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM pc_hw WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_hw: data,
        message: "Get data pc_hw success"
    })
}

const create = async (req, res) =>{
    const {
        cate_pc_hw_id,
        name,
        spec1,
        spec2,
        spec3,
        spec4,
        price1,
        price2,
        price3,
        price4
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(cate_pc_hw_id)){message.cate_pc_hw_id = "Cate_pc_hw_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(spec1)){message.spec1 = "Spec1 is required"}
    if(isEmptyOrNull(spec2)){message.spec2 = "Spec2 is required"}
    if(isEmptyOrNull(spec3)){message.spec3 = "Spec3 is required"}
    if(isEmptyOrNull(spec4)){message.spec4 = "Spec4 is required"}
    if(isEmptyOrNull(price1)){message.price1 = "Price1 is required"}
    if(isEmptyOrNull(price2)){message.price2 = "Price2 is required"}
    if(isEmptyOrNull(price3)){message.price3 = "Price3 is required"}
    if(isEmptyOrNull(price4)){message.price4 = "Price4 is required"}

    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }

    const sql = "INSERT INTO pc_hw (cate_pc_hw_id, name, spec1, spec2, spec3, spec4, price1, price2, price3, price4, image)" +
                " VALUES (?,?,?,?,?,?,?,?,?,?,?)";
    const param = [ cate_pc_hw_id, name, spec1, spec2, spec3, spec4, price1, price2, price3, price4, filename];
    const data = await db.query(sql, param);
    res.json({
        data_pc_hw: data,
        message: "Create data pc_hw success"
    })
}

const update = async (req, res) =>{
    const {
        cate_pc_hw_id,
        name,
        spec1,
        spec2,
        spec3,
        spec4,
        price1,
        price2,
        price3,
        price4,
        id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }
    
    message = {}
    if(isEmptyOrNull(cate_pc_hw_id)){message.cate_pc_hw_id = "Cate_pc_hw_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(spec1)){message.spec1 = "Spec1 is required"}
    if(isEmptyOrNull(spec2)){message.spec2 = "Spec2 is required"}
    if(isEmptyOrNull(spec3)){message.spec3 = "Spec3 is required"}
    if(isEmptyOrNull(spec4)){message.spec4 = "Spec4 is required"}
    if(isEmptyOrNull(price1)){message.price1 = "Price1 is required"}
    if(isEmptyOrNull(price2)){message.price2 = "Price2 is required"}
    if(isEmptyOrNull(price3)){message.price3 = "Price3 is required"}
    if(isEmptyOrNull(price4)){message.price4 = "Price4 is required"}
    
    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }
    
    const sql = 'UPDATE pc_hw SET cate_pc_hw_id = ?, name = ?, spec1 = ?, spec2 = ?, spec3 = ?, spec4 = ?, price1 = ?, price2 = ?, price3 = ?, price4 = ?, image = ? WHERE id = ?';
    const param = [cate_pc_hw_id, name, spec1, spec2, spec3, spec4, price1, price2, price3, price4, filename, id];
    const data = await db.query(sql, param);
    res.json({
        data_pc_hw: data,
        message: "Update data pc_hw success"
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM pc_hw WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_pc_hw: data,
        message: "Delete data pc_hw success"
    })
}

module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}