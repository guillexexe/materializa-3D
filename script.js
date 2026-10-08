// --- LÓGICA DEL CARRUSEL ---
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => slide.classList.toggle('active', i === currentSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

function setSlide(index) {
  showSlide(index);
}

// Avance automático cada 5 segundos
setInterval(() => moveSlide(1), 5000);


// --- LÓGICA DEL COTIZADOR INTERACTIVO ---
let selectedType = "";
let has3DFile = "";

// Teléfono de WhatsApp comercial
const WHATSAPP_PHONE = "584123301339";

function checkDimensions() {
  const x = parseFloat(document.getElementById('dim-x').value) || 0;
  const y = parseFloat(document.getElementById('dim-y').value) || 0;
  const z = parseFloat(document.getElementById('dim-z').value) || 0;

  const warning = document.getElementById('bed-warning');
  if (x > 25 || y > 25 || z > 25) {
    warning.style.display = 'block';
  } else {
    warning.style.display = 'none';
  }
}

function selectPieceType(type, element) {
  selectedType = type;
  element.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  element.classList.add('selected');
}

function selectFileOption(option, element) {
  has3DFile = option;
  element.parentElement.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
  element.classList.add('selected');

  document.getElementById('file-upload-section').style.display = option === 'si' ? 'block' : 'none';
  document.getElementById('no-file-section').style.display = option === 'no' ? 'block' : 'none';
}

function nextStep(step) {
  if (step === 3 && !selectedType) {
    alert("Por favor selecciona qué categoría describe mejor tu pieza.");
    return;
  }

  showStep(step);
}

function prevStep(step) {
  showStep(step);
}

function showStep(step) {
  document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.progress-step').forEach(p => p.classList.remove('active'));

  document.getElementById(`step-${step}`).classList.add('active');
  for (let i = 1; i <= step; i++) {
    document.getElementById(`p-step-${i}`).classList.add('active');
  }
}

function sendWhatsApp() {
  if (!has3DFile) {
    alert("Indica si cuentas con el archivo 3D o si posees fotos de referencia.");
    return;
  }

  const x = document.getElementById('dim-x').value;
  const y = document.getElementById('dim-y').value;
  const z = document.getElementById('dim-z').value;
  
  let dimText = "";
  if (x && y && z) {
    const bedStatus = (x > 25 || y > 25 || z > 25) 
      ? "⚠️ Requiere dividirse (>25cm)" 
      : "✅ Cama estándar P1S";
    dimText = `${x} x ${y} x ${z} cm (${bedStatus})`;
  } else {
    dimText = "Dimensiones por definir mediante fotos/referencia";
  }

  const material = document.getElementById('material-select').value;
  const finish = document.getElementById('finish-select').value;
  const desc = document.getElementById('piece-desc').value || "Sin descripción adicional";

  let fileDetail = "";
  if (has3DFile === 'si') {
    fileDetail = "• Archivo 3D: Cliente posee el archivo (.STL / .STEP)";
  } else {
    const cadAction = document.getElementById('cad-action').value;
    fileDetail = `• Archivo 3D: No posee\n• Plan: ${cadAction}`;
  }

  const message = 
`*¡Hola Materializa 3D!* 👋
Quisiera solicitar una cotización para un proyecto:

*📍 Ubicación:* Valencia, Carabobo
*📐 Dimensiones:* ${dimText}
*🎯 Categoría:* ${selectedType}
*🧵 Material:* ${material}
*🎨 Acabado:* ${finish}
*📝 Detalles/Uso:* ${desc}
${fileDetail}

_Quedo a la espera de su respuesta para acordar detalles._`;

  const url = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}