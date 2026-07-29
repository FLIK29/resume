/* =========================================================
   main.js — Datos centralizados + lógica interactiva del CV
   ========================================================= */

/* -----------------------------
   1. DATOS (edita esto para actualizar tu CV)
   ----------------------------- */
const DATA = {
  personal: {
    name: "Jesus Alexander Ramirez Elizalde",
    title: "Ingeniero en Desarrollo de Software",
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-usuario",
    email: "tu.correo@ejemplo.com",
    about: `Soy estudiante e Ingeniero en Desarrollo de Software con pasión por construir productos
      digitales sólidos, desde la lógica de backend hasta interfaces cuidadas en el frontend.
      Disfruto resolver problemas complejos, aprender tecnologías nuevas y escribir código limpio
      y mantenible. Busco oportunidades donde pueda seguir creciendo como ingeniero y aportar valor
      real a proyectos de software.`,
    strengths: [
      { icon: "💡", title: "Resolución de problemas", desc: "Pienso en soluciones simples para problemas complejos." },
      { icon: "⚙️", title: "Código limpio", desc: "Escribo software mantenible, legible y bien probado." },
      { icon: "📚", title: "Aprendizaje continuo", desc: "Me adapto rápido a nuevas herramientas y stacks." }
    ]
  },

  skills: [
    { name: "JavaScript", category: "Lenguajes", level: 85 },
    { name: "Python", category: "Lenguajes", level: 80 },
    { name: "Java", category: "Lenguajes", level: 70 },
    { name: "SQL", category: "Lenguajes", level: 75 },
    { name: "React", category: "Frameworks", level: 78 },
    { name: "Node.js", category: "Frameworks", level: 75 },
    { name: "Tailwind CSS", category: "Frameworks", level: 85 },
    { name: "Express", category: "Frameworks", level: 70 },
    { name: "PostgreSQL", category: "Bases de Datos", level: 72 },
    { name: "MongoDB", category: "Bases de Datos", level: 68 },
    { name: "MySQL", category: "Bases de Datos", level: 75 },
    { name: "Git & GitHub", category: "DevOps/Cloud", level: 82 },
    { name: "Docker", category: "DevOps/Cloud", level: 60 },
    { name: "GitHub Actions", category: "DevOps/Cloud", level: 58 }
  ],

  projects: [
    {
      title: "Gestor de Tareas Fullstack",
      category: "Fullstack",
      description: "Aplicación web para gestión de tareas con autenticación, tablero estilo Kanban y API REST propia.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      demo: "#",
      repo: "#"
    },
    {
      title: "API de Inventario",
      category: "Backend",
      description: "API RESTful para control de inventario con autenticación JWT, roles de usuario y documentación Swagger.",
      tech: ["Node.js", "Express", "PostgreSQL", "JWT"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Landing Page Interactiva",
      category: "Frontend",
      description: "Sitio de una sola página con animaciones, modo oscuro y diseño 100% responsive.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Este CV Interactivo",
      category: "Frontend",
      description: "El sitio que estás viendo ahora mismo: CV dinámico con filtros, búsqueda y modo oscuro, listo para GitHub Pages.",
      tech: ["HTML5", "Tailwind CSS", "JavaScript ES6+"],
      demo: "#",
      repo: "#"
    },
    {
      title: "Script de Automatización de Backups",
      category: "Scripts/Tools",
      description: "Herramienta de línea de comandos en Python para automatizar respaldos de bases de datos y subirlos a la nube.",
      tech: ["Python", "Bash", "Cron"],
      demo: "#",
      repo: "#"
    },
    {
      title: "E-commerce Fullstack",
      category: "Fullstack",
      description: "Tienda en línea con carrito de compras, pasarela de pago simulada y panel de administración.",
      tech: ["React", "Node.js", "MySQL", "Stripe API"],
      demo: "#",
      repo: "#"
    }
  ],

  timeline: [
    {
      type: "work",
      role: "Desarrollador de Software (Prácticas)",
      place: "Nombre de la Empresa",
      period: "2025 - Presente",
      description: "Desarrollo de módulos internos, mantenimiento de APIs y colaboración en equipo usando metodologías ágiles (Scrum)."
    },
    {
      type: "education",
      role: "Ingeniería en Desarrollo de Software",
      place: "Nombre de la Universidad",
      period: "2023 - Presente",
      description: "Formación en fundamentos de programación, estructuras de datos, bases de datos, ingeniería de software y desarrollo web."
    },
    {
      type: "education",
      role: "Bachillerato",
      place: "Nombre de la Institución",
      period: "2020 - 2023",
      description: "Formación general con énfasis en ciencias exactas y primeros acercamientos a la programación."
    }
  ]
};

/* -----------------------------
   2. UTILIDADES
   ----------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

function normalize(str) {
  return str.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/* -----------------------------
   3. DARK MODE
   ----------------------------- */
function initDarkMode() {
  const root = document.documentElement;
  const stored = localStorage.getItem("theme");

  const isDark = stored === "dark";
  root.classList.toggle("dark", isDark);
  updateDarkModeIcon(isDark);

  $("#darkModeToggle").addEventListener("click", () => {
    const nowDark = !root.classList.contains("dark");
    root.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    updateDarkModeIcon(nowDark);
  });
}

function updateDarkModeIcon(isDark) {
  $("#iconSun").classList.toggle("hidden", !isDark);
  $("#iconMoon").classList.toggle("hidden", isDark);
}

/* -----------------------------
   4. NAV MÓVIL
   ----------------------------- */
function initMobileMenu() {
  const btn = $("#mobileMenuBtn");
  const menu = $("#mobileMenu");
  btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  $$("#mobileMenu a").forEach(link =>
    link.addEventListener("click", () => menu.classList.add("hidden"))
  );
}

/* -----------------------------
   5. HERO / PERSONAL INFO
   ----------------------------- */
function renderPersonal() {
  $("#heroGithub").href = DATA.personal.github;
  $("#heroLinkedin").href = DATA.personal.linkedin;
  $("#heroEmail").href = `mailto:${DATA.personal.email}`;

  $("#aboutText").textContent = DATA.personal.about;

  $("#aboutStrengths").innerHTML = DATA.personal.strengths.map(s => `
    <div class="rounded-xl border border-slate-200 dark:border-slate-800 p-5 text-center">
      <div class="text-3xl mb-2">${s.icon}</div>
      <h3 class="font-semibold mb-1">${s.title}</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400">${s.desc}</p>
    </div>
  `).join("");

  $("#currentYear").textContent = new Date().getFullYear();
}

/* -----------------------------
   6. HABILIDADES (con filtro)
   ----------------------------- */
let activeSkillFilter = "Todos";

function renderSkillFilters() {
  const categories = ["Todos", ...new Set(DATA.skills.map(s => s.category))];
  $("#skillsFilters").innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeSkillFilter ? "active" : ""}" data-skill-filter="${cat}">
      ${cat}
    </button>
  `).join("");

  $$("[data-skill-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeSkillFilter = btn.dataset.skillFilter;
      renderSkillFilters();
      renderSkills();
    });
  });
}

function renderSkills() {
  const grid = $("#skillsGrid");
  const filtered = activeSkillFilter === "Todos"
    ? DATA.skills
    : DATA.skills.filter(s => s.category === activeSkillFilter);

  grid.innerHTML = filtered.map(s => `
    <div class="skill-card">
      <div class="flex items-center justify-between">
        <span class="font-semibold">${s.name}</span>
        <span class="text-xs text-slate-400">${s.category}</span>
      </div>
      <div class="skill-bar-track">
        <div class="skill-bar-fill" data-level="${s.level}"></div>
      </div>
    </div>
  `).join("");

  requestAnimationFrame(() => {
    $$(".skill-bar-fill", grid).forEach(bar => {
      bar.style.width = bar.dataset.level + "%";
    });
  });
}

/* -----------------------------
   7. PROYECTOS (filtro + búsqueda)
   ----------------------------- */
let activeProjectFilter = "Todos";
let searchTerm = "";

function renderProjectFilters() {
  const categories = ["Todos", "Frontend", "Backend", "Fullstack", "Scripts/Tools"];
  $("#projectFilters").innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeProjectFilter ? "active" : ""}" data-project-filter="${cat}">
      ${cat}
    </button>
  `).join("");

  $$("[data-project-filter]").forEach(btn => {
    btn.addEventListener("click", () => {
      activeProjectFilter = btn.dataset.projectFilter;
      renderProjectFilters();
      renderProjects();
    });
  });
}

