package model;

import java.util.ArrayList;
import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Exam {

    String college;
    String course;
    String rules;
    String specs;
    String title;
    Date creation_date;
    Date exam_date;
    int max_points;
    int question_number;
    Teacher creator;
    ArrayList<Question> questions;
    ArrayList<Subcategory> subcategories;


    public Exam() {
    }

    public Exam(String college, String course, String rules, String specs, String title, Date creation_date, Date exam_date, int max_points, int question_number, Teacher creator, ArrayList<Question> questions, ArrayList<Subcategory> subcategories) {
        this.college = college;
        this.course = course;
        this.rules = rules;
        this.specs = specs;
        this.title = title;
        this.creation_date = creation_date;
        this.exam_date = exam_date;
        this.max_points = max_points;
        this.question_number = question_number;
        this.creator = creator;
        this.questions = questions;
        this.subcategories = subcategories;
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }

    public String getSpecs() {
        return specs;
    }

    public void setSpecs(String specs) {
        this.specs = specs;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public Date getExam_date() {
        return exam_date;
    }

    public void setExam_date(Date exam_date) {
        this.exam_date = exam_date;
    }

    public int getMax_points() {
        return max_points;
    }

    public void setMax_points(int max_points) {
        this.max_points = max_points;
    }

    public int getQuestion_number() {
        return question_number;
    }

    public void setQuestion_number(int question_number) {
        this.question_number = question_number;
    }

    public Teacher getCreator() {
        return creator;
    }

    public void setCreator(Teacher creator) {
        this.creator = creator;
    }

    public ArrayList<Subcategory> getSubcategories() {
        return subcategories;
    }

    public void setSubcategories(ArrayList<Subcategory> subcategories) {
        this.subcategories = subcategories;
    }

    public ArrayList<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(ArrayList<Question> questions) {
        this.questions = questions;
    }
}
