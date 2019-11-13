package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Question;

import java.util.ArrayList;
import java.util.List;

public class QuestionResponse {

  public List<Question> questions = new ArrayList<>();
  public int pages;

  public void add(Question question){
    questions.add(question);
  }
}
