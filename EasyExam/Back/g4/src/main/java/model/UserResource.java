package model;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserResource {
    @Autowired
    private UserRepository userRepository;
    @GetMapping("/users") public List<User> retrieveAllUsers(){
        return userRepository.findAll();
    }

    }
