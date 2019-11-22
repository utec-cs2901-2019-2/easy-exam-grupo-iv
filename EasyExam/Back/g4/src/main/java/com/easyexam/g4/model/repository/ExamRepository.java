package com.easyexam.g4.model.repository;

import com.easyexam.g4.model.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.Id;
import java.util.List;

@Repository
public interface ExamRepository extends JpaRepository<Exam,Long> {
    List<Exam > findAllByCreator(String email);
}



