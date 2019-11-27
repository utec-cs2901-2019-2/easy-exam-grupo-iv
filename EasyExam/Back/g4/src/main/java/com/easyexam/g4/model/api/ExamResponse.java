package com.easyexam.g4.model.api;

import java.util.Date;

public class ExamResponse {
    public Long id;
    public String creator_id;
    public String college;
    public String course;
    public String rules;
    public String specs;
    public String title;
    public Date creation_date;
    public Date exam_date;
    public int max_points;
    public int question_number;
}
