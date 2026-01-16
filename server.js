import express from "express";

const app = express();
const PORT = 5000;

// Categorized jokes
const jokes = {
  funny: [
    "Why don’t programmers like nature? Too many bugs 🐛",
    "Why did the computer catch a cold? It forgot to close its Windows 🪟",
    "Debugging: Being the detective in a crime movie where you are also the killer 🔍",
    "Why did the cookie go to the doctor? Because it felt crummy 🍪",
    "Why did the bicycle fall over? Because it was two-tired 🚲",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one ⛳",
    "I would avoid the sushi if I was you. It’s a little fishy 🍣",
    "I told my friend 10 jokes to get him to laugh. Sadly, no pun in ten did 😅",
    "Parallel lines have so much in common. It’s a shame they’ll never meet ➖",
    "Why don’t skeletons fight each other? They don’t have the guts 💀"
    // Add more funny jokes here to reach 50+
  ],
  love: [
    "Are you Wi-Fi? Because I'm feeling a connection 💖",
    "Do you have a map? I keep getting lost in your eyes 😍",
    "Are you French? Because *Eiffel* for you 🗼",
    "If you were a vegetable, you'd be a cute-cumber 🥒",
    "Do you like raisins? How do you feel about a date? 🍇❤️",
    "Are you a magician? Because whenever I look at you, everyone else disappears ✨",
    "I must be a snowflake, because I've fallen for you ❄️",
    "Are you a bank loan? Because you have my interest 💰",
    "I love you a latte ☕❤️",
    "Roses are red, violets are blue, sugar is sweet, and so are you 🌹"
    // Add more love jokes here to reach 50+
  ]
};

// Serve static files from public folder
app.use(express.static("public"));

// API route with category support
app.get("/api/joke", (req, res) => {
  const category = req.query.category || "funny";
  if (!jokes[category]) return res.status(400).json({ error: "Invalid category" });
  const randomJoke = jokes[category][Math.floor(Math.random() * jokes[category].length)];
  res.json({ joke: randomJoke });
});

// Start server
app.listen(PORT, () => console.log(`😂 Jokes app running at http://localhost:${PORT}`));
