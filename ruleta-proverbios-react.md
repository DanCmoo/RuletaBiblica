# Ruleta de Proverbios - Guía Completa React + Vercel

## 📋 Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación y Setup Inicial](#instalación-y-setup-inicial)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Desarrollo de Componentes](#desarrollo-de-componentes)
5. [Configuración de Estilos](#configuración-de-estilos)
6. [Prueba en Desarrollo](#prueba-en-desarrollo)
7. [Despliegue en Vercel](#despliegue-en-vercel)
8. [Mantenimiento y Actualizaciones](#mantenimiento-y-actualizaciones)

---

## 📦 Requisitos Previos

### Software Necesario
- **Node.js** v18.x o superior
- **npm** v9.x o superior
- **Git** (para control de versiones y despliegue)
- **Editor de código** (VS Code recomendado)

### Verificar Instalación
```bash
node -v
npm -v
git --version
```

### Cuentas Necesarias
- **GitHub**: Crear cuenta en https://github.com (requerida para Vercel)
- **Vercel**: Se vincula automáticamente con GitHub

---

## 🚀 Instalación y Setup Inicial

### Paso 1: Crear el Proyecto React con Vite
```bash
npm create vite@latest ruleta-proverbios -- --template react
```

Responde a los prompts:
- **Name**: `ruleta-proverbios` (o tu nombre preferido)
- **Framework**: Selecciona `React`
- **Variant**: Selecciona `JavaScript`

### Paso 2: Navegar al Directorio
```bash
cd ruleta-proverbios
```

### Paso 3: Instalar Dependencias
```bash
npm install
```

### Paso 4: Verificar que Funciona
```bash
npm run dev
```

Deberías ver algo como:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
```

Abre tu navegador en `http://localhost:5173/` para verificar.

---

## 📁 Estructura del Proyecto

### Estructura Recomendada
```
ruleta-proverbios/
├── node_modules/                 # Dependencias (generado automáticamente)
├── public/                        # Archivos estáticos
│   └── favicon.ico               # Icono de la pestaña
├── src/                          # Código fuente principal
│   ├── components/               # Componentes reutilizables
│   │   ├── Wheel.jsx            # Componente de la ruleta
│   │   └── ResultDisplay.jsx    # Componente para mostrar resultado
│   ├── data/                     # Datos estáticos
│   │   └── proverbs.js          # Array de proverbios
│   ├── styles/                   # Estilos CSS
│   │   ├── Wheel.module.css     # Estilos del componente Wheel
│   │   ├── ResultDisplay.module.css  # Estilos del resultado
│   │   ├── App.module.css       # Estilos del App
│   │   └── global.css           # Estilos globales
│   ├── App.jsx                  # Componente principal
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales (por defecto)
├── .gitignore                   # Archivos a ignorar en Git
├── .vercelignore                # Archivos a ignorar en Vercel
├── index.html                   # HTML principal
├── package.json                 # Dependencias y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                    # Documentación del proyecto
```

---

## 💻 Desarrollo de Componentes

### 1. Archivo de Datos: `src/data/proverbs.js`

**Reglas:**
- Importar este archivo en componentes que necesiten los proverbios
- Cada proverbio DEBE tener las propiedades `id`, `text`, `description`
- Los IDs deben ser únicos y secuenciales

```javascript
export const proverbs = [
  {
    id: 1,
    text: "\"La sabiduría es más valiosa que el oro\"",
    description: "Aquellos que buscan conocimiento y toman decisiones bien pensadas. Personas que aprenden de la experiencia y guían a otros con buen criterio."
  },
  {
    id: 2,
    text: "\"La amabilidad calienta el corazón del necesitado\"",
    description: "Personas que demuestran empatía y consideración. Aquellos que se acercan con afecto genuino a quienes les rodean."
  },
  {
    id: 3,
    text: "\"La paciencia es un árbol de raíz amarga pero de frutos dulces\"",
    description: "Aquellos que saben esperar el momento correcto y perseveran en sus objetivos. Personas que no se rinden ante las dificultades."
  },
  {
    id: 4,
    text: "\"La valentía no es la ausencia del miedo, sino actuar a pesar de él\"",
    description: "Personas que enfrentan desafíos con determinación. Aquellos que se atreven a tomar decisiones difíciles por lo correcto."
  },
  {
    id: 5,
    text: "\"La humildad prepara el camino para la sabiduría\"",
    description: "Aquellos que reconocen sus limitaciones y están abiertos a aprender. Personas que no necesitan alardear de sus logros."
  },
  {
    id: 6,
    text: "\"La bondad es un regalo que se multiplica cuando se comparte\"",
    description: "Personas generosas que piensan en el bien de los demás. Aquellos que buscan ayudar sin esperar recompensa."
  },
  {
    id: 7,
    text: "\"La integridad es la base de la confianza\"",
    description: "Personas honradas que mantienen sus palabras y acciones alineadas. Aquellos en quienes se puede confiar completamente."
  },
  {
    id: 8,
    text: "\"La compasión es el idioma del corazón\"",
    description: "Aquellos que sienten genuinamente por las dificultades ajenas. Personas que se compadecen y actúan para aliviar el sufrimiento."
  },
  {
    id: 9,
    text: "\"La perseverancia transforma los sueños en realidad\"",
    description: "Personas que no se desaniman fácilmente y luchan por sus metas. Aquellos que entienden que el éxito requiere constancia."
  },
  {
    id: 10,
    text: "\"El perdón libera el alma de cadenas invisibles\"",
    description: "Aquellos que pueden soltar resentimientos y ofrece una segunda oportunidad. Personas que entienden el poder sanador del perdón."
  },
  {
    id: 11,
    text: "\"La generosidad es contagiosa\"",
    description: "Personas que comparten lo que tienen sin dudarlo. Aquellos cuyo ejemplo inspira a otros a ser generosos."
  },
  {
    id: 12,
    text: "\"La prudencia es la guía del sabio\"",
    description: "Aquellos que piensan antes de actuar y consideran las consecuencias. Personas que toman decisiones reflexivas y cuidadosas."
  }
];
```

### 2. Componente Wheel: `src/components/Wheel.jsx`

**Reglas:**
- Recibe como props: `isSpinning`, `onSpinComplete`, `selectedProverb`
- Usa CSS Modules para estilos
- El componente NO debe manejar la lógica de obtener proverbios, solo mostrarlos
- Durará 3 segundos girando

```javascript
import { useState, useEffect } from 'react';
import styles from '../styles/Wheel.module.css';

const Wheel = ({ isSpinning, onSpinComplete, selectedProverbId }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (isSpinning) {
      const randomRotation = Math.floor(Math.random() * 360) + 720;
      setRotation(randomRotation);

      const timer = setTimeout(() => {
        onSpinComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSpinning, onSpinComplete]);

  return (
    <div className={styles.wheelContainer}>
      <div
        className={`${styles.wheel} ${isSpinning ? styles.spinning : ''}`}
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        GIRA
      </div>
    </div>
  );
};

export default Wheel;
```

### 3. Componente ResultDisplay: `src/components/ResultDisplay.jsx`

**Reglas:**
- Recibe como props: `proverb`, `isVisible`
- Muestra solo el texto y descripción
- NO incluye botones de acción
- Usa animación de entrada suave (opacity)

```javascript
import styles from '../styles/ResultDisplay.module.css';

const ResultDisplay = ({ proverb, isVisible }) => {
  if (!isVisible || !proverb) {
    return null;
  }

  return (
    <div className={`${styles.resultContainer} ${isVisible ? styles.show : ''}`}>
      <div className={styles.resultTitle}>Proverbio</div>
      <div className={styles.resultText}>{proverb.text}</div>
      <div className={styles.resultDescription}>{proverb.description}</div>
    </div>
  );
};

export default ResultDisplay;
```

### 4. Componente Principal: `src/App.jsx`

**Reglas:**
- Maneja el estado: `isSpinning`, `currentProverb`, `showResult`
- Función `spinWheel()`: selecciona proverbio aleatorio y activa la ruleta
- Función `resetApp()`: limpia el estado
- El flujo es: Girar → Mostrar resultado → Volver a girar

```javascript
import { useState } from 'react';
import Wheel from './components/Wheel';
import ResultDisplay from './components/ResultDisplay';
import { proverbs } from './data/proverbs';
import styles from './styles/App.module.css';

function App() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentProverb, setCurrentProverb] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const getRandomProverb = () => {
    return proverbs[Math.floor(Math.random() * proverbs.length)];
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);
  };

  const handleSpinComplete = () => {
    setCurrentProverb(getRandomProverb());
    setShowResult(true);
    setIsSpinning(false);
  };

  const resetApp = () => {
    setShowResult(false);
    setCurrentProverb(null);
    setIsSpinning(false);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>✨ Ruleta de Proverbios ✨</h1>
        <p className={styles.subtitle}>Descubre una virtud que te caracteriza o reconoce a otros</p>
      </header>

      <div className={styles.infoBox}>
        <strong>¿Cómo usar:</strong> Presiona el botón "Girar la Ruleta" para obtener un proverbio.
      </div>

      <Wheel
        isSpinning={isSpinning}
        onSpinComplete={handleSpinComplete}
        selectedProverbId={currentProverb?.id}
      />

      <div className={styles.buttonContainer}>
        <button
          onClick={spinWheel}
          disabled={isSpinning}
          className={styles.spinBtn}
        >
          🎡 Girar la Ruleta
        </button>
        <button
          onClick={resetApp}
          className={styles.resetBtn}
        >
          Comenzar de Nuevo
        </button>
      </div>

      <ResultDisplay proverb={currentProverb} isVisible={showResult} />
    </div>
  );
}

export default App;
```

---

## 🎨 Configuración de Estilos

### Estructura CSS Modules

**Ventajas de CSS Modules:**
- Estilos aislados por componente
- Evita conflictos de nombres
- Mejora la mantenibilidad

### 1. `src/styles/global.css` - Estilos Globales

```css
:root {
  --color-primary: #2180a3;
  --color-primary-hover: #1a6480;
  --color-bg: #f0f4f8;
  --color-surface: #ffffff;
  --color-text: #1a1a1a;
  --color-text-secondary: #666666;
  --color-accent-gold: #d4a574;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, var(--color-bg) 0%, #e0eaf4 100%);
  min-height: 100vh;
  color: var(--color-text);
}

html {
  scroll-behavior: smooth;
}
```

### 2. `src/styles/App.module.css`

```css
.container {
  max-width: 900px;
  margin: 0 auto;
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  padding: 40px;
  text-align: center;
}

.header {
  margin-bottom: 30px;
}

.header h1 {
  color: var(--color-primary);
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.05);
}

.subtitle {
  color: var(--color-text-secondary);
  font-size: 1.1em;
  font-style: italic;
}

.infoBox {
  background: #e3f2fd;
  border-left: 4px solid var(--color-primary);
  padding: 15px;
  margin: 20px 0;
  border-radius: 4px;
  text-align: left;
  font-size: 0.9em;
  color: #1565c0;
}

.buttonContainer {
  margin: 30px 0;
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.spinBtn,
.resetBtn {
  background: var(--color-primary);
  color: white;
  border: none;
  padding: 14px 40px;
  font-size: 1.1em;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(33, 128, 163, 0.3);
}

.spinBtn:hover:not(:disabled),
.resetBtn:hover:not(:disabled) {
  background: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(33, 128, 163, 0.4);
}

.spinBtn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .header h1 {
    font-size: 2em;
  }

  .buttonContainer {
    flex-direction: column;
  }

  .spinBtn,
  .resetBtn {
    width: 100%;
  }
}
```

### 3. `src/styles/Wheel.module.css`

```css
.wheelContainer {
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.wheel {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #FF6B6B 0deg 30deg,
    #4ECDC4 30deg 60deg,
    #FFE66D 60deg 90deg,
    #95E1D3 90deg 120deg,
    #C7CEEA 120deg 150deg,
    #FFAFCC 150deg 180deg,
    #BDB2FF 180deg 210deg,
    #A0D995 210deg 240deg,
    #FF9999 240deg 270deg,
    #8FD9E6 270deg 300deg,
    #F7B731 300deg 330deg,
    #5F27CD 330deg 360deg
  );
  border: 8px solid #2180a3;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2), inset 0 0 20px rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  position: relative;
  transition: transform 0.3s ease;
}

.wheel::before {
  content: '▼';
  position: absolute;
  top: -25px;
  font-size: 30px;
  color: #2180a3;
  z-index: 10;
  text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.spinning {
  animation: spin 3s linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .wheel {
    width: 250px;
    height: 250px;
  }
}
```

### 4. `src/styles/ResultDisplay.module.css`

```css
.resultContainer {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #d4a574;
  border-radius: 12px;
  padding: 30px;
  margin: 30px 0;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.resultContainer.show {
  opacity: 1;
  pointer-events: auto;
}

.resultTitle {
  color: #2180a3;
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 15px;
}

.resultText {
  color: #1a1a1a;
  font-size: 1.15em;
  line-height: 1.6;
  margin-bottom: 15px;
  font-style: italic;
}

.resultDescription {
  color: #666666;
  font-size: 0.95em;
  line-height: 1.5;
  background: white;
  padding: 15px;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .resultText {
    font-size: 1em;
  }

  .resultDescription {
    font-size: 0.9em;
  }
}
```

### 5. Actualizar `src/main.jsx`

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 🔍 Prueba en Desarrollo

### Verificar que todo funciona
```bash
npm run dev
```

**Checklist de pruebas:**
- [ ] La ruleta gira suavemente
- [ ] La animación dura 3 segundos
- [ ] El proverbio aparece después de girar
- [ ] Los botones están activos/inactivos correctamente
- [ ] El botón "Comenzar de Nuevo" reinicia todo
- [ ] Es responsive en dispositivos móviles
- [ ] Los estilos se ven correctamente
- [ ] No hay errores en la consola

---

## 🌍 Despliegue en Vercel

### Paso 1: Crear Repositorio en GitHub

```bash
# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer primer commit
git commit -m "Initial commit: Ruleta de Proverbios React App"

# Crear repositorio en GitHub (manualmente en github.com)
# Copiar la URL del repositorio

# Agregar remote
git remote add origin https://github.com/tu-usuario/ruleta-proverbios.git

# Hacer push
git branch -M main
git push -u origin main
```

### Paso 2: Crear archivo `.vercelignore`

Crea un archivo `.vercelignore` en la raíz del proyecto:

```
node_modules
.git
.env.local
.DS_Store
```

### Paso 3: Instalar Vercel CLI (Opcional)

```bash
npm install -g vercel
```

### Paso 4: Desplegar en Vercel

**Opción A: Mediante la interfaz web (Recomendada)**

1. Ir a https://vercel.com/
2. Hacer click en "Sign Up" y conectar con GitHub
3. Click en "Import Project"
4. Seleccionar tu repositorio `ruleta-proverbios`
5. Vercel detectará automáticamente que es un proyecto React + Vite
6. Click en "Deploy"

**Opción B: Mediante Vercel CLI**

```bash
vercel
```

Seguir los prompts y seleccionar:
- Scope: Tu cuenta de Vercel
- Link to existing project: No
- Project name: `ruleta-proverbios`
- Directory: `./` (raíz)

### Paso 5: Configurar dominio personalizado (Opcional)

En https://vercel.com/dashboard:
1. Seleccionar el proyecto
2. Ir a "Settings" → "Domains"
3. Agregar tu dominio personalizado

---

## 📝 Archivo `vercel.json` (Configuración Avanzada)

**Crear en la raíz del proyecto** si necesitas configuración especial:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "outputDirectory": "dist"
}
```

---

## 🔧 Mantenimiento y Actualizaciones

### Agregar Más Proverbios

1. Editar `src/data/proverbs.js`
2. Agregar nuevo objeto al array `proverbs`
3. Asignar `id` único
4. Hacer commit y push a GitHub

**Ejemplo:**
```javascript
{
  id: 13,
  text: "\"Tu nuevo proverbio aquí\"",
  description: "Descripción completa del proverbio..."
}
```

### Cambiar Colores de la Ruleta

Editar `src/styles/Wheel.module.css`, propiedad `background` del `.wheel`:

```css
background: conic-gradient(
  from 0deg,
  #color1 0deg 30deg,
  #color2 30deg 60deg,
  /* ... más colores ... */
);
```

### Cambiar Tipografía Global

Editar `src/styles/global.css`:

```css
body {
  font-family: 'Tu fuente aquí', sans-serif;
}
```

### Actualizar desde GitHub

Vercel se despliega automáticamente cuando haces push a `main`:

```bash
git add .
git commit -m "Descripción de cambios"
git push origin main
```

---

## 🐛 Solución de Problemas

### Error: "npm: command not found"
- Instalar Node.js desde https://nodejs.org

### Error: "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### La ruleta no gira
- Verificar que no hay errores en la consola (F12)
- Verificar que `Wheel.jsx` tiene la animación correcta
- Verificar que `App.jsx` llama a `onSpinComplete`

### Vercel dice "Build failed"
- Ver logs en https://vercel.com/dashboard
- Verificar que `package.json` tiene script `build`
- Verificar que no hay errores en la compilación local

### Cambios no se ven después de desplegar
- Esperar 60 segundos (Vercel necesita redeployed)
- Hard refresh en navegador (Ctrl+Shift+R)
- Limpiar caché: Ver en Vercel dashboard → Deployments → Redeploy

---

## 📚 Recursos Útiles

- [Documentación Vite](https://vitejs.dev/)
- [Documentación React Hooks](https://react.dev/reference/react/hooks)
- [Documentación Vercel](https://vercel.com/docs)
- [CSS Modules en React](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
- [CSS Grid y Flexbox](https://developer.mozilla.org/es/docs/Learn/CSS/CSS_layout)

---

## ✅ Checklist Final

Antes de desplegar a producción:

- [ ] Todos los componentes creados
- [ ] Todos los archivos de estilos listos
- [ ] Prueba local sin errores
- [ ] `npm run build` ejecuta sin errores
- [ ] Git repositorio sincronizado
- [ ] Vercel vinculada con GitHub
- [ ] Deploy realizado exitosamente
- [ ] URL de Vercel funciona correctamente
- [ ] Responsive en móvil, tablet y desktop
- [ ] Documentación actualizada

---

## 📞 Notas Importantes

1. **Seguridad**: No subas variables de entorno a GitHub
2. **Performance**: Vercel CDN distribuye tu app globalmente
3. **Gratis**: Vercel ofrece tier gratuito ilimitado para proyectos estáticos
4. **Automático**: Cada push a `main` en GitHub dispara un nuevo deploy en Vercel
5. **Dominio**: Tu app estará en `[nombre-proyecto].vercel.app`

---

**Última actualización**: Diciembre 2024
**Versión**: 1.0
