package com.easyexam.g4.model.api;

import com.easyexam.g4.model.Teacher;

public class LoginResponse {
  public String email;
  public String lastName;
  public String name;
  public String password;
  public String phone;
  public Boolean isAdmin;

  public Integer points;
  public String token;

  public LoginResponse(Teacher user, String _token){
    email = user.getEmail();
    lastName = user.getLast_name();
    name = user.getName();
    password = user.getPassword();
    phone = user.getPhone();
    isAdmin = user.getAdmin();
    points = user.getPoints();
    token = _token;
  }
}
