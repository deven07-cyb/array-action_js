CREATE TABLE product
(
	product_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(255) NOT NULL,
        product_price INT NOT NULL,
	PRIMARY KEY (product_id)
);

CREATE TABLE categories
(
	categories_id INT NOT NULL AUTO_INCREMENT,
        categories_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (categories_id)
);

CREATE TABLE product_categories
(
	product_id INT NOT NULL ,
        categories_id INT NOT NULL ,
        FOREIGN KEY(product_id) REFERENCES product(product_id),
        FOREIGN KEY(categories_id) REFERENCES categories(categories_id)
);

INSERT INTO product(product_id,product_name,product_price)
VALUE
(1,"Apple",200000),
(2,"Vivo",50000),
(3,"Redmi",10000),
(4,"Samsung",130000),
(5,"oppo",70000);

INSERT INTO categories(categories_id,categories_name)
VALUE
(101,"I_phone_13"),
(102,"vivo_v20"),
(103,"9 pro max"),
(104,"s22 ultra"),
(105,"reno 5");

INSERT INTO product_categories(product_id,categories_id)
VALUE
(1,101),
(2,102),
(3,103),
(4,104),
(5,105);


























