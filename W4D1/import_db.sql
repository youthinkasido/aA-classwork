PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS users;
CREATE TABLE users ( 
id INTEGER PRIMARY KEY,
fname TEXT,
lname TEXT
);

INSERT INTO users (fname, lname)
VALUES
    ('Tony', 'Gunk'),
    ('Darnell', 'Skinoosh'),
    ('Sterjel', 'Logginz');


-- -------QUESTIONS--------------

DROP TABLE IF EXISTS questions;
CREATE TABLE questions (
id INTEGER PRIMARY KEY,
title TEXT,
body  TEXT,
author_id INTEGER NOT NULL,

FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO questions(title, body, author_id)
SELECT 'BAD QUESTION', 'this is a terrible question', users.id
FROM users
WHERE fname = 'Tony' AND lname = 'Gunk';

INSERT INTO questions (title, body, author_id)
SELECT 'OKAY QUESTION', 'this is an alright question', users.id
FROM users
WHERE fname = 'Darnell' AND lname = 'Skinoosh';

INSERT INTO questions (title, body, author_id)
SELECT 'WEIRD QUESTION', 'things are getting weird', users.id
FROM users
WHERE fname = 'Sterjel' AND lname = 'Logginz';

-- INSERT INTO table2
--     (column1, column2, column3, ...)
-- SELECT column1, column2, column3, ...
-- FROM table1
-- WHERE condition;

-- INSERT INTO table-name (column-names)
-- SELECT column-names
-- FROM table-name
-- WHERE condition


DROP TABLE IF EXISTS question_follows;
CREATE TABLE question_follows(
id INTEGER PRIMARY KEY,
follower_id INTEGER NOT NULL,
question_id INTEGER NOT NULL,

FOREIGN KEY (follower_id) REFERENCES users(id),
FOREIGN KEY (question_id) REFERENCES questions(id)
);

DROP TABLE IF EXISTS replies;
CREATE TABLE replies(
id INTEGER PRIMARY KEY,
question_id INTEGER,
parent_reply_id INTEGER,
author_id INTEGER,
body TEXT,

FOREIGN KEY (author_id) REFERENCES users(id),
FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO replies
    (question_id, parent_reply_id, author_id, body)
VALUES
    ((SELECT id
        FROM questions
        WHERE title = 'BAD QUESTION'),
        NULL,
        (SELECT id
        FROM users
        WHERE fname = 'Tony' AND lname = 'Gunk'),
        'It was not so good!');



DROP TABLE IF EXISTS question_likes;
CREATE TABLE question_likes(
id INTEGER PRIMARY KEY,
user_id INTEGER,
question_id INTEGER,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (question_id) REFERENCES questions(id)
);









-- Based
-- on the SQL standard, PRIMARY KEY should always imply NOT NULL . ... Therefore, it has been decided to allow NULL values in most PRIMARY KEY columns. Once a NOT NULL constraint is attached to a column, any attempt to
-- set the
-- column value to NULL such as inserting or updating will cause a constraint violation.