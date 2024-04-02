const ct = require("../../controller/laptop/laptop.ct");
const { upload } = require("../../util/service");

const laptop = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.get(base_route + "/:id", ct.getOne);
    app.post(base_route, upload.single("lt_image"), ct.create);
    app.put(base_route, upload.single("lt_image"), ct.update);
    app.delete(base_route  + "/:id", ct.remove);
    
}
module.exports = laptop;