const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const projects = [
  {
    title: "Mealify Website",
    description: "Modern restaurant landing page with clean UI and responsive design.",
    image: "./images/unsplash_3JmfENcL24M.png",
    tech: ["HTML", "CSS", "Flexbox"],
    live: "#",
    code: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio with animations and modern design.",
    image: "project2.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#"
  },
  {
    title: "Dashboard UI",
    description: "Responsive admin dashboard with clean layout and charts UI.",
    image: "project3.jpg",
    tech: ["HTML", "CSS Grid", "JS"],
    live: "#",
    code: "#"
  }
];
const container = document.getElementById("projectsContainer");

projects.forEach(project => {
  container.innerHTML += `
    <div class="bg-[#0f172a] rounded-2xl overflow-hidden border border-[#194BFD]/20 hover:border-[#194BFD] transition">

      <!-- Image -->
      <img src="${project.image}" class="w-full h-48 object-contain">

      <div class="p-5 space-y-3">

        <!-- Title -->
        <h3 class="text-xl font-semibold">${project.title}</h3>

        <!-- Description -->
        <p class="text-gray-400 text-sm leading-relaxed">
          ${project.description}
        </p>

        <!-- Tech -->
        <div class="flex flex-wrap gap-2 text-xs">
          ${project.tech.map(t => `
            <span class="px-2 py-1 bg-[#194BFD]/20 text-[#194BFD] rounded">
              ${t}
            </span>
          `).join("")}
        </div>

        <div class="flex gap-3 pt-3">

          <a href="${project.live}" target="_blank"
            class="flex-1 text-center bg-[#194BFD] hover:bg-blue-700 transition py-2 rounded-lg text-sm">
            Live Demo
          </a>

          <a href="${project.code}" target="_blank"
            class="flex-1 text-center border border-[#194BFD] text-[#194BFD] hover:bg-[#194BFD] hover:text-white transition py-2 rounded-lg text-sm">
            Code
          </a>

        </div>

      </div>
    </div>
  `;
});
