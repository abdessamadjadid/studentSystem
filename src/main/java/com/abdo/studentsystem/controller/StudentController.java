package com.abdo.studentsystem.controller;

import com.abdo.studentsystem.model.Student;
import com.abdo.studentsystem.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student)
    {
        studentService.saveStudent(student);
        return "New Student is added";
    }

    @GetMapping("/getallstudents")
    public List<Student> getallstudents()
    {
        return studentService.getAllStudents();
    }

}
