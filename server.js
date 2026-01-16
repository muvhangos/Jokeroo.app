import express from "express";

const app = express();
const PORT = 4000;

// Joke data (simple array)
const jokes = [
  "Why don’t programmers like nature? Too many bugs 🐛",
  "Why did the computer catch a cold? It forgot to close its Windows 🪟",
  "Why do Java developers wear glasses? Because they don’t C# 🤓",
  "Debugging: Being the detective in a crime movie where you are also the killer 🔍",
  "Why was the JavaScript developer sad? Because they didn’t know how to 'null' their feelings 😅"
];

// Serve static files
app.use(express.static("public"));

// API route
app.get("/api/joke", (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

// Start server
app.listen(PORT, () => {
  console.log(`😂 Jokes app running at http://localhost:${PORT}`);
});
