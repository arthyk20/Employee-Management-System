# Employee Management System

A simple Employee Management System built using Spring Boot, Spring Data JPA, Hibernate, and PostgreSQL. This project demonstrates CRUD (Create, Read, Update, Delete) operations through REST APIs.

## Features

* Create Employee
* View All Employees
* View Employee By ID
* Update Employee Details
* Delete Employee
* PostgreSQL Database Integration
* Spring Data JPA Repository
* Hibernate ORM
* RESTful APIs

## Technologies Used

* Java 21
* Spring Boot 3.5.0
* Spring Data JPA
* Hibernate
* PostgreSQL
* Maven
* Postman

## Project Structure

```text
src/main/java/com/clarix/employeemanagement
│
├── controller
│     └── EmployeeController.java
│
├── service
│     └── EmployeeService.java
│
├── repository
│     └── EmployeeRepository.java
│
├── entity
│     └── Employee.java
│
└── EmployeeManagementApplication.java
```

## Architecture

```text
Postman
   |
   v
EmployeeController
   |
   v
EmployeeService
   |
   v
EmployeeRepository
   |
   v
Hibernate / JPA
   |
   v
PostgreSQL Database
```

## Employee Entity

The Employee entity contains:

* id
* name
* email
* department
* salary

## Database Configuration

Create a PostgreSQL database:

```sql
CREATE DATABASE employee-db;
```

Update the application.properties file:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/<db-name>
spring.datasource.username=<user_name>
spring.datasource.password=<password>

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

## How to Run

### 1. Clone the Repository

```bash
git clone <repository-url>
```

### 2. Open Project

Open the project in IntelliJ IDEA.

### 3. Install Dependencies

Reload Maven project to download all required dependencies.

### 4. Start PostgreSQL

Ensure PostgreSQL service is running and the database is created.

### 5. Run Application

Run:

```java
EmployeeManagementApplication.java
```

Or use:

```bash
mvn spring-boot:run
```

### 6. Verify Startup

Application should start on:

```text
http://localhost:8080
```

Console output should show:

```text
Tomcat started on port 8080
Started EmployeeManagementApplication
```

## API Endpoints

### Create Employee

```http
POST /employees
```

Request Body:

```json
{
  "name": "Arthy",
  "email": "arthy@gmail.com",
  "department": "IT",
  "salary": 50000
}
```

### Get All Employees

```http
GET /employees
```

### Get Employee By ID

```http
GET /employees/{id}
```

Example:

```http
GET /employees/1
```

### Update Employee

```http
PUT /employees/{id}
```

Example:

```http
PUT /employees/1
```

Request Body:

```json
{
  "name": "Arthy Kumar",
  "email": "arthykumar@gmail.com",
  "department": "Development",
  "salary": 70000
}
```

### Delete Employee

```http
DELETE /employees/{id}
```

Example:

```http
DELETE /employees/1
```

## Learning Outcomes

This project demonstrates:

* Spring Boot Application Setup
* Dependency Injection
* REST API Development
* Controller Layer
* Service Layer
* Repository Layer
* JPA and Hibernate
* PostgreSQL Integration
* CRUD Operations
* Maven Dependency Management

## Future Enhancements

* DTO Layer
* Pagination and Sorting
* Spring Security Authentication
* Frontend Integration using React or Angular

```
```
