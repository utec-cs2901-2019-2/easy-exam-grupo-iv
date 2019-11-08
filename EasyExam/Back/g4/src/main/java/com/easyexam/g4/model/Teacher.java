package com.easyexam.g4.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Teacher {
    @Id
    private String email;

    private String last_name;
    private String name;
    private String password;
    private String phone;
    private Boolean isAdmin;

    private Integer points;

    @OneToMany(mappedBy = "creator")
    private List<Question> questions;

    @OneToMany(mappedBy = "creator")
    private List<Exam> exams;

    @OneToMany(mappedBy = "creator")
    private List<Reports> reports;

    public Teacher(String email, String last_name, String name, String password, String phone, boolean _isadmin){
        this.setEmail(email);
        this.setLast_name(last_name);
        this.setName(name);
        this.setPassword(password);
        this.setPhone(phone);
        points = 0;
        isAdmin = _isadmin;
    }
    public Teacher(){}
    //TODO FORMULA DE PUNTAJE
    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public List<Exam> getExams() {
        return exams;
    }

    public void setExams(List<Exam> exams) {
        this.exams = exams;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getPoints() {
        return points;
    }

    public Boolean getAdmin() {
        return isAdmin;
    }
}
