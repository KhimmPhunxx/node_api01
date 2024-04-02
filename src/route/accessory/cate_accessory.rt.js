const ct = require("../../controller/accessory/cate_accessory.ct");
const { upload } = require("../../util/service");

const cate_accessory = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.get(base_route + "/:id", ct.getOne);
    app.post(base_route, upload.single("image"), ct.create);
    app.put(base_route, upload.single("image"), ct.update);
    app.delete(base_route  + "/:id", ct.remove);
   
}
module.exports = cate_accessory;