-- Column Required 
    --item_id (unique id for each product)
    --product_name (Name of product)
    --department_name
    --price (cost to customer)
    --stock_quantity (how much of the product is available in stores)

-- If there is database name bamazon exist delete 
DROP DATABASE IF EXISTS bamazon;

--Create DATABASE 'bamazon'
CREATE DATABASE bamazon;

-- Use Database 'bamazon'

USE bamazon;

-- Create a table 'products' with different columns - item_id, product_name, department_name, price, stocke_quantity 

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL (10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products(product_name,department_name,price,stock_quantity) Values
("TV","Electronics",200,40),
("Sofa","Furniture",499.99,50),
("Computer Table","Furniture",200,99),
("Learn Node JS","Books",39.99,200),
("Apple","Foods",1.99,2000),
("Coffee Machine","Appliance",45,399),
("Car Tires","Auto Cars & Repairs",300,500),
("MS-OFFICE","Software",200,90),
("LED LIGHTS","Electronics",21,23),
("Computer Table","Furniture",300,400);





;