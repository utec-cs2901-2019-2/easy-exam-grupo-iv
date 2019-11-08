package com.easyexam.g4.model.repository;

import java.util.List;

import com.easyexam.g4.model.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<Teacher, String> {
}
