package com.easyexam.g4.controllers;

import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.LoginRequest;
import com.easyexam.g4.model.api.LoginResponse;
import com.easyexam.g4.model.api.RegisterRequest;
import com.easyexam.g4.model.api.RegisterResponse;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class AuthController {

  @Autowired
  TeacherRepository teacherRepository;

  @PostMapping("/login")
  LoginResponse login(@RequestBody LoginRequest request){
    Optional<Teacher> value = teacherRepository.findById(request.email);
    if(!value.isEmpty()) {
      if(value.get().getPassword().equals(request.password)) {
        return new LoginResponse(value.get(), "Ingrese Token Aqui");
      } else {
        return new LoginResponse(new Teacher("","","","","", false), "Ingrese Token Aqui");
      }
    } else {
      return new LoginResponse(new Teacher("","","","","", false), "Ingrese Token Aqui");
    }
  }
  @PostMapping("/register")
  RegisterResponse register(@RequestBody RegisterRequest request){
    teacherRepository.save(new Teacher(request.email, "", request.name, request.password, "", false));
    return new RegisterResponse("Ingrese Token Aqui");
  }
}
