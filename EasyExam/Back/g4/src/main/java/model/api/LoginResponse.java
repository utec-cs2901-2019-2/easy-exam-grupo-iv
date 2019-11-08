package model.api;

import model.Teacher;

public class LoginResponse {
  public Teacher user;
  public String token;

  public LoginResponse(Teacher _user, String _token){
    user = _user;
    token = _token;
  }
}
