const professions = [
    {
        title: "Кассир в супермаркете",
        category: "Торговля",
        salary: "30 000 – 45 000 ₽",
        education: "1–3 месяца (курсы) или стажировка",
        description: "Работа за кассой, пробитие чеков, приём наличных и карт, работа с терминалами.",
        pros: "Быстрый старт, можно совмещать с учёбой, рядом с домом.",
        cons: "Долго на ногах, стресс от общения с покупателями."
    },
    {
        title: "Грузчик в супермаркете",
        category: "Торговля",
        salary: "45 000 – 65 000 ₽",
        education: "Не нужно (иногда курсы 1-3 недели)",
        description: "Разгрузка фур, перемещение товара на склад или в зал, выкладка на полки.",
        pros: "Берут без опыта, быстрый старт.",
        cons: "Тяжёлая физическая нагрузка, ненормированный график."
    },
    {
        title: "Администратор в супермаркете",
        category: "Торговля",
        salary: "50 000 – 65 000 ₽",
        education: "Опыт в торговле или колледж",
        description: "Управление сменой, контроль кассиров, решение конфликтов, отчётность.",
        pros: "Выше зарплата, меньше физического труда, карьерный рост.",
        cons: "Высокая материальная ответственность, стресс."
    },
    {
        title: "Системный администратор в супермаркете",
        category: "IT",
        salary: "45 000 – 70 000 ₽",
        education: "Колледж/вуз или курсы по сисадминистрированию",
        description: "Поддержка касс и ПК, настройка сети, ремонт оборудования, установка ПО.",
        pros: "Работа с техникой, меньше общения с покупателями.",
        cons: "Часто нужен опыт, возможны выезды в другие магазины."
    },
    {
        title: "Директор магазина",
        category: "Руководство",
        salary: "70 000 – 120 000 ₽",
        education: "Высшее/среднее проф. образование + опыт от 1 года",
        description: "Полное управление магазином: финансы, персонал, закупки, планы продаж.",
        pros: "Высокая зарплата, руководящая должность.",
        cons: "Огромная ответственность, стресс, ненормированный день."
    }
];

const container = document.getElementById('professions-list');

function renderProfession(profession) {
    const card = document.createElement('div');
    card.className = 'card';

    const h2 = document.createElement('h2');
    h2.textContent = profession.title;
    card.appendChild(h2);

    const salaryP = document.createElement('p');
    salaryP.className = 'salary';
    salaryP.textContent = '💰 Зарплата: ' + profession.salary;
    card.appendChild(salaryP);

    const eduP = document.createElement('p');
    eduP.innerHTML = '<strong>🎓 Обучение:</strong> ' + profession.education;
    card.appendChild(eduP);

    const descP = document.createElement('p');
    descP.innerHTML = '<strong>📝 Описание:</strong> ' + profession.description;
    card.appendChild(descP);

    const prosP = document.createElement('p');
    prosP.className = 'pros';
    prosP.innerHTML = '✅ <strong>Плюс:</strong> ' + profession.pros;
    card.appendChild(prosP);

    const consP = document.createElement('p');
    consP.className = 'cons';
    consP.innerHTML = '❌ <strong>Минус:</strong> ' + profession.cons;
    card.appendChild(consP);

    return card;
}

// --- ЛОГИКА ФИЛЬТРОВ И ПОИСКА ---

const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');

let currentCategory = 'Все';

function renderCards() {
    const searchText = searchInput.value.toLowerCase();
    container.innerHTML = '';
    
    const filtered = professions.filter(profession => {
        const matchesSearch = profession.title.toLowerCase().includes(searchText);
        const matchesCategory = (currentCategory === 'Все') || (profession.category === currentCategory);
        return matchesSearch && matchesCategory;
    });
    
    if (filtered.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%;">Ничего не найдено 😢</p>';
        return;
    }
    
    filtered.forEach(profession => {
        container.appendChild(renderProfession(profession));
    });
}

searchInput.addEventListener('input', renderCards);

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.getAttribute('data-category');
        renderCards();
    });
});

renderCards();
