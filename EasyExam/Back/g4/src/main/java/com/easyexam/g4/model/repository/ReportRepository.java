package com.easyexam.g4.model.repository;

import com.easyexam.g4.model.Question;

import com.easyexam.g4.model.Reports;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Reports,Long> {
    @Override
    List<Reports> findAll();
    @Query("SELECT q FROM Question q where q.id = Reports .question.id")
    List<Question> findAllReportedQuestions();
}
