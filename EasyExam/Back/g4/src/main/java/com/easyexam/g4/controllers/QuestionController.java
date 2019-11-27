
package com.easyexam.g4.controllers;
import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Subcategory;
import com.easyexam.g4.model.api.QuestionPOSTRequest;
import com.easyexam.g4.model.repository.QuestionRepository;
import com.easyexam.g4.model.repository.SubcategoryRepository;
import com.easyexam.g4.model.Teacher;
import com.easyexam.g4.model.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class QuestionController {
    @Autowired
    SubcategoryRepository subcategoryRepository;
    @Autowired
    QuestionRepository questionRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @PostMapping("/api/newquestion") public Long AddQuestion(@RequestBody QuestionPOSTRequest questionRequest){
        Question myQuestion = new Question();
        myQuestion.setAnswer(questionRequest.answer);
        myQuestion.setCreation_date(questionRequest.creation_date);
        Teacher author = teacherRepository.findById(questionRequest.creatorID).get();
        myQuestion.setCreator(author);
        myQuestion.setTitle(questionRequest.title);
        myQuestion.setDescription(questionRequest.description);
        List<Subcategory> subs = new ArrayList<>();
        List<Long> reqSubs = questionRequest.subcategories;
        for (long temp: reqSubs){
            Subcategory mySub = subcategoryRepository.findById(temp).get();
            subs.add(mySub);
        }
        myQuestion.setSubcategory(subs);
        questionRepository.save(myQuestion);
        return myQuestion.getId();
    }
}