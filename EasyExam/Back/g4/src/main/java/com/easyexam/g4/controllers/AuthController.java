package com.easyexam.g4.controllers;

import model.Teacher;
import model.api.LoginRequest;
import model.api.LoginResponse;
import model.repository.TeacherRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

  TeacherRepository teacherRepository;

  @PostMapping("/login")
  LoginResponse login(@RequestBody LoginRequest request){
    List<Teacher> value = teacherRepository.findbyEmail(request.email);
    if(value.size() != 0) {
      return new LoginResponse(value.get(0), "Ingrese Token Aqui");
    } else {
      return new LoginResponse(new Teacher("","","","",""), "Ingrese Token Aqui");
    }
  }
}
