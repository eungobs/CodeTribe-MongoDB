﻿# README for Codetribe MongoDB Project


Introduction
This README outlines the steps and MongoDB shell commands used to create a database named Codetribe and the necessary collections for managing information about facilitators, trainees, and projects.

Prerequisites
Ensure you have MongoDB installed on your machine. You can download it from the MongoDB Download Center.

Starting the MongoDB Shell (Mongosh)
To start the MongoDB shell (Mongosh), follow these steps:

Open your terminal (Command Prompt, PowerShell, or any terminal emulator).

Type the following command and press Enter:

mongosh
If you need to connect to a specific MongoDB instance, you can provide the connection string like this:

bash
mongosh "mongodb://localhost:27017"
Database and Collections Setup
1. Create a Database
To create a new database named Codetribe, use the following command:

javascript
use Codetribe
2. Create Collections
Create the collections Facilitators, Trainees, and Projects using the following commands:


db.createCollection("Facilitators")
db.createCollection("Trainees")
db.createCollection("Projects")
3. Insert Documents into Collections
Facilitators Collection
To insert a document into the Facilitators collection with the specified fields, use the following command:


db.Facilitators.insertOne({
    Name: "Mahlatsi",
    Location: "Soweto",
    Course: "Web Development"
})
Trainees Collection
To insert a document into the Trainees collection with the specified fields, use the following command:


db.Trainees.insertOne({
    Name: "Eunice Ndzukue",
    Location: "Soweto",
    Facilitator: "Mahlatsi"
})
Projects Collection
To insert a document into the Projects collection with the specified fields, use the following command:


db.Projects.insertOne({
    Name: "Website Launch",
    Course: "Web Development",
    Lesson: "MongoDB Project"
})
Summary
This README provides a clear outline of how to set up the Codetribe database using MongoDB shell commands. The steps include creating a database, creating collections, and inserting documents into those collections. Feel free to modify the document fields and values as per your requirements.

Additional Resources
MongoDB Documentation
Mongosh Documentation
