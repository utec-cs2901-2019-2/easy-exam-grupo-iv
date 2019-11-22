package com.easyexam.g4.model.api;

import java.util.Date;
import java.util.List;

public class QuestionPOSTRequest {
    long creatorID;
    String title;
    Date creation_date;
    Boolean allowed;
    String answer;
    String description;
    List<Long> subcategories;


}
