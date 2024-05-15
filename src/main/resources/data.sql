/*CREATE TABLE LibraryItems (
                              title VARCHAR(255),
                              author VARCHAR(255),
                              isbn BIGINT,
                              -- reading_level INT CHECK (reading_level >= 1 AND reading_level <= 4),
                              -- publisher VARCHAR(255),
                              year_published INT,
                              -- genre VARCHAR(100)
);
*/
INSERT INTO library_item (title, author, isbn, year_published)
VALUES('King of Sloth', 'Ana Huang', 9780349436371, 2024),
('The Women', 'Kristin Hannah',9781250178633 ,2024),
('A Court of Thorns and Roses', 'Sarah J. Maas', 9781635575569, 2020),
('Funny Story','Emily Henry', 9780593441282,2024),
('Home is Where the Bodies Are', 'Jeneva Rose', 9798212182843, 2024),
('Only the Brave', 'Danielle Steel',9780593498439, 2024);
