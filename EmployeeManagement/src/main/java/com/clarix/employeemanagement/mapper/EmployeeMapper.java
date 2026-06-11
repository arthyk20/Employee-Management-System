package com.clarix.employeemanagement.mapper;

import com.clarix.employeemanagement.dto.EmployeeDto;
import com.clarix.employeemanagement.entity.Employee;

import java.time.LocalDate;
import java.time.Period;

public class EmployeeMapper {

    public static EmployeeDto toDto(Employee employee) {

        EmployeeDto dto = new EmployeeDto();

        dto.setId(employee.getId());
        dto.setName(employee.getName());
        dto.setEmail(employee.getEmail());
        dto.setDepartment(employee.getDepartment());
        dto.setSalary(employee.getSalary());
        dto.setGender(employee.getGender());
        dto.setDob(employee.getDob());
        dto.setMobileNumber(employee.getMobileNumber());

        if (employee.getDob() != null) {
            dto.setAge(
                    Period.between(
                            employee.getDob(),
                            LocalDate.now()
                    ).getYears()
            );
        }

        return dto;
    }

    public static Employee toEntity(EmployeeDto dto) {

        Employee employee = new Employee();

        employee.setName(dto.getName());
        employee.setEmail(dto.getEmail());
        employee.setDepartment(dto.getDepartment());
        employee.setSalary(dto.getSalary());
        employee.setGender(dto.getGender());
        employee.setDob(dto.getDob());
        employee.setMobileNumber(dto.getMobileNumber());

        return employee;
    }
}