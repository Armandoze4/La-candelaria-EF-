// Todo el código corre cuando la página ya cargó
document.addEventListener('DOMContentLoaded', function () {

    // (Misión y Visión)
    document.querySelectorAll('.accordion-title').forEach(function (title) {
        title.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // 2. TARJETAS DE SERVICIOS: muestran su imagen de fondo al pasar el mouse por arriba
    document.querySelectorAll('.service-card').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.backgroundImage = `url('${this.getAttribute('data-image')}')`;
        });
        card.addEventListener('mouseleave', function () {
            this.style.backgroundImage = '';
        });
    });

    // 3. VENTANA EMERGENTE DE DANZAS: se llena con los data del botón que se presiono
    const danzaModal = document.getElementById('danzaModal');
    if (danzaModal) {
        danzaModal.addEventListener('show.bs.modal', function (event) {
            const boton = event.relatedTarget;
            document.getElementById('danzaModalTitulo').textContent = boton.getAttribute('data-titulo');
            document.getElementById('danzaModalTexto').textContent = boton.getAttribute('data-texto');
        });
    }

    // 4. FORMULARIO: mensaje para whatsapp
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const nombre = document.getElementById('fullname').value.trim();
            const correo = document.getElementById('email').value.trim();
            const telefono = document.getElementById('phone').value.trim();
            const mensaje = document.getElementById('message').value.trim();

            let texto = `Hola La Candelaria, soy ${nombre}. ${mensaje} (Correo: ${correo}`;
            if (telefono) {
                texto += `, Teléfono: ${telefono}`;
            }
            texto += ')';

            const url = 'https://api.whatsapp.com/send?phone=51901033657&text='
             + encodeURIComponent(texto);
            window.open(url, '_blank', 'noopener');
            form.reset();
        });
    }D
});// 5. Links del menú (Misión / Visión):acordeón
document.querySelectorAll('a[href="#mision"], a[href="#vision"]').forEach(function (link) {
    link.addEventListener('click', function () {
        const columna = document.querySelector(this.getAttribute('href'));
        const titulo = columna.querySelector('.accordion-title');
        const contenido = titulo.nextElementSibling;
        titulo.classList.add('active');
        contenido.style.maxHeight = contenido.scrollHeight + 'px';
    });
});
