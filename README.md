# Trabajo Final - Talento Tech - React

👤 **Autor:** Jaime Victorero
🌐 **Deploy:** [https://javh000.github.io/tt-tf-react-store-project-jv/](https://javh000.github.io/tt-tf-react-store-project-jv/)

---

## 📌 Descripción

Este proyecto es una tienda online desarrollada como trabajo final para el programa **Talento Tech**. Utiliza las tecnologías de desarrollo web como **React**, **Vite** y **Bootstrap (Bootswatch)**, junto con una API externa para productos.

Incluye funcionalidades como:

- Listado y filtrado de productos
- Páginas de categorías y novedades
- Vista de detalle por producto
- Carrito de compras
- Inicio de sesión (simulado)
- Panel de usuario (dashboard protegido)
- Enrutamiento con React Router
- CRUD de usuarios (para administradores) usando MockAPI.io

---

## 🚀 Tecnologías Utilizadas

- ⚛️ React
- ⚡ Vite
- 🎨 Bootstrap (Bootswatch Theme)
- 🛠️ React Router
- 🛍️ Context API (para carrito y auth)
- 📦 [dummyjson.com](https://dummyjson.com) como API de productos
- 📦 [mockapi.io](https://mockapi.io) para el CRUD de usuarios
- 📄 GitHub Pages para el deploy

---

## 🛠️ Estructura del proyecto

src/
├── components/      # Componentes de UI (UserTable, ProductCard, etc.)
├── pages/           # Páginas de React Router (Home, DealPage, Dashboard, etc.)
├── hooks/           # Custom hooks (useUsers, useFetch)
├── services/        # Lógica de llamadas a APIs solo usuarios (userService)
├── context/         # Contextos globales (AuthContext, CartContext)
├── utils/           # Funciones utilitarias (validación del formulario de usuarios)
├── App.jsx          # Define las rutas principales y la estructura de la app
└── main.jsx         # Monta la app en el DOM y configura el router

Nota: La gestión de usuarios incluye operaciones CRUD (crear, leer, actualizar y eliminar). Esta funcionalidad está organizada separando las llamadas a la API en un archivo de servicios (userService) y el manejo del estado en un hook personalizado (useUsers).

---

## 🧪 Instalación

1. Clona el repositorio:

   git clone https://github.com/javh000/tt-tf-react-store-project-jv.git
   
   cd tt-tf-react-store-project-jv
   
2. Instala las dependencias:

   npm install

3. Inicia el servidor de desarrollo:

   npm run dev

---

## 🧾 Créditos

Proyecto desarrollado como parte del programa **Talento Tech**.
