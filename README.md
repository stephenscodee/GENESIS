# Genesis (Execution Marketplace)

> Plataforma estructurada para conectar roles y ejecutar proyectos SaaS B2B.  
> _Disciplina de ejecución, sin ruido ni vanity metrics._

---

## 📐 Propósito

Genesis es un **marketplace de ejecución**. Está diseñado para founders y equipos de productos SaaS B2B que buscan:

- Publicar soluciones estructuradas (y no pitches vacíos)
- Cubrir **roles críticos**: originator, builder, growth, capital
- Hacer **matching real** por skills, etapa y necesidades de ejecución
- Medir reputación por hechos y resultados (no likes ni seguidores)
- Reducir fricción y riesgo al ejecutar ideas correctas

---

## 🧑‍💻 Primer nicho:

**Founders y equipos técnicos de SaaS B2B (automatización, IA, workflows)**  
Enfoque en idioma español para early adopters con historial comprobable.

---

## 🔩 Stack & Tooling

- **Frontend:** Next.js 15+ (App Router, Tailwind CSS)
- **Backend:** NestJS (Node.js, TypeScript)
- **DB/ORM:** PostgreSQL + Prisma
- **Infra:** Vercel (FE), Fly.io/Supabase (BE/DB)
- **Auth:** OAuth (Google, GitHub), JWT
- **Observabilidad:** Sentry, PostHog (trazas, funnels reales)
- **Seguridad:** KYC para capital, NDA templates, acceso granular

---

## 🗂️ Modelo de Datos (resumido)

- **User** (rol, skills, experiencia, KYC)
- **Project** (problema, solución, workflow, stage, riesgos, roles abiertos)
- **Match** (id, project_id, user_id, status, feedback)
- **Reputation** (score objetiva, feedback cruzado, consistencia)

---

## 🚩 Alcance MVP

- Alta de usuario segmentada por rol
- Publicación de proyectos estructurados
- Matching básico por skills, etapa y roles abiertos
- Gestión de solicitudes/contactos
- Módulo de reputación mínima (proyectos cerrados, feedback)
- Monetización: subscripción para contactar, fee por match validado

---

## 🚀 Roadmap resumido

- **Fase 1:** MVP (como arriba)
- **Fase 2:** Señales de ejecución (más feedback, tracking resultados, propuestas de mejora)
- **Fase 3:** Matching avanzado (IA sobre patrones de cierre y éxito, alertas de riesgo)
- **Fase 4+:** Private scouting para capital, deal flow a VCs, incubadora distribuida

---

## 🧪 Métricas que importan

- % de proyectos ejecutados/cerrados
- Tiempo hasta primer match relevante
- Retención mensual por rol (originator, builder, growth, capital)
- Feedback cruzado útil (calidad del matching)

---

## ❗️Notas y filosofía

- NO chat caótico, NO feeds sociales, NO vanity metrics
- Sí: Fricción baja, estructura alta, acceso selectivo, calidad acumulativa
- Validación de hipótesis antes de escalar: mantener contacto continuo con usuarios del nicho

---

## 🙋 Colaboración

Issues y PRs bienvenidos.  
No se aceptan features sociales ni peticiones fuera del scope de ejecución.

---
