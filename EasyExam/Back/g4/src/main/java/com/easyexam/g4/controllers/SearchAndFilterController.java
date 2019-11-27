package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Category;
import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Subcategory;
import com.easyexam.g4.model.api.QuestionRequest;
import com.easyexam.g4.model.api.QuestionResponse;
import com.easyexam.g4.model.api.SaveDataRequest;
import com.easyexam.g4.model.api.SavedQuestionsRequest;
import com.easyexam.g4.model.repository.CategoryRepository;
import com.easyexam.g4.model.repository.QuestionRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SearchAndFilterController {

  @Autowired
  QuestionRepository questionRepository;

  @Autowired
  CategoryRepository categoryRepository;

  @Autowired
  TeacherRepository teacherRepository;

  @PostMapping("/questions")
  QuestionResponse getQuestions(@RequestBody QuestionRequest request){
    QuestionResponse response = new QuestionResponse();
    List<Question> value = questionRepository.findAll();
    for(Question i : value) {
      i.setCreator(null);
      i.setSaved(null);
      for(Subcategory j : i.getSubcategory()) {
        j.setQuestions(null);
        j.setCategory(null);
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
  @PostMapping("/api/savedquestions")
  List<Long> savedq(@RequestBody SavedQuestionsRequest request) {
    List<Question> questions = teacherRepository.findById(request.email).get().getSelectedq();
    List<Long> response = new ArrayList<>();
    for (Question i : questions) {
      response.add(i.getId());
    }
    return response;
  }
}