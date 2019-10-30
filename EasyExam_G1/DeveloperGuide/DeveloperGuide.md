# Developer guide
## Introduction
Easy exam is a plataform that helps both students and teachers streamline the question creation and validation problem. It does so by allowing teachers to create exams, "buying" an amount of problems with the score of questions that they themselves uploaded previously. Said questions will be rated by the public, filtering out bad problems organically.
# Features
## Accounts
+ Account creation: register
  + Verify account credentials
+ Verification of user session with sessions in js
## User actions
### Teacher
+ Observe questions
    + Select questions
    + Report questions
    + Rate question
    + See answers
+ Generate exam
    + Select Questions
+ Upload questions
    + Select question tags
    + Upload answers
+ Download exams 
### Mods
+ Ban users
+ Delete questions
+ Generate new tags
+ Read reports

## Diagrams

### Class Diagram
<img src = "img/Class.png">

### Architecture
<img src = "img/Architecture.png">

### View
<img src = "img/UI.png">

### Controller
<img src = "img/Controller.png">

### Model
<img src = "img/Model.png">

## Interaction Between Components

### Login
<img src = "img/LoginDiagram.png">

### Create Exam
<img src = "img/CreateExamDiagram.png">

## Glossary
 
 1. User: Someone who uses the plataform.
 2. Teacher: Someone who uploads questions or generates exams
 3. Moderator: Someone who has the power to delete users and questions
 4. Tags: Categories created to sort questions
 5. Report: Complaint about a question, allows mod to take action
 6. Rate: To give feedback on a question by liking or disliking
 7. Score: The sum of all ratings on a question

