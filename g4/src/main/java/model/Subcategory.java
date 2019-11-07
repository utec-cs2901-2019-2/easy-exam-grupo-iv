package model;

import javax.persistence.Entity;

@Entity
public class Subcategory {
    String name;
    Category category;

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
}
