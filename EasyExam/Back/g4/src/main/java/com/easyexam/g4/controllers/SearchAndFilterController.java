package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Category;
import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Subcategory;
import com.easyexam.g4.model.api.QuestionRequest;
import com.easyexam.g4.model.api.QuestionResponse;
import com.easyexam.g4.model.repository.CategoryRepository;
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

  @Autowired
  CategoryRepository categoryRepository;

  @PostMapping("/questions")
  QuestionResponse getQuestions(@RequestBody QuestionRequest request){
    QuestionResponse response = new QuestionResponse();
    List<Question> value = questionRepository.findAll();
    for(Question i : value) {
      i.setCreator(null);
      for(Subcategory j : i.getSubcategory()) {
        j.setQuestions(null);
      }
    }
    response.pages = (int)Math.ceil((double)value.size()/(double)request.questions);
    for(int i = ((request.page - 1) * request.questions); i < ((request.page) * request.questions) && i < value.size(); i++){
      response.add(value.get(i));
    }
    return response;
  }
  @PostMapping("/categories")
  List<Category> getCategories() {
    List<Category> response = categoryRepository.findAll();
    for (Category i : response) {
      for (Subcategory j : i.getSubcategories()) {
        j.setCategory(null);
      }
    }
    return response;
  }
}
