// Footer year
document.getElementById('y').textContent = new Date().getFullYear();

// Simple mobile menu toggle: clones links into a sheet on small screens
const btn = document.getElementById('menuBtn');
const header = document.querySelector('header');
const links = document.querySelector('.nav-links');
let sheet;
btn?.addEventListener('click', () => {
    if (!sheet) {
        sheet = document.createElement('div');
        sheet.style.position = 'fixed';
        sheet.style.inset = '60px 12px auto';
        sheet.style.background = 'var(--card)';
        sheet.style.border = '1px solid #1f2a44';
        sheet.style.borderRadius = '16px';
        sheet.style.padding = '12px';
        sheet.style.boxShadow = '0 24px 80px rgba(0,0,0,.45)';
        sheet.innerHTML = `<a href="#sobre-mi">Sobre mí</a><br>` +
            `<a href="#habilidades">Tecnologías</a><br>` +
            `<a href="#proyectos">Proyectos</a><br>` +
            `<a href="#experiencia">Experiencia</a><br>` +
            `<a href="#contacto">Contacto</a>`;
        header.appendChild(sheet);
    } else {
        sheet.remove(); sheet = null;
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
            e.preventDefault();
            document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});