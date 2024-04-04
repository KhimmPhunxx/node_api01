const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')
 
const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM `second_hand`';
    const data = await db.query(sql);
    res.json({
        data_second_hand: data,
        message: "Get all data second hand success"
    })
}

const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM `second_hand` WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_second_hand: data,
        message: "Get data second hand success"
    })
}

// "name": "Dell Inspiron 15 3505",
// "price": 10990000,
// "description": "Dell Inspiron 15 3505",
// "image": "dell-inspiron-15-3505.jpg",

const create = async (req,res) =>{
    const {name,price,description} = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    if(isEmptyOrNull(name) || isEmptyOrNull(price) || isEmptyOrNull(description)){
        res.status(400).json({
            message: "Please fill all fields"
        })
    }else{
        const sql = 'INSERT INTO `second_hand`(`name`, `price`, `description`, `image`) VALUES (?,?,?,?)';
        const data = await db.query(sql,[name,price,description, filename ]);
        res.json({
            data_second_hand: data,
            message: "Create second hand success"
        })
    }
}

const update = async (req, res) =>{
    const {
        name,
        price,
        description,
        id
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }
    
    message = {}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}
    if(isEmptyOrNull(description)){message.description = "Description is required"}
    
    if(Object.keys(message).length > 0){
        return res.status(400).json({message: message})
    }

    const sql = 'UPDATE `second_hand` SET `name`=?,`price`=?,`description`=?,`image`=? WHERE id = ?';
    const data = await db.query(sql,[name,price,description, filename, id]);
    res.json({
        data_second_hand: data,
        message: "Update second hand success"
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM `second_hand` WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_second_hand: data,
        message: "Delete second hand success"
    })
}


module.exports = {
    getAll,
    create,
    getOne,
    update,
    remove

}