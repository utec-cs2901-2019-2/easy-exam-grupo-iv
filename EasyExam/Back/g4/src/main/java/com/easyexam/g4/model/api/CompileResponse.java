package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Exam;

public class CompileResponse {
    public String myUrl;
    public CompileResponse(Exam myExam){
        myExam.cook();

    }
}
