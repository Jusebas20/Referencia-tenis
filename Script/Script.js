// Lista de imágenes en la carpeta
const imag = [
  "ZPNIKE-001.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg"
  // 👉 Agrega más nombres de imágenes según tengas en /imagenes
];

// Contenedor de la malla
const malla = document.getElementById("malla");

// Generar tarjetas automáticamente
imagenes.forEach((img, index) => {
  const codigo = `ZPNIKE-${String(index + 1).padStart(3, "0")}`;

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <img src="imagenes/${img}" alt="${codigo}">
    <p>${codigo}</p>
  `;

  malla.appendChild(tarjeta);
});
