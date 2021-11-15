--SQL DataBase named - app_festivall

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "clearance_level" INT
);

CREATE TABLE "performance" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "day_performing" TO_CHAR DATE,
    "stage_id" INT,
    "set_start" TIME,
    "set_finish" TIME,
    "description" VARCHAR (800),
    "link" VARCHAR (2083)
);

CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"performance_id" INT,
	"stage_id" INT
);

CREATE TABLE "stage" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (255)
);