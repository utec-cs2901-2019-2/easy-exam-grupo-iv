package com.easyexam.g4.controllers;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.JWT;
import com.easyexam.g4.model.Exam;
import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.api.*;
import com.easyexam.g4.model.repository.ExamRepository;
import com.easyexam.g4.model.repository.TeacherRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.impl.TextCodec;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;

@RestController
public class AuthController {

  @Value("${jwt.secret}")
  private String secret;

  @Autowired
  TeacherRepository teacherRepository;
  ExamRepository examRepository;

  @PostMapping("/login")
  LoginResponse login(@RequestBody LoginRequest request){
    Optional<Teacher> value = teacherRepository.findById(request.email);
    if(!value.isEmpty()) {
      if(value.get().getPassword().equals(request.password)) {
        Teacher user = value.get();
        int score = 0;
        for(Question i : user.getQuestions()) {
          score += i.getScore();
        }
        score = (int)Math.log(score)+1;
        for(Exam i : user.getExams()) {
          score -= 2;
        }
        if(score < 0)
        {
          score = 0;
        }
        user.setPoints(score);
        teacherRepository.save(user);
        final Instant now = Instant.now();
        final String jwt = Jwts.builder()
                .setSubject(request.email)
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plus(1, ChronoUnit.DAYS)))
                .signWith(SignatureAlgorithm.HS256, TextCodec.BASE64.encode(secret))
                .compact();
        return new LoginResponse(user, jwt);
      } else {
        return new LoginResponse(new Teacher("","","","","", false), "");
      }
    } else {
      return new LoginResponse(new Teacher("","","","","", false), "");
    }
  }

  @PostMapping("/register")
  RegisterResponse register(@RequestBody RegisterRequest request){
    teacherRepository.save(new Teacher(request.email, "", request.name, request.password, "", false));
    final Instant now = Instant.now();
    final String jwt = Jwts.builder()
            .setSubject(request.email)
            .setIssuedAt(Date.from(now))
            .setExpiration(Date.from(now.plus(1, ChronoUnit.DAYS)))
            .signWith(SignatureAlgorithm.HS256, TextCodec.BASE64.encode(secret))
            .compact();
    return new RegisterResponse(jwt);
  }
  @PostMapping("/log")
  LoginResponse log(@RequestBody LogRequest request) {
    DecodedJWT jwt = JWT.decode(request.token);
    String email = jwt.getSubject();
    Optional<Teacher> value = teacherRepository.findById(email);
    Teacher user = value.get();
    int score = 0;
    for(Question i : user.getQuestions()) {
      score += i.getScore()+1;
    }
    score = (int)Math.log(score)+1;
    for(Exam i : user.getExams()) {
      score -= 2;
    }
    if(score < 0)
    {
      score = 0;
    }
    user.setPoints(score);
    teacherRepository.save(user);
    return new LoginResponse(value.get(), jwt.getToken());
  }
}
