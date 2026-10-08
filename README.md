# 🚀 Materializa 3D - Sitio Web & Cotizador Interactivo

Sitio web oficial de **Materializa 3D**, servicio profesional de impresión y modelado 3D ubicado en Valencia, Estado Carabobo, Venezuela.

La plataforma ofrece una experiencia interactiva para clientes, catálogo visual de trabajos realizados, guía informativa de filamentos y un **cotizador paso a paso** que genera un presupuesto detallado directo al WhatsApp del negocio.

🌐 **Sitio Web en Vivo:** [https://guillexexe.github.io/materializa-3d/](https://guillexexe.github.io/materializa-3d/)[cite: 11]

---

## 🖨️ Equipamiento & Capacidad Técnica
* **Impresora Principal:** Bambu Lab P1S (Alta velocidad & Sistema Multicolor AMS)[cite: 1, 2, 4].
* **Volumen Útil:** $25 \times 25 \times 25\text{ cm}$ (Cama continua)[cite: 1, 2, 4].
* **Materiales Soportados:** PLA, PETG, PLA SILK y TPU (Flexible)[cite: 1, 2, 4].

---

## ✨ Características de la Web
1. **Diseño Adaptativo (Responsive):** Adaptado para dispositivos móviles y escritorio con paleta de colores basada en la identidad del logotipo[cite: 1, 3, 6].
2. **Carrusel de Trabajos:** Muestra visual de piezas reales impresas y ensambladas en el taller[cite: 1, 2, 4].
3. **Guía Teórica de Materiales:** Clasificación según resistencia, uso y presupuesto del cliente[cite: 1, 2, 4].
4. **Explicación del Proceso:** Claridad sobre modelos gratuitos, licencias de pago y diseño CAD desde cero[cite: 1, 2, 4].
5. **Cotizador Interactivo en Pasos (Wizard):**
   * **Paso 1:** Dimensiones aproximadas de la pieza (con detección de piezas mayores a $25\text{ cm}$)[cite: 1, 2, 4].
   * **Paso 2:** Selección de categoría, filamento, acabado y detalles de uso[cite: 1, 2, 4].
   * **Paso 3:** Estado del archivo 3D (.STL, .STEP, .3MF) o solicitud de diseño[cite: 1, 2, 4].
6. **Integración con WhatsApp:** Botón que compila todos los datos ingresados en un mensaje estructurado[cite: 1, 2, 4].

---

## 🛠️ Tecnologías
* **Frontend:** HTML5, CSS3 (Flexbox/Grid & Custom Variables), JavaScript Vanilla (ES6+)[cite: 1, 2, 4].
* **Tipografía:** Google Fonts (*Inter*)[cite: 1, 4].
* **Hosting:** GitHub Pages[cite: 11].

---

## 📁 Estructura del Proyecto
```text
materializa-3d/
├── index.html                  # Estructura HTML del sitio y cotizador
├── style.css                   # Estilos visuales y diseño responsive
├── script.js                   # Lógica del carrusel, wizard y WhatsApp
├── README.md                   # Documentación del repositorio
└── Muestras_3D/                # Galería de imágenes y favicon
    ├── favicon.png             # Logo transparente para pestaña
    ├── Oni_PS5_control_holder.jpeg
    ├── DFOU8644.jpg
    └── HGHC1071.JPG