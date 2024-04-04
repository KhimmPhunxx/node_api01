const ct = require("../../controller/second_hand/second_hand.ct");
const { upload } = require("../../util/service");

const second_hand = (app,base_route) => {
    app.get(base_route, ct.getAll);
    app.get(base_route+"/:id", ct.getOne);
    app.post(base_route, upload.single('image'), ct.create);
    app.put(base_route, upload.single('image'), ct.update);
    app.delete(base_route+"/:id", ct.remove);
}
module.exports = second_hand;