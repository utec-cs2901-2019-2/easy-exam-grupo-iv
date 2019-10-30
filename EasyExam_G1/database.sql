
create table Exam
(
    college varchar(30),
    course varchar(30),
    creation_date date,
    max_points int,
    question_number int,
    rules text,
    specs text,
    title varchar(30),

);
create table Questions
(
    question_id serial,
    is_disabled bool,
    creation_date date,
    question_description text,
    title varchar(100),
    score int,
    pkey question_id,

);
create table Users
(
    is_mod bool,
    email VARCHAR(50),
    points int,

);
create table QuestionsPerUSer();
CREATE table QuestionsPerExam();
create table ReportsPerAdmin();
create table SubcategoriesPerQuestion();
create table categories();
create table Subcategories();
create table ExamsPerUser();