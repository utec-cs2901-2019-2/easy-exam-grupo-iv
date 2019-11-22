package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Question;

import java.util.Date;
import java.util.List;

public class CompileRequest {
    public String college;
    public String course;
    public String rules;
    public String specs;
    public String title;
    public String subcategory;
    public Date creation_date;
    public Date exam_date;
    public int max_points;
    public int question_number;

    public String creator;
    public List<Question> questions;

    public Boolean solution;

    public List<Integer> scores;
}


