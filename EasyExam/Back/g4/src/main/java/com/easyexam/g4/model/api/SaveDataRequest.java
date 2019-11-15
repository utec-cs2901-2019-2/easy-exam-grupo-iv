package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Exam;
import com.easyexam.g4.model.Question;

import java.util.List;

public class SaveDataRequest {
  public String email;
  public String lastName;
  public String name;
  public String phone;
  public Integer points;
  public List<Long> savedQuestions;
}
