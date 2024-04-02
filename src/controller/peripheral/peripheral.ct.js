const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM `peripheral`';
    const data = await db.query(sql);
    res.json({
        data_peripheral: data,
        message: "Get all data peripheral success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM `peripheral` WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_peripheral: data,
        message: "Get data peripheral success"
    })
}


const create = async (req,res) =>{
    const {name,price} = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(name) || isEmptyOrNull(price)){
        res.status(400).json({
            message: "Name and price is required"
        })
        return;
    }
    const sql = `INSERT INTO peripheral (name,price, per_image) VALUES ( ?, ?, ?)`;
    const data = await db.query(sql, [name, price, filename]);
    res.json({
        data_peripheral: data,
        message: "Create data peripheral success"
    })
}

const update = async (req, res) =>{
    const {
        name,
        price,
        id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }
    
    message = {}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}
    
    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }
    
    const sql = 'UPDATE peripheral SET name = ?, price = ?, per_image = ? WHERE id = ?';
    const data = await db.query(sql, [name, price, filename, id]);
    res.json({
        data_peripheral: data,
        message: "Update data peripheral success"
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM peripheral WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_peripheral: data,
        message: "Delete data peripheral success"
    })
}



module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
    
}