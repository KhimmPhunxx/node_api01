const ct = require("../../controller/pc_hardware/pc_hw.ct");
const { upload } = require("../../util/service");

const pc_hw = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.get(base_route + "/:id", ct.getOne);
    app.post(base_route, upload.single("image"), ct.create);
    app.put(base_route, upload.single("image"), ct.update);
    app.delete(base_route  + "/:id", ct.remove);
   
    
}
module.exports = pc_hw;