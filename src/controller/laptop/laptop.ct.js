const { isEmptyOrNull } = require('../../util/service');
const db = require('../../util/db')

const getAll = async (req,res) =>{
    const sql = 'SELECT * FROM laptop';
    const data = await db.query(sql);
   res.json({
        data_laptop: data,
        message: "Get all data laptop success"
    })
}


const getOne = async (req, res) =>{
    const sql = 'SELECT * FROM laptop WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_laptop: data,
        message: "Get data laptop success"
    })
}

const create = async (req, res) =>{
    const {
        laptop_cate_id,
        name,
        price,
        desc,
        cpu,
        ram,
        storage,
        graphic,
        display,
        keyboard,
        os,
        weigh,
        warranty1,
        warranty2,
        free1,
        free2,
        free3
    } = req.body;
    
    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(laptop_cate_id)){message.laptop_cate_id = "Laptop_cate_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}
    if(isEmptyOrNull(desc)){message.desc = "Description is required"}
    if(isEmptyOrNull(cpu)){message.cpu = "CPU is required"}
    if(isEmptyOrNull(ram)){message.ram = "RAM is required"}
    if(isEmptyOrNull(storage)){message.storage = "Storage is required"}
    if(isEmptyOrNull(graphic)){message.graphic = "Graphic is required"}
    if(isEmptyOrNull(display)){message.display = "Display is required"}
    if(isEmptyOrNull(keyboard)){message.keyboard = "Keyboard is required"}
    if(isEmptyOrNull(os)){message.os = "OS is required"}
    if(isEmptyOrNull(weigh)){message.weigh = "Weigh is required"}
    if(isEmptyOrNull(warranty1)){message.warranty1 = "Warranty1 is required"}
    if(isEmptyOrNull(warranty2)){message.warranty2 = "Warranty2 is required"}
    if(isEmptyOrNull(free1)){message.free1 = "Free1 is required"}
    if(isEmptyOrNull(free2)){message.free2 = "Free2 is required"}
    if(isEmptyOrNull(free3)){message.free3 = "Free3 is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "INSERT INTO `laptop` (`laptop_cate_id`, `name`, `price`, `desc`, `cpu`, `ram`, `storage`, `graphic`, `display`, `keyboard`, `os`, `weigh`, `warranty1`, `warranty2`, `free1`, `free2`, `free3`, `lt_image`)" +
              " VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    let param_create = [
        laptop_cate_id,
        name,
        price,
        desc,
        cpu,
        ram,
        storage,
        graphic,
        display,
        keyboard,
        os,
        weigh,
        warranty1,
        warranty2,
        free1,
        free2,
        free3,
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
                message: "Create data laptop success"
            })
        }
    })
}

const update = async (req, res) =>{
    const {
        id,
        laptop_cate_id,
        name,
        price,
        desc,
        cpu,
        ram,
        storage,
        graphic,
        display,
        keyboard,
        os,
        weigh,
        warranty1,
        warranty2,
        free1,
        free2,
        free3
    } = req.body;

    let filename = null
    if(req.file){
         filename = req.file.filename
    }

    message = {}
    if(isEmptyOrNull(laptop_cate_id)){message.laptop_cate_id = "Laptop_cate_id is required"}
    if(isEmptyOrNull(name)){message.name = "Name is required"}
    if(isEmptyOrNull(price)){message.price = "Price is required"}
    if(isEmptyOrNull(desc)){message.desc = "Description is required"}
    if(isEmptyOrNull(cpu)){message.cpu = "CPU is required"}
    if(isEmptyOrNull(ram)){message.ram = "RAM is required"}
    if(isEmptyOrNull(storage)){message.storage = "Storage is required"}
    if(isEmptyOrNull(graphic)){message.graphic = "Graphic is required"}
    if(isEmptyOrNull(display)){message.display = "Display is required"}
    if(isEmptyOrNull(keyboard)){message.keyboard = "Keyboard is required"}
    if(isEmptyOrNull(os)){message.os = "OS is required"}
    if(isEmptyOrNull(weigh)){message.weigh = "Weigh is required"}
    if(isEmptyOrNull(warranty1)){message.warranty1 = "Warranty1 is required"}
    if(isEmptyOrNull(warranty2)){message.warranty2 = "Warranty2 is required"}
    if(isEmptyOrNull(free1)){message.free1 = "Free1 is required"}
    if(isEmptyOrNull(free2)){message.free2 = "Free2 is required"}
    if(isEmptyOrNull(free3)){message.free3 = "Free3 is required"}

    if(Object.keys(message).length > 0){
        res.json({
            message: message,
            error: true
        })
        return;
    }

    let sql = "UPDATE `laptop` SET  `laptop_cate_id` = ?, `name` = ?, `price` = ?, `desc` = ?, `cpu` = ?, `ram` = ?, `storage` = ?, `graphic` = ?, `display` = ?, `keyboard` = ?, `os` = ?, `weigh` = ?, `warranty1` = ?, `warranty2` = ?, `free1` = ?, `free2` = ?, `free3` = ?, `lt_image` = ? WHERE `id` = ?";
    let param_update = [
        laptop_cate_id,
        name,
        price,
        desc,
        cpu,
        ram,
        storage,
        graphic,
        display,
        keyboard,
        os,
        weigh,
        warranty1,
        warranty2,
        free1,
        free2,
        free3,
        filename,
        id
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
                message: "Update data laptop success"
            })
        }
    })
}

const remove = async (req, res) =>{
    const sql = 'DELETE FROM laptop WHERE id = ?';
    const data = await db.query(sql, [req.params.id]);
    res.json({
        data_laptop: data,
        message: "Remove data laptop success"
    })
}



module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
}