const professions = [
    { title: "Кассир в супермаркете", category: "Торговля", salary: "30 000 – 45 000 ₽", education: "1–3 месяца (курсы) или стажировка", description: "Работа за кассой, пробитие чеков, приём наличных и карт, работа с терминалами.", pros: "Быстрый старт, можно совмещать с учёбой, рядом с домом.", cons: "Долго на ногах, стресс от общения с покупателями." },
    { title: "Грузчик в супермаркете", category: "Торговля", salary: "45 000 – 65 000 ₽", education: "Не нужно (иногда курсы 1-3 недели)", description: "Разгрузка фур, перемещение товара на склад или в зал, выкладка на полки.", pros: "Берут без опыта, быстрый старт.", cons: "Тяжёлая физическая нагрузка, ненормированный график." },
    { title: "Администратор в супермаркете", category: "Торговля", salary: "50 000 – 65 000 ₽", education: "Опыт в торговле или колледж", description: "Управление сменой, контроль кассиров, решение конфликтов, отчётность.", pros: "Выше зарплата, меньше физического труда, карьерный рост.", cons: "Высокая материальная ответственность, стресс." },
    { title: "Системный администратор в супермаркете", category: "IT", salary: "45 000 – 70 000 ₽", education: "Колледж/вуз или курсы по сисадминистрированию", description: "Поддержка касс и ПК, настройка сети, ремонт оборудования, установка ПО.", pros: "Работа с техникой, меньше общения с покупателями.", cons: "Часто нужен опыт, возможны выезды в другие магазины." },
    { title: "Директор магазина", category: "Руководство", salary: "70 000 – 120 000 ₽", education: "Высшее/среднее проф. образование + опыт от 1 года", description: "Полное управление магазином: финансы, персонал, закупки, планы продаж.", pros: "Высокая зарплата, руководящая должность.", cons: "Огромная ответственность, стресс, ненормированный день." },
    { title: "Электрик", category: "Рабочие", salary: "40 000 – 70 000 ₽", education: "Колледж (3-4 года) или курсы (3-6 месяцев)", description: "Монтаж и ремонт электропроводки, розеток, щитков, устранение неисправностей.", pros: "Востребованность, возможность подработок, работа руками.", cons: "Риск для жизни (ток), иногда грязная работа, выезды." },
    { title: "Сварщик", category: "Рабочие", salary: "60 000 – 120 000 ₽", education: "Колледж или курсы (3-6 месяцев)", description: "Соединение металлических конструкций с помощью сварки, работа на производстве или стройке.", pros: "Высокая зарплата, всегда есть спрос, можно работать на себя.", cons: "Вредные условия труда, нагрузка на глаза, искры и жара." },
    { title: "Сантехник", category: "Рабочие", salary: "40 000 – 80 000 ₽", education: "Колледж или курсы (3-6 месяцев)", description: "Установка и ремонт труб, смесителей, унитазов, устранение протечек.", pros: "Много заказов на дому, можно работать частным мастером.", cons: "Грязная работа, часто в неудобных позах (нагрузка на спину)." },
    { title: "Водитель-экспедитор", category: "Рабочие", salary: "50 000 – 90 000 ₽", education: "Автошкола (2-3 месяца) + права категории C", description: "Доставка товара по адресам, оформление документов, разгрузка/погрузка.", pros: "Работа на свежем воздухе, относительно свободный график, нет начальника над душой.", cons: "Много времени в дороге, пробки, ответственность за товар." },
    { title: "Кровельщик", category: "Рабочие", salary: "60 000 – 100 000 ₽", education: "Колледж или обучение на стройке", description: "Монтаж крыш, укладка кровельных материалов, работа на высоте.", pros: "Хорошая оплата, навыки на всю жизнь.", cons: "Работа на высоте (опасно), зависимость от погоды, тяжелый физический труд." },
    { title: "Frontend-разработчик", category: "IT", salary: "60 000 – 200 000 ₽", education: "Курсы (6-12 месяцев) или ВУЗ (4 года)", description: "Создание интерфейсов сайтов с помощью HTML, CSS и JavaScript.", pros: "Высокий доход, удаленная работа, огромное сообщество.", cons: "Нужно постоянно учиться (технологии меняются), сидячая работа." },
    { title: "Менеджер по продажам (B2B)", category: "Офис", salary: "50 000 – 150 000 ₽ (оклад + процент)", education: "Любое высшее или курсы (1-3 месяца)", description: "Поиск корпоративных клиентов, переговоры, заключение договоров на поставку товаров.", pros: "Неограниченный потолок дохода, развитие навыков общения.", cons: "Высокий уровень стресса, нужно постоянно «продавать», планы." },
    { title: "Бухгалтер", category: "Офис", salary: "40 000 – 80 000 ₽", education: "Колледж или ВУЗ + курсы 1С", description: "Ведение финансовой отчетности, расчет налогов, начисление зарплаты.", pros: "Стабильность, офисная работа, не нужно общаться с клиентами.", cons: "Монотонность, большая ответственность (штрафы за ошибки), дедлайны." },
    { title: "HR-специалист (Кадровик)", category: "Офис", salary: "40 000 – 70 000 ₽", education: "ВУЗ (Управление персоналом) или курсы", description: "Подбор персонала, проведение собеседований, оформление документов сотрудников.", pros: "Офисная работа, общение с людьми, относительно спокойный темп.", cons: "Работа с документами (много бумаг), необходимость разбираться в трудовом кодексе." },
    { title: "Аналитик данных", category: "IT", salary: "70 000 – 180 000 ₽", education: "ВУЗ (математика/IT) или курсы (6-12 месяцев)", description: "Сбор, обработка и анализ данных для помощи бизнесу в принятии решений.", pros: "Высокая зарплата, престиж, удаленка.", cons: "Нужна хорошая математика, сложно войти без опыта." }
];

