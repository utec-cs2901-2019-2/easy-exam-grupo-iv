package model;

import javax.persistence.Entity;
import java.util.ArrayList;

@Entity
public class Teacher extends User {
    ArrayList<Question> questions;
    ArrayList<Exam> exams;
    Integer points;
    Teacher(){
        points = 0;
    }
    //TODO FORMULA DE PUNTAJE
    public ArrayList<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Question> questions) {
        this.questions = questions;
    }

    public ArrayList<Exam> getExams() {
        return exams;
    }

    public void setExams(ArrayList<Exam> exams) {
        this.exams = exams;
    }
}
