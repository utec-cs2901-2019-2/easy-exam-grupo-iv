package model;

import javax.persistence.Entity;

@Entity
public class Subcategory {
    String name;
    Category category;
}
