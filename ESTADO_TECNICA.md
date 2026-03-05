# Estado de la Técnica — Emprende Digital

## Stack principal

| Capa | Tecnología | Versión | Uso |
|------|-----------|---------|-----|
| Framework | **Next.js** | 16.1.6 | App Router, SSG/SSR, rutas dinámicas |
| UI Library | **React** | 19.2.3 | Componentes funcionales, JSX |
| Lenguaje | **TypeScript** | ^5 | Tipado estático en todo el proyecto |
| Estilos | **Tailwind CSS** | ^4 | Utility-first CSS, `@theme` tokens personalizados |

## Diseño y UI

- **Plus Jakarta Sans + Inter** — Tipografías vía Google Fonts (display y body)
- **Material Symbols Outlined** — Íconos de Google (ligature-based)
- **Bento Grid** — Layout personalizado con CSS Grid en `globals.css`
- **Tailwind v4 `@theme`** — Tokens de diseño: colores (`primary #4F46E5`, `deep-slate`, `accent-peach`), sombras, border-radius

## Arquitectura del proyecto

```
app/
├── layout.tsx          # Root layout (fuentes, metadata)
├── page.tsx            # Landing page
├── globals.css         # Tokens Tailwind v4
├── (auth)/
│   ├── login/page.tsx
│   └── register/page.tsx
└── (dashboard)/
    └── courses/
        ├── page.tsx           # Catálogo (datos estáticos)
        ├── [id]/page.tsx
        └── [id]/lessons/[lessonId]/page.tsx
```

## Backend / Datos

- **Actualmente**: datos estáticos hardcodeados (MVP sin backend real)
- **Planeado**: **Supabase**
  - Auth — registro, login, sesiones con JWT
  - PostgreSQL — base de datos para cursos, usuarios, progreso
  - Row Level Security (RLS) — control de acceso por usuario
  - Storage — subida de materiales y avatares
  - Realtime — para comunidad/chat en tiempo real

## Herramientas de desarrollo

| Herramienta | Uso |
|-------------|-----|
| **ESLint** + `eslint-config-next` | Linting |
| **PostCSS** + `@tailwindcss/postcss` | Procesamiento CSS |
| **Turbopack** | Bundler en dev/build (integrado en Next.js 16) |
| **Git + GitHub** | Control de versiones, repositorio remoto |

## Estado actual del MVP

| Módulo | Estado |
|--------|--------|
| Landing page | ✅ Implementada (diseño fiel al HTML proporcionado) |
| Login / Register | ✅ Implementados (estáticos, sin auth real) |
| Catálogo de cursos | ✅ Implementado (datos estáticos) |
| Vista de lección | ✅ Rutas dinámicas funcionando |
| Autenticación real | ⏳ Pendiente (Supabase Auth) |
| Base de datos | ⏳ Pendiente (Supabase PostgreSQL) |
| Pagos / suscripciones | ⏳ No iniciado |