const container = document.getElementById('professions-list');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const favBtnFilter = document.getElementById('show-favorites-btn'); // Наша новая кнопка

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentCategory = 'Все';

function renderProfession(profession) {
    const card = document.createElement('div');
    card.className = 'card';

    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn';
    
    if (favorites.includes(profession.title)) {
        favBtn.classList.add('active');
        favBtn.textContent = '❤️';
    } else {
        favBtn.textContent = '♡';
    }
    
    favBtn.addEventListener('click', () => {
        if (favorites.includes(profession.title)) {
            favorites = favorites.filter(title => title !== profession.title);
            favBtn.classList.remove('active');
            favBtn.textContent = '♡';
        } else {
            favorites.push(profession.title);
            favBtn.classList.add('active');
            favBtn.textContent = '❤️';
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        
        // Если мы сейчас в режиме "Избранное", нужно перерисовать список
        if (currentCategory === 'Избранное') {
            renderCards();
        }
    });

    card.appendChild(favBtn);

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

function renderCards() {
    const searchText = searchInput.value.toLowerCase();
    container.innerHTML = '';
    
    // Если выбрана категория "Избранное", фильтруем по массиву favorites
    if (currentCategory === 'Избранное') {
        if (favorites.length === 0) {
            container.innerHTML = '<p style="text-align:center; width:100%; color: white;">Вы пока ничего не добавили в избранное 😢</p>';
            return;
        }
        const favProfessions = professions.filter(prof => favorites.includes(prof.title));
        favProfessions.forEach(profession => {
            container.appendChild(renderProfession(profession));
        });
        return;
    }

    // Обычная фильтрация (по поиску и категории)
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

// Обработка поиска
searchInput.addEventListener('input', renderCards);

// Обработка обычных фильтров
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id === 'show-favorites-btn') return; // Пропускаем кнопку избранного, у неё свой обработчик
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentCategory = button.getAttribute('data-category');
        renderCards();
    });
});

// Обработка кнопки "Избранное"
favBtnFilter.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    favBtnFilter.classList.add('active');
    currentCategory = 'Избранное';
    renderCards();
});

// Первый запуск
renderCards();
