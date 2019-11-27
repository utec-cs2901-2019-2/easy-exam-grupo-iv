package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Reports;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.ReportRequest;
import com.easyexam.g4.model.repository.QuestionRepository;
import com.easyexam.g4.model.repository.ReportRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReportController {
    @Autowired
    ReportRepository reportRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @PostMapping("/api/report") public void AddReport(@RequestBody ReportRequest reportRequest){
        Reports myReport = new Reports();
        Teacher creator = teacherRepository.findById(reportRequest.userEmail).get();
        myReport.setCreator(creator);
        Question myQuestion = questionRepository.findById(reportRequest.questionID).get();
        myReport.setQuestion(myQuestion);
        myReport.setDescription(reportRequest.description);
        reportRepository.save(myReport);


    }



}
