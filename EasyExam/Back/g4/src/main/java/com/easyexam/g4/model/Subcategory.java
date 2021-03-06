package com.easyexam.g4.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.List;

@Entity
public class Subcategory {
    @Id
    public long id;

    public String name;

    @ManyToOne
    private Category category;

    @ManyToMany(mappedBy = "subcategory")
    private List<Question> questions;

    public Subcategory() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
