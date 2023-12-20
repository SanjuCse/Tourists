# Tourists

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## application.properties

#### MySql Database

spring.datasource.url=jdbc:mysql://localhost:3306/rest  
spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver  
spring.datasource.username=root  
spring.datasource.password=root  
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect

#### Hibernate properties

spring.jpa.hibernate.ddl-auto=update  
spring.jpa.properties.hibernate.globally_quoted_identifiers=true
spring.jpa.properties.hibernate.globally_quoted_identifiers_skip_column_definitions=true
spring.jpa.properties.hibernate.enable_lazy_load_no_trans=true

## Technology Used

Spring Boot, Data JPA, Rest  
Swagger API Documentation  
Angular v16  
MySql

> Project Execution Steps

- clone repository `git clone https://github.com/SanjuCse/Tourists.git`
- Install all npm packages `npm install` in Tourists folder
- create database `create database rest` in MySQL
- make sure java version should be minimum 17 by `java --version`
- run jar file from Tourists/src/assets `java -jar Tourists/src/assets/RestMiniProj-Tourist-0.0.1-SNAPSHOT.jar`
- run angular project `ng s -o`
- now all set :)
- now you can visit `localhost:4200` for front-end
- for API Documentation visit `localhost:8080/swagger-ui.html`
