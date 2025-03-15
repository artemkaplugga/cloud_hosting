document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navCenter = document.querySelector('.nav-center');
    const dropdowns = document.querySelectorAll('.nav-center .dropdown');

    // Открытие/закрытие бургер-меню
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navCenter.classList.toggle('active');
    });

    // Обработка кликов по выпадающим меню
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-item');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    // Закрытие меню при клике вне его
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-center') && !e.target.closest('.burger-menu')) {
            burgerMenu.classList.remove('active');
            navCenter.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });

    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            burgerMenu.classList.remove('active');
            navCenter.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
}); 