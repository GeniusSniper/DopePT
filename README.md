# DopePT
## Background and Overview
Many healthcare facilities still live in the stone age when it comes to providing resources to their patients. Whether it is making appointments by phone or giving paper handouts for peoples homework that they end up misplacing.

DopePT is designed to bring these facilities into the age of technology and streamlining the process of patient/doctor communication into one convinient location.

## Functionality & MVPs
### 1. Hosting on Heroku (0.5 day)
- Host live server on Heroku

### 2. User Auth (1 day)
- Ability for user to make an account and login/logout
- Dual user auth seperating patient accounts from clinician accounts
     - clincians will have a list of paitents
     - patients will have one clinician


### 3. Exercises index and show page (1 day)
- Clinician users will see an index page showing all exercises
- Patient users will have a list of assigned exercises

- All users will be able to click on an exercise and will be taken to the show page, showing exercise details

- Exercise show pages will have a description and pictures of exercises.

### 4. Clinician calendar page
- Patient users will be able to see available appointment slots for their clinician

- Patient users will be able to make appointments in open slots of the calendar with their clinician

- Calendar will have a by month styling, where clicking on a day will show an hourly availability list for their clinician

- Clinician users will be able to see their daily/weekly list of schedules appointments

### 5. Clinician assignment
- Clinician users will be able to assign exercises to their patients.

- Assignment page will be similar to index, but just with the patients selected exercises from their clinician

- Clinician users will have the ability to create new exercises or delete existing ones from the database.

## Group Members and Work Breakdown

### Group members: Tyler Bernstein, Ti Wei

### July 19
- Set up the database for MongoDB and connect to the database -Ti
- Make the project live on Heroku - Tyler/Ti
- Making sure doctor and patient can signup/login -Ti
- Making sure doctor has many patients and patients can have one doctor - Ti/Tyler
### July 20 - July 21
- Seeding doctors and patients into the database -Ti
- Having exercise photos uploaded on AWS - Ti/Tyler
- Patients can make appointments with the doctor -Ti/Tyler
- Having all exercises and descriptions for the exercises page setup - Tyler
- Having each exercise page setup - Ti/Tyler
### July 22 - July 23
- Give the ability for clinicians to assign exercises to their patients - Ti
- Have a calendar that patients can interact with to schedule their appointments -Ti/Tyler
- Have a calendar that clinicians can view to see all of their upcoming appointments -Ti/Tyler

## Technologies and Technical Challenges
- Storge: AWS

- Backend: Node, Express, MongoDB

- We are using NoSQL database MongoDB

- Frontend: React and React Native with Redux

- Single page application utilizing the asynchronicity of JS for improved response time.
