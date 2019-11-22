package com.easyexam.g4.controllers;

import org.apache.commons.io.IOUtils;
import com.easyexam.g4.model.Exam;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.CompileRequest;
import com.easyexam.g4.model.repository.ExamRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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
public class ExamController {
    @Autowired
    ExamRepository examRepository;

    @Autowired
    TeacherRepository teacherRepository;

    @PostMapping(
            value = "/compile",
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
}
