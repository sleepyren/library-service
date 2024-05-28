# Library Service Application

This is a mock library service application built with Java Spring Boot and React. The backend service is a Java Spring Boot application that interacts with a database to manage library entries. The frontend is built with React, allowing users to interact with the library database.
### Features

    CRUD Operations: Create, read, update, and delete library entries.
    Custom Queries: Perform custom queries on the database.
    Fields: Each library entry has a title, author, ISBN, and year_published.

## Backend: Java Spring Boot Application
Prerequisites

    Java 8 or higher
    Maven
    A relational database (H2)

## Setup

### 1. Clone the Repository:
    
    
    git clone https://github.com/sleepyren/library-service/
    cd library-service

Make sure you have Maven installed:
https://maven.apache.org/install.html

### 2. Add Frontend URL to CORS list
Add the frontend URL to application.properties in the root of the project
```
frontend.url=http://localhost:5173
```
### 3. Build the Application:
```
mvn clean install
```
### 4. Run the Application:

```
mvn spring-boot:run
```

## Endpoints
- GET /catalog/{isbn} Retrieve entry with this isbn 
- POST /save Save entry with this JSON information OR edit entry if it's ISBN already exists
- GET /findall Get all database entries
- POST /delete Delete entry with this ISBN
- GET /search Retrieve all entries that contain this ISBN Sequence

Now that the backend server has been setup proceed to the REACT frontend setup to test interactions:
https://github.com/sleepyren/library-service/tree/main/frontend/react