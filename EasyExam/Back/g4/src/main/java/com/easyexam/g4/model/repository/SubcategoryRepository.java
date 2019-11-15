package com.easyexam.g4.model.repository;

import com.easyexam.g4.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubcategoryRepository extends JpaRepository<Question, Long> {
}
