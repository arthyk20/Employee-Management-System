package com.clarix.employeemanagement.controller;

import com.clarix.employeemanagement.dto.EmployeeDto;
import com.clarix.employeemanagement.service.EmployeeService;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeService service;

    public EmployeeController(
            EmployeeService service) {

        this.service = service;
    }

    @PostMapping
    public EmployeeDto createEmployee(
            @RequestBody EmployeeDto dto) {

        return service.createEmployee(dto);
    }

    @GetMapping
    public List<EmployeeDto> getAllEmployees() {

        return service.getAllEmployees();
    }

    @GetMapping("/{id}")
    public EmployeeDto getEmployeeById(
            @PathVariable Long id) {

        return service.getEmployeeById(id);
    }

    @PutMapping("/{id}")
    public EmployeeDto updateEmployee(
            @PathVariable Long id,
            @RequestBody EmployeeDto dto) {

        return service.updateEmployee(id, dto);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(
            @PathVariable Long id) {

        service.deleteEmployee(id);

        return "Employee deleted successfully";
    }
}