# 📚 Suffixes in English — Interactive B1/B2 Learning Page

An interactive, self-contained web page for learning **English suffixes** at CEFR B1–B2 level. No backend required — runs entirely in the browser.

---

## 🌐 Live Demo (GitHub Pages)

> Once deployed, your URL will look like:  
> `https://<your-username>.github.io/suffixes-english/`

---

## 📂 Estructura del proyecto

```
suffixes-english/
├── index.html          ← Página principal (toda la estructura HTML)
├── README.md
├── css/
│   └── style.css       ← Estilos completos (responsive, variables CSS, animaciones)
└── js/
    ├── data.js         ← Todo el contenido pedagógico (ejercicios, lectura, listening)
    ├── exercises.js    ← Lógica de renderizado y corrección de ejercicios
    ├── tts.js          ← Controlador Web Speech API (Text-to-Speech)
    └── app.js          ← Navegación, tabs, scroll, inicialización
```

---

## 🚀 Cómo ejecutarlo localmente

### Opción 1 — Abrir directamente (sin servidor)

Simplemente abre `index.html` en tu navegador.

> ⚠️ El Text-to-Speech requiere conexión a internet para cargar voces en algunos navegadores (Chrome recomendado).

### Opción 2 — Servidor local con VS Code

1. Instala la extensión **Live Server** en VS Code
2. Abre la carpeta del proyecto
3. Haz clic derecho sobre `index.html` → **Open with Live Server**

### Opción 3 — Servidor local con Python

```bash
# Desde la carpeta del proyecto:
python -m http.server 8080
# Luego abre: http://localhost:8080
```

---

## 🌍 Despliegue en GitHub Pages

1. Sube el repositorio a GitHub:

```bash
git init
git add .
git commit -m "Initial commit: Suffixes English interactive page"
git remote add origin https://github.com/<tu-usuario>/suffixes-english.git
git push -u origin main
```

2. Ve a **Settings → Pages** en tu repositorio de GitHub
3. En **Source**, selecciona `Deploy from a branch` → `main` → `/root`
4. Guarda. Tu página estará disponible en unos segundos.

---

## 🌍 Despliegue en Vercel (opcional)

```bash
npm install -g vercel
vercel
```

Sigue las instrucciones. Vercel detecta automáticamente que es un proyecto estático.

---

## 📖 Descripción del proyecto

| Aspecto | Detalle |
|---|---|
| **Tecnología** | HTML5 + CSS3 + Vanilla JavaScript |
| **Sin dependencias** | No requiere npm, frameworks ni backend |
| **Nivel CEFR** | B1–B2 |
| **Secciones** | Theory, Practice (3 tipos), Reading, Listening |
| **Ejercicios** | 44 ítems interactivos con autocorrección |
| **Audio** | Web Speech API (Text-to-Speech nativo del navegador) |
| **Responsive** | Desktop, tablet y móvil |
| **Accesibilidad** | ARIA labels, roles, teclado, contraste |

### Contenido pedagógico incluido

- **Theory**: Tabla de 13+ sufijos con ejemplos visuales y explicaciones
- **Multiple Choice**: 10 preguntas
- **Gap-Fill**: 10 preguntas
- **Word Formation** (estilo IELTS): 10 preguntas
- **Reading**: Pasaje original ~300 palabras con 20+ sufijos resaltados + 6 preguntas IELTS
- **Listening**: Diálogo conversacional estilo IELTS Section 1 con 8 preguntas + TTS

---

## 🔧 Compatibilidad del Text-to-Speech

| Navegador | Soporte TTS |
|---|---|
| Google Chrome | ✅ Excelente (voces de alta calidad) |
| Microsoft Edge | ✅ Excelente |
| Firefox | ⚠️ Funciona, voces limitadas |
| Safari | ✅ Bueno en macOS/iOS |

---

## 📝 Licencia

MIT — libre para uso educativo y personal.
