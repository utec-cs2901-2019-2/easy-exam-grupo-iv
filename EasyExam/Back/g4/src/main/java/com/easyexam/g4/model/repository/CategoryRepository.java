package com.easyexam.g4.model.repository;

import com.easyexam.g4.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
