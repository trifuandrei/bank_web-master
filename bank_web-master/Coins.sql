CREATE TABLE [dbo].[Table]
(
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  deleted BIT NOT NULL,
  [when] DATETIME NOT NULL,
  updated DATETIME NOT NULL
);

