# Task Manager Application

This project is a simple task management system built with Angular and JSON Server. The application allows users to register, log in, and manage tasks. Tasks can be created, read, updated, and deleted (CRUD operations). The application uses NgRx for state management.

## Technologies Used

- **Angular**: A platform for building mobile and desktop web applications.
- **Angular Material**: A UI component library for Angular applications.
- **NgRx**: A framework for building reactive applications in Angular, using the Redux pattern.
- **JSON Server**: A full fake REST API that you can use as a backend for prototyping and testing.
- **RxJS**: A library for reactive programming using observables.

## Project Structure

- **src/app**: The main application folder containing modules, components, and services.
- **auth**: Contains the authentication logic and components.
- **main**: Contains the main application logic including task management.
- **store**: Contains NgRx state management files including actions, reducers, and effects.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-repo/task-manager.git
   cd task-manager
   ```

2. Install the dependencies:
   npm install

### Runing The Application

1. Start the JSON Server:
   json-server --watch db.json --middlewares auth-middleware.js

2. Start the Angular development server:
   ng serve

3. Open your browser and navigate to http://localhost:4200.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.1.

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
