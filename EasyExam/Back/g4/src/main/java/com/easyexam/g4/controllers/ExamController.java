package com.easyexam.g4.controllers;

import com.easyexam.g4.model.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.easyexam.g4.model.*;

@RestController
public class ExamController {
    @Autowired
    ExamRepository examRepository;

  //  @PostMapping ("\compile")



}
