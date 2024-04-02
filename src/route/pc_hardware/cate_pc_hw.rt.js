const ct = require("../../controller/pc_hardware/cate_pc_hw.ct");
const { upload } = require("../../util/service");

const cate_pc_hw = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.get(base_route + "/:id", ct.getOne);
    app.post(base_route, upload.single("image"), ct.create);
    app.put(base_route, upload.single("image"), ct.update);
    app.delete(base_route  + "/:id", ct.remove);
   
    
}
module.exports = cate_pc_hw;