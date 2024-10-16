// Codetribe Database Commands

// Create collections for storing information about Facilitators, Trainees, and Projects
db.createCollection("Facilitators");  // Creates a collection named 'Facilitators' to store data about facilitators
db.createCollection("Trainees");      // Creates a collection named 'Trainees' to store data about trainees
db.createCollection("Projects");      // Creates a collection named 'Projects' to store information about projects

// Insert documents into the Facilitators collection
db.Facilitators.insertOne({
    Name: "Mahlatsi",                // The name of the facilitator
    Location: "Soweto",              // The location of the facilitator
    Course: "Web Development"        // The course that the facilitator is teaching
});

// Insert a document into the Trainees collection
db.Trainees.insertOne({
    Name: "Eunice Ndzukue",          // The name of the trainee
    Location: "Soweto",              // The location of the trainee
    Facilitator: "Mahlatsi"          // The name of the facilitator who is responsible for this trainee
});

// Insert a document into the Projects collection
db.Projects.insertOne({
    Name: "Website Launch",          // The name of the project
    Course: "Web Development",       // The course associated with this project
    Lesson: "MongoDB Project"        // The lesson or purpose of the project
});
