package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.SaveDataRequest;
import com.easyexam.g4.model.repository.QuestionRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ApiController {

  @Autowired
  TeacherRepository teacherRepository;

  @Autowired
  QuestionRepository questionRepository;

  @RequestMapping("/")
  public String index() {
    return "Hello";
  }

  @PostMapping("/savedata")
  public void save(@RequestBody SaveDataRequest request) {
    Optional<Teacher> teacher = teacherRepository.findById(request.email);
    Teacher selected = teacher.get();
    selected.setLast_name(request.lastName);
    selected.setName(request.name);
    selected.setPhone(request.phone);
    selected.setPoints(request.points);
    List<Question> selectedq = new ArrayList<>();
    for(Long i : request.savedQuestions) {
      Optional<Question> question = questionRepository.findById(i);
      selectedq.add(question.get());
    }
    selected.setSelectedq(selectedq);
    teacherRepository.save(selected);
  }
}
