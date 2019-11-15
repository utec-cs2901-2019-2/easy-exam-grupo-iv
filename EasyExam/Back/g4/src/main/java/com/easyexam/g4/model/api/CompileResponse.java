package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Exam;

import java.util.ArrayList;

public class CompileResponse {
    public String myUrl;
    public CompileResponse(Exam myExam){
        myExam.cook(false, new ArrayList<Integer>());
    }
}
