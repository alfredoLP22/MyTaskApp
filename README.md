# 📝 MyTaskApp

Una aplicación simple y elegante creada con **React Native (Expo)** para gestionar tareas, con persistencia local usando **AsyncStorage**.  
Permite **agregar, marcar como completadas, eliminar y filtrar** tareas según su estado (todas, pendientes o completadas).

---

## 🚀 Características principales

- ✅ Agregar nuevas tareas.
- 🔁 Marcar tareas como completadas o pendientes.
- 🗑️ Eliminar tareas fácilmente.
- 🔍 Filtrar tareas por estado:
  - Todas
  - Pendientes
  - Completadas
- 💾 Persistencia local con **AsyncStorage**.
- 🎨 Interfaz oscura moderna basada en el tema `#0f172a`.

---

## 🧩 Estructura del proyecto

src/
├── components/
│ ├── TaskInput.tsx # Componente para agregar nuevas tareas
│ ├── TaskList.tsx # Lista de tareas
│
├── hooks/
│ └── useTaskInput.ts # Hook personalizado para la lógica de agregar tarea
│ └── useTasks.ts # Hook personalizado para la lógica de tareas
│
├── constants/
│ └── index.ts # Constantes en este caso array de filtros
|
├── services/
│ └── storage.ts # Métodos getTasks y saveTasks con AsyncStorage
│
├── styles/
│ ├── task-input.style.ts # Estilos del input
│ ├── task-item.style.ts # Estilos de task item
│ └── theme.ts # Tema base (colores, fondos)
│
├── types/
│ └── task.ts # Tipado de Task y filtros
│
└── app/
├── index.tsx # Pantalla principal
└── \_layout.tsx # Configuración de tabs

## ⚙️ Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- [Node.js 18+](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

---

## 🧭 Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/MyTaskApp.git
   cd MyTaskApp

   ```

2. Instalar dependencias

   ```bash
   npm install

   ```

3. Iniciar el proyecto
   ```bash
   npx expo start
   ```

## 📱 Ejecutar la app

### 📲 En tu teléfono (recomendado)

1. Instala la app **Expo Go** desde:

   - [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Escanea el **QR Code** que aparece en la terminal o en el navegador cuando ejecutas:

   ```bash
   npx expo start

### 💻 En emulador o simulador

- **🤖 Android:** abre el emulador y presiona la tecla **`a`** en la terminal.  
- **🍎 iOS (solo Mac):** presiona la tecla **`i`** en la terminal para abrirlo en el simulador.

### NOTA ### 
- ** En caso de querer usar un emulador para iOS o Android debes tener corriendo el emulador o conectar un dispositivo fisico
