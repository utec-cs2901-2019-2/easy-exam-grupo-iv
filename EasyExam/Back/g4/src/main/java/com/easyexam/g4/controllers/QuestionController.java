package com.easyexam.g4.controllers;
import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Subcategory;
import com.easyexam.g4.model.api.QuestionPOSTRequest;
import com.easyexam.g4.model.api.QuestionRequest;
import com.easyexam.g4.model.repository.QuestionRepository;
import com.easyexam.g4.model.repository.SubcategoryRepository;
import org.apache.commons.io.IOUtils;
import com.easyexam.g4.model.Exam;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.CompileRequest;
import com.easyexam.g4.model.repository.ExamRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class QuestionController {
    @Autowired
    SubcategoryRepository subcategoryRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @PostMapping("/questionPOST") public void AddQuestion(@RequestBody QuestionPOSTRequest questionRequest){
    Question myQuestion = new Question();
    myQuestion.setAnswer(questionRequest.answer);
    myQuestion.setCreation_date(questionRequest.creation_date);
    Teacher author = teacherRepository.findById(questionRequest.creatorID).get();
    myQuestion.setCreator(author);
    myQuestion.setTitle(questionRequest.title);
    myQuestion.setDescription(questionRequest.description);
    List<Subcategory> subs = new ArrayList<>();
    List<Long> reqSubs = questionRequest.subcategories;
    for (long temp: reqSubs){
        Subcategory mySub = subcategoryRepository.findById(temp).get();
        subs.add(mySub);
    }
    myQuestion.setSubcategory(subs);
    questionRepository.save(myQuestion);
    }
}
