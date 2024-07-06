document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector('.content');

    // Añadir un efecto de desvanecimiento en el contenido
    content.style.opacity = 0;
    setTimeout(() => {
        content.style.transition = "opacity 2s";
        content.style.opacity = 1;
    }, 100);

    // Añadir animación de brillo a los encabezados
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.transition = "text-shadow 0.5s, color 0.5s";
        heading.addEventListener('mouseover', () => {
            heading.style.textShadow = "0 0 15px rgba(255, 105, 180, 1)";
            heading.style.color = "#FF69B4";
        });
        heading.addEventListener('mouseout', () => {
            heading.style.textShadow = "none";
            heading.style.color = heading.tagName === 'H1' ? "#2e86c1" : "#d35400";
        });
    });

    // Añadir efecto de parpadeo a la imagen
    const image = document.querySelector('.image-container img');
    image.style.transition = "box-shadow 0.5s";
    setInterval(() => {
        image.style.boxShadow = image.style.boxShadow === '0px 0px 20px 5px rgba(255, 105, 180, 1)'
            ? '0px 0px 20px 5px rgba(0, 0, 0, 0.3)' : '0px 0px 20px 5px rgba(255, 105, 180, 1)';
    }, 1000);
});
