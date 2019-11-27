package com.easyexam.g4.controllers;

import com.easyexam.g4.model.api.ExamRequest;
import com.easyexam.g4.model.api.ExamResponse;
import com.easyexam.g4.model.api.TeacherRequest;
import org.apache.commons.io.IOUtils;
import com.easyexam.g4.model.Exam;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.CompileRequest;
import com.easyexam.g4.model.repository.ExamRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ExamController {
    @Autowired
    ExamRepository examRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @PostMapping(
            value = "/api/compile",
            produces = MediaType.APPLICATION_PDF_VALUE
    )
    public @ResponseBody
    byte[] compile(@RequestBody CompileRequest request) throws IOException {
        Optional<Teacher> teacher = teacherRepository.findById(request.creator);
        Exam exam = new Exam(request.college, request.course, request.rules, request.specs, request.title, request.creation_date, request.exam_date, request.max_points, request.question_number, teacher.get(), request.questions);
        examRepository.save(exam);
        exam.cook(Boolean.TRUE, request.scores);


        File myPDF = new File(exam.getId() + "test.pdf");
        InputStream in = new FileInputStream(myPDF);
        return IOUtils.toByteArray(in);

    }
    @GetMapping("/api/exams/teacher")
    public @ResponseBody
    List<ExamResponse> ExamsPerTeachRequest(@RequestBody TeacherRequest teacherRequest){
        String myEmail = teacherRequest.email;
        Teacher myTeach = teacherRepository.findById(myEmail).get();
        List<Exam> teacherExams = examRepository.findAllByCreator(myTeach);
        List<ExamResponse> toReturn = new ArrayList<>();
        for (Exam e : teacherExams){
            ExamResponse toPush = new ExamResponse();
            toPush.college = e.getCollege();
            toPush.course = e.getCourse();
            toPush.creation_date = e.getCreation_date();
            toPush.creator_id = e.getCreator().getEmail();
            toPush.exam_date = e.getExam_date();
            toPush.max_points = e.getMax_points();
            toPush.question_number = e.getQuestion_number();
            toPush.rules = e.getRules();
            toPush.specs = e.getSpecs();
            toPush.title = e.getTitle();
            toPush.id = e.getId();
            toReturn.add(toPush);
        }
        return toReturn;

    }
    @GetMapping("/api/exams/id")
    public @ResponseBody
    ExamResponse ExamById(@RequestBody ExamRequest examRequest){
        ExamResponse toPush =new ExamResponse();
        Exam e = examRepository.findById(examRequest.id).get();
        toPush.college = e.getCollege();
        toPush.course = e.getCourse();
        toPush.creation_date = e.getCreation_date();
        toPush.creator_id = e.getCreator().getEmail();
        toPush.exam_date = e.getExam_date();
        toPush.max_points = e.getMax_points();
        toPush.question_number = e.getQuestion_number();
        toPush.rules = e.getRules();
        toPush.specs = e.getSpecs();
        toPush.title = e.getTitle();
        toPush.id = e.getId();
        return toPush;

    }
}
