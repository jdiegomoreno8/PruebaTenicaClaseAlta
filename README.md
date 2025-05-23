# Lista de Tareas - Prototipo en Vue 3
> Prueba técnica para el cargo de Auxiliar de Desarrollo y Soporte Web.
> Aplicación simple construida con Vue.js 3 para consultar, visualizar y filtrar tareas consumidas desde una API externa.
---
## Tecnologías usadas
* Vue.js 3 (Composition API).
* Vite (entorno de desarrollo rápido).
* TypeScript.
* API REST pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/).
---
## Funcionalidades
* Consulta de tareas vía HTTP (método GET).
* Visualización de tareas en una tabla.
* Filtro por estado de la tarea: todas, completadas o pendientes
* Manejo básico de errores en caso de fallos de red
---
## Requisitos
* Node.js v16 o superior.
* npm.
---
## Instrucciones de instalación y ejecución
1. **Clona este repositorio** o descomprime los archivos en una carpeta local:

      git clone https://github.com/tu-usuario/vue-tareas.git
        cd vue-tareas
---
2. Instala las dependencias del proyecto:   
   npm install
---
3. Inicia el servidor de desarrollo: 
   npm run dev
---

4. Abre la aplicación en tu navegador:
   Visita `http://localhost:517#` (#Indica el número del localhost designado).
---
## Estructura de archivos
src/
├── components/
│   └── TaskTable.vue   # Tabla que muestra las tareas
├── App.vue             # Componente principal
└── main.ts             # Punto de entrada de la app
---
## Notas adicionales
* Este proyecto usa solo las primeras 10 tareas de la API.
* El diseño es simple y puede ser fácilmente mejorado con otros frameworks y estilos como Tailwind o Bootstrap si se requiere.
---
## Autor
* Juan Diego Ospina Moreno
---


