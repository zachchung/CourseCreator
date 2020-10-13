# CourseCreator - The Digital Classroom for Everyone
CourseCreator is a web app that helps educators quickly turn their old pdfs/lessons into a digital sharable course.
It allows teachers to deliver interactive classes to students, track their progress and also communicate with them within the platform.
www.coursecreator.site/

### Demo Accounts
- Educator's view: harshil@study.com / abc123
- Student's view: lisa@study.com / abc123

#### At this stage, the resources are lesson module and quiz module.
- Quiz module has a quiz builder for quiz, questions and answers.
- Lesson module contains text, multimedia (e.g., image and videos) and reference link to external resources.

To create content on the website, we use a Trix text editor that is natively integrated into ActionText module of Ruby on Rails version 6.

## Setup & Deployment
### Setup
Clone the project, and run on local machine
```bash
bundle install
yarn install
```

Once the project is made available on your local machine, create the database in PostgreSQL and populate structure and data.
```bash
rails db:create
rails db:migrate
```

### Deployment
Start the application with:
```bash
rails s
```
