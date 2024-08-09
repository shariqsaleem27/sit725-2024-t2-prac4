const mongoose = require("mongoose");
const Cat = require("./models/Cat"); // Import your Cat model

// Connect to MongoDB
mongoose.connect('mongodb+srv://shariqsaleem06:UrV1I9fkbzVQsQ8m@cluster0.hmdoch7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

// Array of cats to seed
const cats = [
  {
    name: "Whiskers",
    title: "The Adventurer",
    image: "cat1.jpeg", // Ensure this image exists in your images folder
    description: "A brave explorer with a knack for finding hidden treats.",
  },
  {
    name: "Felix",
    title: "The Lazy Cat",
    image: "cat1.jpeg", // Ensure this image exists in your images folder
    description: "A laid-back feline who loves sunbathing and naps.",
  },
  {
    name: "Mittens",
    title: "The Playful Kitten",
    image: "cat1.jpeg", // Ensure this image exists in your images folder
    description: "A playful kitten with boundless energy and curiosity.",
  },
];

// Seed the database
const seedDB = async () => {
  await Cat.deleteMany({}); // Remove all existing cats
  await Cat.insertMany(cats); // Insert the new cats
  console.log("Database seeded with initial data");
  mongoose.connection.close(); // Close the connection
};

seedDB().catch((err) => {
  console.error("Error seeding database:", err);
});
