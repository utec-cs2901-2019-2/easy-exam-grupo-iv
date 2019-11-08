package model.repository;

import java.util.List;

import model.Teacher;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends JpaRepository<Teacher, String> {
  List<Teacher> findbyEmail(@Param("email") String email);
}