function projectCardHTML(p) {
  return `
    <div class="project-card filter-item">
      <div class="flex items-start justify-between mb-3">
        <h3 class="font-bold text-lg">${p.title}</h3>
        <span class="tech-badge">${p.category}</span>
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">${p.description}</p>
      <div class="flex flex-wrap gap-2 mb-5">
        ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("")}
      </div>
      <div class="flex gap-3 mt-auto">
        <a href="${p.demo}" target="_blank" rel="noopener" class="flex-1 text-center text-sm font-semibold bg-brand-600 hover:bg-brand-700 text-white py-2 rounded-lg transition">Demo</a>
        <a href="${p.repo}" target="_blank" rel="noopener" class="flex-1 text-center text-sm font-semibold border border-slate-300 dark:border-slate-700 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition">Repositorio</a>
      </div>
    </div>
  `;
}

function renderProjects() {
  const grid = $("#projectsGrid");
  const term = normalize(searchTerm.trim());

  const filtered = DATA.projects.filter(p => {
    const matchesCategory = activeProjectFilter === "Todos" || p.category === activeProjectFilter;
    const haystack = normalize(`${p.title} ${p.description} ${p.tech.join(" ")}`);
    const matchesSearch = term === "" || haystack.includes(term);
    return matchesCategory && matchesSearch;
  });

  grid.innerHTML = filtered.map(projectCardHTML).join("");
  $("#noProjectsMsg").classList.toggle("hidden", filtered.length !== 0);
}

