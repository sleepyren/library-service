/*CREATE TABLE LibraryItems (
                              title VARCHAR(255),
                              author VARCHAR(255),
                              isbn BIGINT,
                              -- reading_level INT CHECK (reading_level >= 1 AND reading_level <= 4),
                              -- publisher VARCHAR(255),
                              year_published INT,
                              -- genre VARCHAR(100)
);

INSERT INTO library_item (title, author, isbn, year_published)
VALUES('King of Sloth', 'Ana Huang', 9780349436371, 2024),
('The Women', 'Kristin Hannah',9781250178633 ,2024),
('A Court of Thorns and Roses', 'Sarah J. Maas', 9781635575569, 2020),
('Funny Story','Emily Henry', 9780593441282,2024),
('Home is Where the Bodies Are', 'Jeneva Rose', 9798212182843, 2024),
('Only the Brave', 'Danielle Steel',9780593498439, 2024);

 */

INSERT INTO library_item (title, author, isbn, year_published)
VALUES
    ('King of Sloth', 'Ana Huang', 9780349436371, 2024),
    ('The Women', 'Kristin Hannah', 9781250178633, 2024),
    ('A Court of Thorns and Roses', 'Sarah J. Maas', 9781635575569, 2020),
    ('Funny Story', 'Emily Henry', 9780593441282, 2024),
    ('Home is Where the Bodies Are', 'Jeneva Rose', 9798212182843, 2024),
    ('Only the Brave', 'Danielle Steel', 9780593498439, 2024),
    ('The Silent Patient', 'Alex Michaelides', 9781250301697, 2019),
    ('Where the Crawdads Sing', 'Delia Owens', 9780735219090, 2018),
    ('The Nightingale', 'Kristin Hannah', 9780312577223, 2015),
    ('Becoming', 'Michelle Obama', 9781524763138, 2018),
    ('Educated', 'Tara Westover', 9780399590504, 2018),
    ('The Great Alone', 'Kristin Hannah', 9780312577230, 2018),
    ('Little Fires Everywhere', 'Celeste Ng', 9780735224315, 2017),
    ('The Tattooist of Auschwitz', 'Heather Morris', 9780062797155, 2018),
    ('Before We Were Strangers', 'Renée Carlino', 9781501105777, 2015),
    ('The Alchemist', 'Paulo Coelho', 9780062315007, 1988),
    ('To Kill a Mockingbird', 'Harper Lee', 9780060935467, 1960),
    ('Pride and Prejudice', 'Jane Austen', 9781503290563, 1813),
    ('1984', 'George Orwell', 9780451524935, 1949),
    ('The Catcher in the Rye', 'J.D. Salinger', 9780316769488, 1951),
    ('The Hobbit', 'J.R.R. Tolkien', 9780547928227, 1937),
    ('Fahrenheit 451', 'Ray Bradbury', 9781451673319, 1953),
    ('The Book Thief', 'Markus Zusak', 9780375842207, 2005),
    ('Gone Girl', 'Gillian Flynn', 9780307588371, 2012),
    ('The Girl on the Train', 'Paula Hawkins', 9781594634024, 2015),
    ('The Help', 'Kathryn Stockett', 9780425232200, 2009),
    ('The Da Vinci Code', 'Dan Brown', 9780307474278, 2003),
    ('The Road', 'Cormac McCarthy', 9780307387899, 2006),
('Life of Pi', 'Yann Martel', 9780156027328, 2001),
('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', 9780590353427, 1997),
('The Hunger Games', 'Suzanne Collins', 9780439023481, 2008),
('The Maze Runner', 'James Dashner', 9780385737951, 2009),
('Divergent', 'Veronica Roth', 9780062024039, 2011),
('The Fault in Our Stars', 'John Green', 9780525478812, 2012),
('Me Before You', 'Jojo Moyes', 9780143124542, 2012);

