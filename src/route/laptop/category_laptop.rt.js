const ct = require("../../controller/laptop/category_laptop.ct");
const { upload } = require("../../util/service");

const category_laptop = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.post(base_route, upload.single("image"), ct.create);
    app.put(base_route, upload.single("image"), ct.update);
    app.delete(base_route  + "/:laptop_cate_id", ct.remove);
    
}
module.exports = category_laptop;