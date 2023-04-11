CREATE TABLE IF NOT EXISTS categories (id SERIAL, name VARCHAR(100), PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS settings (id SERIAL, name VARCHAR(100), value VARCHAR(100), PRIMARY KEY (id));
CREATE TABLE IF NOT EXISTS categories_settings 
  (id SERIAL, category_id INT NOT NULL, setting_id INT NOT NULL, PRIMARY KEY (id), FOREIGN KEY (category_id) REFERENCES categories(id), FOREIGN KEY (setting_id) REFERENCES settings(id));

INSERT INTO categories (name)
VALUES 
  ('Clothes'),
  ('Mugs'),
  ('Pictures');

INSERT INTO settings (name, value)
VALUES
  ('Size', 'S'),
  ('Size', 'M'),
  ('Size', 'L'),
  ('Size', 'XL'),
  ('Size', 'XXL');

INSERT INTO categories_settings (category_id, setting_id)
  SELECT c.id, s.id
    FROM categories c, settings s
    WHERE c.name = 'Clothes' AND s.name = 'Size';