# Restaurant El Cruce

Un sitio web moderno y elegante para Restaurant El Cruce en Reconquista, Santa Fe, Argentina. Construido con React, Vite y Tailwind CSS v4.

## Características

- **Diseño Premium**: Interfaz elegante con paleta de colores suaves (cremas, grises claros, beiges, acentos dorados).
- **Menú Interactivo**: Navegación por categorías con tarjetas de productos atractivas.
- **Carrito de Compras**: Gestión completa del carrito con persistencia en localStorage.
- **Responsive**: Diseño mobile-first que funciona en todos los dispositivos.
- **Accesibilidad**: Etiquetas ARIA y navegación por teclado.
- **WhatsApp Integration**: Botón flotante para pedidos directos por WhatsApp.

## Tecnologías Utilizadas

- **React 18+**: Componentes funcionales con hooks.
- **Vite**: Build tool rápido y moderno.
- **Tailwind CSS v4**: Framework CSS-first con configuración CSS-first.
- **React Router**: Navegación entre páginas.
- **Zustand**: Gestión de estado del carrito con persistencia.
- **React Icons**: Iconos para mejorar la UI.

## Instalación y Configuración

### Prerrequisitos

- Node.js 18+ y npm instalados.

### Pasos de Instalación

1. **Clona o descarga el proyecto**:
   ```bash
   git clone <url-del-repositorio>
   cd elcruce
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abre tu navegador** en `http://localhost:5173`.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Navegación principal
│   ├── Footer.jsx          # Información de contacto
│   ├── HomePage.jsx        # Página de inicio
│   ├── MenuPage.jsx        # Página del menú
│   ├── CartPage.jsx        # Página del carrito
│   └── WhatsAppButton.jsx  # Botón flotante de WhatsApp
├── data/
│   └── menu.js             # Datos del menú
├── stores/
│   └── cartStore.js        # Estado del carrito (Zustand)
├── App.jsx                 # Componente principal con rutas
├── main.jsx                # Punto de entrada
└── index.css               # Configuración de Tailwind CSS v4
```

## Personalización

### Editar el Menú

Los datos del menú están en `src/data/menu.js`. Para agregar, editar o eliminar items:

1. Abre `src/data/menu.js`.
2. Modifica el objeto `menuData`.
3. Las categorías están definidas en `categoriesOrder`.
4. Reinicia el servidor si es necesario.

### Cambiar Colores y Estilos

Los colores están definidos en `src/index.css` usando variables CSS:

```css
@theme {
  --color-cream: #f5f5dc;
  --color-gold: #d4af37;
  /* ... */
}
```

### Configurar WhatsApp

En `src/components/WhatsAppButton.jsx`, cambia el número de teléfono:

```javascript
const whatsappUrl = `https://wa.me/5493482123456?text=${encodeURIComponent(message)}`;
```

## Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel.
2. Configura el build command: `npm run build`.
3. El directorio de salida es `dist`.

### Netlify

1. Conecta tu repositorio a Netlify.
2. Configura el build command: `npm run build`.
3. El directorio de publicación es `dist`.

## Desarrollo

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm run preview`: Vista previa del build de producción.
- `npm run lint`: Ejecuta ESLint.

### Agregar Nuevas Funcionalidades

1. **Nueva Página**: Crea un componente en `src/components/` y agrega la ruta en `src/App.jsx`.
2. **Nuevo Estado**: Usa Zustand para crear un nuevo store en `src/stores/`.
3. **Nuevo Estilo**: Agrega clases de Tailwind o modifica `src/index.css`.

## Contribución

1. Fork el proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`).
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`).
4. Push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Restaurant El Cruce
- Dirección: Reconquista, Santa Fe, Argentina
- Teléfono: (03482) 123-4567
- Email: info@restaurantelcruce.com
- WiFi: 20405060

---

¡Gracias por elegir Restaurant El Cruce! 🍽️
