
![image](https://github.com/abhay39/taskmanager/assets/84112755/a4f75ff4-dda3-43e5-bc75-7b4c3b1287f5)


![image](https://github.com/abhay39/taskmanager/assets/84112755/499d3d79-42a3-4a49-8740-78afae3ff0fd)


![image](https://github.com/abhay39/taskmanager/assets/84112755/27e3efc1-b67a-4cca-a05d-bbe5ca63151c)


![image](https://github.com/abhay39/taskmanager/assets/84112755/710d089b-5f7f-416c-8d50-9f1fa7dee327)

# Task Manager App

## Overview

Task Manager App is a web-based task management application designed to help users organize their tasks efficiently. The application allows users to create, update, and track tasks easily. It includes features such as task creation, task update, priority categorization, and due dates to enhance productivity.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Creating a Task](#creating-a-task)
  - [Updating a Task](#updating-a-task)
  - [Categorizing by Priority](#categorizing-by-priority)
- [Project Structure](#project-structure)
  - [App.js](#appjs)
  - [TaskForm.js](#taskformjs)
  - [TaskItem.js](#taskitemjs)
  - [CategoryLists.js](#categorylistsjs)
  - [TaskList.js](#tasklistjs)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Getting Started

### Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/abhay39/taskmanager.git
    cd taskmanager
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm start
    ```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access Task Manager.

## Usage

### Creating a Task

1. Open the Task Manager application.
2. Use the TaskForm to input task details.
3. Click the "Create" button to add the task.

### Updating a Task

1. Locate the task in the task list.
2. Drag the task to the desired category.
3. The task status will be updated accordingly.

### Categorizing by Priority

- The tasks are categorized into three priorities: To-do, In Progress, and Completed.
- Each category has a count indicator for quick reference.

## Project Structure

Project Structure
App.js
The main entry point for the React application. It initializes state, includes necessary dependencies, and renders the TaskForm and TaskList components.

TaskForm.js
Responsible for rendering the form to create new tasks. Validates input length and displays notifications using react-hot-toast.

TaskItem.js
A reusable component for individual task items. Utilizes the react-dnd library for drag-and-drop functionality and displays removal notifications.

CategoryLists.js
Component for rendering task categories (To-do, In Progress, Completed). Implements drag-and-drop using react-dnd and updates task status accordingly.

TaskList.js
Coordinates the display of all task categories, including To-do, In Progress, and Completed. Manages state and updates categories based on task status.

Components
TaskForm.js
The TaskForm component is responsible for rendering the form used to create new tasks. It includes input validation for task length and uses react-hot-toast to display notifications.

TaskItem.js
The TaskItem component is a reusable element for individual task items. It incorporates drag-and-drop functionality from the react-dnd library and provides a button to remove tasks with a notification displayed using react-hot-toast.

CategoryLists.js
The CategoryLists component is designed for rendering task categories, including To-do, In Progress, and Completed. It utilizes the react-dnd library for drag-and-drop functionality and updates task status accordingly. The component also includes a count indicator for each category.

TaskList.js
The TaskList component coordinates the display of all task categories. It manages state and updates categories based on the task status. This component includes To-do, In Progress, and Completed sections.

Contributing
We welcome contributions! If you'd like to contribute to Task Manager, please follow our contribution guidelines.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
For any inquiries or feedback, please contact the project maintainer:

Name: Abhay Kumar Gupta
Email: abhayguptaak39@gmail.com

For any inquiries or feedback, please contact the project maintainer:

- Name: Abhay Kumar Gupta
- Email: abhayguptaak39@gmail.com

--- 
