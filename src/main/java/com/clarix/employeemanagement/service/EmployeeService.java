package com.clarix.employeemanagement.service;

import com.clarix.employeemanagement.entity.Employee;
import com.clarix.employeemanagement.mapper.EmployeeMapper;
import com.clarix.employeemanagement.dto.EmployeeDto;
import com.clarix.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;
    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public EmployeeDto createEmployee(EmployeeDto dto) {

        Employee employee = EmployeeMapper.toEntity(dto);

        Employee savedEmployee = repository.save(employee);

        return EmployeeMapper.toDto(savedEmployee);
    }

    public List<EmployeeDto> getAllEmployees() {

        return repository.findAll()
                .stream()
                .map(EmployeeMapper::toDto)
                .toList();
    }

    public EmployeeDto getEmployeeById(Long id) {

        Employee employee = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));

        return EmployeeMapper.toDto(employee);
    }

    public EmployeeDto updateEmployee(
            Long id,
            EmployeeDto dto) {


        Employee existingEmployee = repository.findById(id).orElseThrow(() ->
                        new RuntimeException("Employee not found"));

        existingEmployee.setName(dto.getName());
        existingEmployee.setEmail(dto.getEmail());
        existingEmployee.setDepartment(dto.getDepartment());
        existingEmployee.setSalary(dto.getSalary());
        existingEmployee.setGender(dto.getGender());
        existingEmployee.setDob(dto.getDob());
        existingEmployee.setMobileNumber(dto.getMobileNumber());

        Employee updatedEmployee =
                repository.save(existingEmployee);

        return EmployeeMapper.toDto(updatedEmployee);
    }

    public void deleteEmployee(Long id) {

        Employee employee = repository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found"));

        repository.delete(employee);
    }
}