package com.easyexam.g4.model.repository;

import com.easyexam.g4.model.Question;
import com.easyexam.g4.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubcategoryRepository extends JpaRepository<Subcategory, Long> {
    List<Subcategory> findAllById(List<Long> l);
}
