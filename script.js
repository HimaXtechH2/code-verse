// Theme toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
};

// Load saved theme
window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

  // Load sample projects dynamically with animations
  const projects = [
    { title: "Galaxy Generator", desc: "3D space rendered with Three.js", url: "#" },
    { title: "AI Resume Builder", desc: "Build a resume in seconds", url: "#" },
    { title: "Crypto Tracker", desc: "Track crypto prices in real-time", url: "#" }
  ];

  const container = document.getElementById("projectCards");
  projects.forEach(p => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `<h3><a href="${p.url}">${p.title}</a></h3><p>${p.desc}</p>`;
    container.appendChild(el);
  });
};

// Chatbot AI replies
document.getElementById("chatInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const input = e.target.value.trim().toLowerCase();
    let reply = "🤖 I think that's interesting! Try exploring our projects!";
    
    if (/hello|hi/i.test(input)) {
      reply = "👋 Hello, developer!";
    } else if (/upload/i.test(input)) {
      reply = "📤 You can upload your project from the homepage!";
    } else if (/projects/i.test(input)) {
      reply = "🚀 Check out the featured projects section!";
    }

    document.getElementById("chatOutput").innerText = reply;
    e.target.value = "";
  }
});

