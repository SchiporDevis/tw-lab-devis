// Array cu imaginile din folderul ../MEDIA
const images: string[] = [
    "../MEDIA/g1.jpeg", // Exemplu de imagine
    "../MEDIA/g2.jpeg",
    "../MEDIA/g3.jpeg",
    "../MEDIA/loading_bg.jpg"
];

// Obtinem elementul principal din DOM
const mainImage = document.getElementById("carousel-image") as HTMLImageElement;

// Verificam daca elementul exista
if (!mainImage) throw new Error("Elementul carousel-image nu a fost gasit!");

let currentIndex: number = 0;

// Functie care schimba imaginea mare
function showNextImage(): void {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex]!;

    // Animatie TypeScript la schimbarea imaginii din carusel
    mainImage.style.transform = "scale(1.05)";
    setTimeout(() => {
        mainImage.style.transform = "scale(1)";
    }, 300);
}

// Animatie TypeScript la hover pe imagine
mainImage.addEventListener("mouseenter", () => {
    mainImage.style.transform = "scale(1.05)";
});

mainImage.addEventListener("mouseleave", () => {
    mainImage.style.transform = "scale(1)";
});

// Slider automat la 3 secunde
setInterval(showNextImage, 3000);
