package com.easyexam.g4.controllers;

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
import org.springframework.web.bind.annotation.RestController;

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
    public ResponseEntity<byte[]> compile(@RequestBody CompileRequest request) throws IOException {
        Optional<Teacher> teacher = teacherRepository.findById(request.creator);
        Exam exam = new Exam(request.college, request.course, request.rules, request.specs, request.title, request.creation_date, request.exam_date, request.max_points, request.question_number, teacher.get(), request.questions);
        examRepository.save(exam);
        InputStream in = getClass().getResourceAsStream("com/easyexam/g4/controllers/ola.pdf");
        byte[] isr = in.readAllBytes(); // Muero en esta linea
        String fileName = "exam.pdf";
        HttpHeaders respHeaders = new HttpHeaders();
        respHeaders.setContentLength(isr.length);
        respHeaders.setContentType(new MediaType("application", "pdf"));
        respHeaders.setCacheControl("must-revalidate, post-check=0, pre-check=0");
        respHeaders.set(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + fileName);
        return new ResponseEntity<byte[]>(isr, respHeaders, HttpStatus.OK);
    }
}
