
package com.easyexam.g4.model.api;

import java.util.Date;
import java.util.List;

public class QuestionPOSTRequest {
    public String creatorID;//done
    public String title; //done
    public Date creation_date;//done
    public Boolean allowed; //constructor
    public String answer; //done
    public String description; //done
    public List<Long> subcategories;

}