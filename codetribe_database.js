// Codetribe Database Commands

// Create collections
db.createCollection("Facilitators");
db.createCollection("Trainees");
db.createCollection("Projects");

// Insert documents into collections
db.Facilitators.insertOne({
    Name: "Mahlatsi",
    Location: "Soweto",
    Course: "Web Development"
});

db.Trainees.insertOne({
    Name: "Eunice Ndzukue",
    Location: "Soweto",
    Facilitator: "Mahlatsi"
});

db.Projects.insertOne({
    Name: "Website Launch",
    Course: "Web Development",
    Lesson: "MongoDB Project"
});
