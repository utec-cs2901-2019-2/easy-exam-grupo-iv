package com.easyexam.g4.controllers;
import com.easyexam.g4.model.api.QuestionPOSTRequest;
import com.easyexam.g4.model.api.QuestionRequest;
import com.easyexam.g4.model.repository.QuestionRepository;
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
import java.util.Optional;

@RestController
public class QuestionController {
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @PostMapping("/question") public void AddQuestion(@RequestBody QuestionPOSTRequest questionRequest){

    }
}