function initProjectSearch() {
  $("#projectSearch").addEventListener("input", e => {
    searchTerm = e.target.value;
    renderProjects();
  });
}

/* -----------------------------
   8. TIMELINE (experiencia + educación, acordeón)
   ----------------------------- */
function renderTimeline() {
  const container = $("#timelineContainer");
  container.innerHTML = `<div class="timeline-line"></div>` + DATA.timeline.map((item, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        <button class="accordion-header w-full flex items-center justify-between gap-3 p-4 text-left" data-accordion="${i}">
          <div>
            <p class="text-xs font-semibold uppercase tracking-wide ${item.type === "work" ? "text-brand-600 dark:text-brand-400" : "text-slate-400"}">
              ${item.type === "work" ? "Experiencia" : "Educación"} · ${item.period}
            </p>
            <h3 class="font-bold">${item.role}</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">${item.place}</p>
          </div>
          <svg class="accordion-chevron w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
        <div class="accordion-body px-4" data-accordion-body="${i}">
          <p class="text-sm text-slate-500 dark:text-slate-400 pb-4">${item.description}</p>
        </div>
      </div>
    </div>
  `).join("");

  $$("[data-accordion]", container).forEach(header => {
    header.addEventListener("click", () => {
      const id = header.dataset.accordion;
      const body = $(`[data-accordion-body="${id}"]`, container);
      const chevron = $(".accordion-chevron", header);
      body.classList.toggle("open");
      chevron.classList.toggle("open");
    });
  });

  if (DATA.timeline.length) {
    $(`[data-accordion="0"]`, container).click();
  }
}

/* -----------------------------
   9. SCROLL REVEAL
   ----------------------------- */
function initScrollReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  $$(".reveal").forEach(el => observer.observe(el));
}

/* -----------------------------
   10. TOAST
   ----------------------------- */
let toastTimeout;
function showToast(message, type = "success") {
  const toast = $("#toast");
  toast.textContent = message;
  toast.style.background = type === "success" ? "#16a34a" : "#dc2626";
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("show"), 3500);
}

/* -----------------------------
   11. FORMULARIO DE CONTACTO
   -----------------------------
   Reemplaza FORM_ENDPOINT por tu endpoint de Formspree
   (https://formspree.io) para recibir los mensajes en tu correo.
   Ejemplo: "https://formspree.io/f/xxxxxxx"
*/
const FORM_ENDPOINT = "";

function validateField(name, value) {
  switch (name) {
    case "name":
      return value.trim().length >= 2 ? "" : "Ingresa tu nombre (mínimo 2 caracteres).";
    case "email":
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Ingresa un correo electrónico válido.";
    case "subject":
      return value.trim().length >= 3 ? "" : "Ingresa un asunto (mínimo 3 caracteres).";
    case "message":
      return value.trim().length >= 10 ? "" : "Tu mensaje debe tener al menos 10 caracteres.";
    default:
      return "";
  }
}

function initContactForm() {
  const form = $("#contactForm");
  const submitBtn = $("#submitBtn");
  const submitBtnText = $("#submitBtnText");
  const statusEl = $("#formStatus");

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const formData = new FormData(form);
    let isValid = true;

    ["name", "email", "subject", "message"].forEach(field => {
      const value = formData.get(field) || "";
      const error = validateField(field, value);
      const input = $(`#${field}`);
      const errorEl = $(`[data-error-for="${field}"]`);
      errorEl.textContent = error;
      input.classList.toggle("input-error", !!error);
      if (error) isValid = false;
    });

    if (!isValid) {
      statusEl.textContent = "";
      return;
    }

    submitBtn.disabled = true;
    submitBtnText.textContent = "Enviando...";
    statusEl.textContent = "";

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData
        });
        if (!res.ok) throw new Error("Error en el envío");
      } else {
        // Sin endpoint configurado: simula el envío para pruebas locales.
        await new Promise(resolve => setTimeout(resolve, 900));
      }

      form.reset();
      showToast("¡Mensaje enviado con éxito! Te responderé pronto.", "success");
    } catch (err) {
      showToast("Ocurrió un error al enviar el mensaje. Intenta de nuevo.", "error");
    } finally {
      submitBtn.disabled = false;
      submitBtnText.textContent = "Enviar mensaje";
    }
  });
}

/* -----------------------------
   12. INIT
   ----------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initDarkMode();
  initMobileMenu();
  renderPersonal();
  renderSkillFilters();
  renderSkills();
  renderProjectFilters();
  renderProjects();
  initProjectSearch();
  renderTimeline();
  initContactForm();
  initScrollReveal();
});
