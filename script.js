document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileNav = document.getElementById('mobileNav');
    const body = document.body;

    if (burgerBtn && mobileNav) {
        burgerBtn.addEventListener('click', () => {
            const isActive = burgerBtn.classList.toggle('active');
            mobileNav.classList.toggle('active');
            body.style.overflow = isActive ? 'hidden' : '';
        });

        // Закрытие при клике на ссылки
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                mobileNav.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // 2. Анимация графиков KPI (Эффект эквалайзера)
const bars = document.querySelectorAll('.mini-bars span');

if (bars.length > 0) {
    function animateBars() {
        bars.forEach(bar => {
            // Генерируем разную высоту для каждого столбика
            const randomHeight = Math.floor(Math.random() * 25) + 8;
            
            // Добавляем случайную микро-задержку для каждого столбика, 
            // чтобы они двигались не в такт
            const delay = Math.random() * 300; 

            setTimeout(() => {
                bar.style.setProperty('--h', `${randomHeight}px`);
            }, delay);
        });
    }

    // Запускаем сразу
    animateBars();
    // Интервал должен быть чуть больше, чем transition в CSS, 
    // чтобы анимация успевала завершиться перед новым циклом
    setInterval(animateBars, 800);
}

    
});

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const trigger = item.querySelector('.faq-trigger');
        
        trigger.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Сначала закрываем все открытые
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Если нажат закрытый элемент — открываем его
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
});