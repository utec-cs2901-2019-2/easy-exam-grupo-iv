package com.easyexam.g4.model.api;

import java.util.Date;
import java.util.List;

public class QuestionPOSTRequest {
    String creatorID;//done
    String title; //done
    Date creation_date;//done
    Boolean allowed; //constructor
    String answer; //done
    String description; //done
    List<Long> subcategories;


    public String getCreatorID() {
        return creatorID;
    }

    public String getTitle() {
        return title;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public Boolean getAllowed() {
        return allowed;
    }

    public String getAnswer() {
        return answer;
    }

    public String getDescription() {
        return description;
    }

    public List<Long> getSubcategories() {
        return subcategories;
    }
}
