create database titflexapi;

use titflexapi;

CREATE TABLE user
(
    ID INT PRIMARY KEY NOT NULL,
    username VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(255),
    pays VARCHAR(255),
    ville VARCHAR(255)
);

CREATE TABLE subscription
(
    ID INT PRIMARY KEY NOT NULL,
    type ENUM('trial', 'avtive'),
    startDate date,
    endDate date,
    price DOUBLE,
    refUser INT,
    FOREIGN KEY (refUser) REFERENCES user(ID)
);

CREATE TABLE watchlist
(
    ID INT PRIMARY KEY NOT NULL,
    refOwner INT,
    FOREIGN KEY (refOwner) REFERENCES user(ID)
);

create table movie
(
	ID INT PRIMARY KEY NOT NULL,
    name varchar(100),
    synopsis VARCHAR(300),
    path varchar(200),
    category varchar(100),
    watchTime INT
);

create table watchListMovies
(
	refWatchList INT NOT NULL,
    refMovie INT NOT NULL,
    primary key (refWatchList, refMovie),
    foreign key (refWatchList) references watchList(ID),
    foreign key (refMovie) references movie(ID)
);


create table room
(
	ID INT PRIMARY KEY NOT NULL,
    name varchar(200),
    maxUsers int default 1,
    visibility enum('public', 'private') default 'public',
    refOwner INT NOT NULL,
    refWatchList INT,
    FOREIGN KEY (refOwner) REFERENCES user(ID), 
    foreign key (refWatchList) references watchList(ID)
);

create table roomUsers
(
	refRoom INT not null,
    refUser int not null,
    primary key (refRoom, RefUser),
    foreign key (refRoom) references room(ID)
);
