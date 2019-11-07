package model;

import java.util.ArrayList;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class Question {
    @Id
    @GeneratedValue
            (strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private Date creation_date;
    private Boolean allowed;
    private String answer;
    private String description;
    private Integer score;
    private Teacher creator;
    private ArrayList<Subcategory> subcategory;

    public Question() {
        score = 0;
    }

    public void like() {
        score++;
    }

    public void dislike() {
        score--;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Boolean getAllowed() {
        return allowed;
    }

    public void setAllowed(Boolean allowed) {
        this.allowed = allowed;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Teacher getCreator() {
        return creator;
    }

    public void setCreator(Teacher creator) {
        this.creator = creator;
    }

    public ArrayList<Subcategory> getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(ArrayList<Subcategory> subcategory) {
        this.subcategory = subcategory;
    }


}
