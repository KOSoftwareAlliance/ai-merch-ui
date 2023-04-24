CREATE TABLE IF NOT EXISTS products (id SERIAL, name VARCHAR(100), description VARCHAR(250), price DECIMAL(10, 2), category_id INT NOT NULL, PRIMARY KEY(id), FOREIGN KEY(category_id) REFERENCES categories(id));

INSERT INTO products (name, description, price, category_id)
VALUES 
  ('T-shirt', 'Temporary description for t-shirt', 30.99, (SELECT id FROM categories WHERE name = 'Clothes')),
  ('Mug', 'Temporary description for mug', 15.59, (SELECT id FROM categories WHERE name = 'Mugs')),
  ('Picture', 'Temporary description for picture', 13.99, (SELECT id FROM categories WHERE name = 'Pictures'));