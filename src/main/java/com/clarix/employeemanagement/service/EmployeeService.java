package com.clarix.employeemanagement.service;

import com.clarix.employeemanagement.entity.Employee;
import com.clarix.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee createEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee getEmployeeById(Long id) {

        return repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Employee not found"));
    }

    public Employee updateEmployee(
            Long id,
            Employee employee) {

        Employee existingEmployee =
                getEmployeeById(id);

        existingEmployee.setName(
                employee.getName());

        existingEmployee.setEmail(
                employee.getEmail());

        existingEmployee.setDepartment(
                employee.getDepartment());

        existingEmployee.setSalary(
                employee.getSalary());

        return repository.save(existingEmployee);
    }

    public void deleteEmployee(Long id) {

        Employee employee =
                getEmployeeById(id);

        repository.delete(employee);
    }
}