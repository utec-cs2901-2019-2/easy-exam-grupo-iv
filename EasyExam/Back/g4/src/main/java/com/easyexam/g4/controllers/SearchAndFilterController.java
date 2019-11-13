package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.api.QuestionRequest;
import com.easyexam.g4.model.api.QuestionResponse;
import com.easyexam.g4.model.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SearchAndFilterController {

  @Autowired
  QuestionRepository questionRepository;

  @PostMapping("/questions")
  QuestionResponse getQuestions(@RequestBody QuestionRequest request){
    QuestionResponse response = new QuestionResponse();
    List<Question> value = questionRepository.findAll();
    response.pages = (int)Math.ceil((double)value.size()/(double)request.questions);
    for(int i = ((request.page - 1) * request.questions); i < ((request.page) * request.questions) && i < value.size(); i++){
      response.add(value.get(i));
    }
    return response;
  }
}
