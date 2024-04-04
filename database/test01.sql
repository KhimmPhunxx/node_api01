
INSERT INTO `laptop_category`( `name`, `image`) 
VALUES ('Dell', 'dell.jpg');



INSERT INTO `laptop`(`laptop_cate_id`, `name`, `price`, `desc`, `cpu`, `ram`, `storage`, `graphic`, `display`, `keyboard`, `os`, `weigh`, `warranty1`, `warranty2`, `free1`, `free2`, `free3`, `image`) 
VALUES (1, 'Dell Inspiron 15 3505', 10990000, 'Dell Inspiron 15 3505', 'AMD Ryzen 5 3450U', '8GB', '256GB SSD', 'AMD Radeon Vega 8', '15.6 inch FHD (1920 x 1080)', 'Standard Keyboard', 'Windows 10 Home', '1.83 kg', '12 tháng', '12 tháng', 'Túi xách', 'Chuột không dây', 'Bàn di chuột', 'dell-inspiron-15-3505.jpg');

INSERT INTO `pc_hw`(`name`, `spec1`, `spec2`, `spec3`, `spec4`, `price1`, `price2`, `price3`, `price4`, `image`) 
VALUES ('PC Gaming', 'CPU: Intel Core i5-10400F', 'RAM: 8GB', 'VGA: GTX 1650 4GB', 'SSD: 240GB', 14990000, 15990000, 16990000, 17990000, 'pc-gaming.jpg');


INSERT INTO `cate_pc_hw`(`name`, `image`) VALUES ('PC Gaming', 'pc-gaming.jpg');

INSERT INTO `accessory`( `name`, `price`, `acces_image`)
VALUES ('Chuột không dây', 250000, 'chuot-khong-day.jpg');



INSERT INTO `accessory`( `name`, `price`, `acces_image`)
VALUES ('AX6600 Tri-Band Wi-Fi 6 Router ( Archer AX90 )', 5990000, 'AX6600-Tri-Band-Wi-Fi-6-Router-Archer-AX90.jpg');

INSERT INTO `cate_accessory`(`name`, `image`) VALUES ('Router', 'AX6600-Tri-Band-Wi-Fi-6-Router-Archer-AX90.jpg');

INSERT INTO `peripheral`(`name`, `price`, `image`) 
VALUES ('Bàn di chuột', 50000, 'ban-di-chuot.jpg');


INSERT INTO `cate_per`( `namae`, `image`) 
VALUES ('Bàn di chuột', 'ban-di-chuot.jpg');


INSERT INTO `pc_sets`( `cate_pc_set_id`, `name`, `price`, `image`) 
VALUES (1, 'PC Gaming', 14990000, 'pc-gaming.jpg');



INSERT INTO `cate_pc_sets`( `name`, `image`) 
VALUES ('PC Gaming', 'pc-gaming.jpg');


INSERT INTO `second_hand`(`name`, `price`, `description`, `image`)
 VALUES ('Dell Inspiron 15 3505', 10990000, 'Dell Inspiron 15 3505', 'dell-inspiron-15-3505.jpg');



















