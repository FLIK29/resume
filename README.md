# Alexander Elizalde — Portafolio

Portafolio personal construido con React, Vite, TypeScript, Tailwind CSS y Framer Motion. Sitio 100% estático, sin backend, desplegado en GitHub Pages con dominio personalizado (`alexanderelizalde.com`).

## Empezar

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  data/        JSON con todo el contenido editable (perfil, educación, materias, skills, proyectos, experiencia, redes)
  types/       Tipos TypeScript para el contenido
  components/
    ui/        Primitivas reutilizables (Container, SectionHeading, Reveal, Button)
    layout/    Navbar y Footer
    sections/  Cada sección de la página (Hero, About, Education, Subjects, Skills, Projects, Experience, Contact)
```

## Cómo agregar contenido sin tocar componentes

- **Foto de perfil**: coloca tu foto en `public/photo.jpg` (recomendado: cuadrada, mínimo 600×600px). Si el archivo no existe, se muestra un avatar de reemplazo automáticamente — no rompe el layout.
- **CV en PDF**: coloca tu CV en `public/cv.pdf`. El botón "Descargar CV" del Hero ya apunta a esa ruta.
- **Perfil / About**: edita `src/data/profile.json`.
- **Educación**: edita `src/data/education.json`.
- **Materias**: edita el arreglo en `src/data/subjects.json`.
- **Tecnologías**: edita `src/data/skills.json` (agrupadas por categoría).
- **Proyectos**: edita `src/data/projects.json`. Cambia `placeholder: false` y completa `image`, `githubUrl`, `demoUrl` cuando tengas un proyecto real. Las imágenes de proyecto van en `public/projects/`.
- **Experiencia laboral**: agrega objetos al arreglo (vacío por defecto) en `src/data/experience.json`, siguiendo el tipo `ExperienceItem` en `src/types/content.ts`.
- **Redes y contacto**: edita `src/data/social.json`.
- **Imagen para redes sociales (Open Graph)**: coloca una imagen de 1200×630px en `public/og-image.png` para que se vea bien al compartir el link en redes.

## Despliegue

El workflow en `.github/workflows/deploy.yml` construye y publica automáticamente en GitHub Pages en cada push a `main`. Asegúrate de que en GitHub → Settings → Pages, "Source" esté configurado como **GitHub Actions**.

El archivo `public/CNAME` mantiene el dominio personalizado `alexanderelizalde.com`.
