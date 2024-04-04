// first NodeJS API
const express = require('express'); // import express
const app = express(); // extend
const cors = require("cors") // import cors

// allow origin (npm install cors)
app.use(cors({
  origin : "*"
}))
app.use(express.json()); // for parsing application/json
app.get("/",(req,res)=>{res.send("Hello PREYCODEBACKEND API");})

const laptop = require('./src/route/laptop/laptop.rt')
const category_laptop = require('./src/route/laptop/category_laptop.rt')
const pc_hw = require('./src/route/pc_hardware/pc_hw.rt')
const cate_pc_hw = require('./src/route/pc_hardware/cate_pc_hw.rt')
const accessory = require('./src/route/accessory/accessory.rt')
const cate_accessory = require('./src/route/accessory/cate_accessory.rt')
const peripheral = require('./src/route/peripheral/peripheral.rt')
const cate_per = require('./src/route/peripheral/cate_per.rt')
const pc_sets = require('./src/route/pc_set/pc_sets.rt')
const cate_pc_sets = require('./src/route/pc_set/cate_pc_set.rt')
const second_hand = require('./src/route/second_hand/second_hand.rt')

laptop(app, "/server_api/v1/laptop"); // call function
category_laptop(app, "/server_api/v1/cate_laptop"); // call function
pc_hw(app, "/server_api/v1/pc_hw"); // call function
cate_pc_hw(app, "/server_api/v1/cate_pc_hw"); // call function
accessory(app, "/server_api/v1/accessory"); // call function
cate_accessory(app, "/server_api/v1/cate_accessory"); // call function
peripheral(app, "/server_api/v1/peripheral"); // call function
cate_per(app, "/server_api/v1/cate_per"); // call function
pc_sets(app, "/server_api/v1/pc_sets"); // call function
cate_pc_sets(app, "/server_api/v1/cate_pc_sets"); // call function
second_hand(app, "/server_api/v1/second_hand"); // call function


app.listen(8081, () => {
  console.log('server http localhost:8081 is started...');
});
