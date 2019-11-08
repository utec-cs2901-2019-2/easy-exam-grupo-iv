package com.easyexam.g4.model.repository;
import com.easyexam.g4.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Question findById(Iterable<Long> Ids);
}
