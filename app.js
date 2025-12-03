const daysScroll = document.getElementById("daysScroll");
const wrapper = document.getElementById("wrapper");

const ACTIVE_DAY = 2;
const ACTIVE_MONTH = 12;

const startDay = 1;
const endDay = 31;
const daysOfWeek = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const monthNames = {12: "Грудень 2025"};

/* === DATA === */
const scheduleData = {

    "1": [
           {
            "num": 1,"title": "Українська література","hw": false,
            "desc": "- П’єси В. Винниченка, М. Куліша, І. Дніпровського, зарубіжна класика і модерна драматургія.",
            "time": "08:30 - 09:15","room": "40",
            "teacher": "Сивак Леся Миколаївна",
            "hw_text": ""
        },
        {
            "num": 2, "title": "Географія", "hw": true, 
            "desc": "-  Ґрунти та природні зони світу",
            "time": "09:25 - 10:10","room": "20",
            "teacher": "Ігнатишин Світлана Віталіївна",
            "hw_text": "§ 15 прочитати"
        },
        {
            "num": 3, "title": "Українська література","hw": false,
            "desc": "- Автономність, відкритість зарубіжним традиціям",
            "time": "10:20 - 11:05", "room": "40", 
            "teacher": "Сивак Леся Миколаївна", 
            "hw_text": ""
        },
        {
            "num": 4, "title": "Українська мова", "hw": false,
            "desc": "- Складні випадки кваліфікації другорядних членів речення.",
            "time": "11:20 - 12:05", "room": "23", 
            "teacher": "Сивак Леся Миколаївна", 
            "hw_text": ""
        },
        {
            "num": 5, "title": "Алгебра","hw": false,
            "desc": "- Логарифмічні рівняння та нерівності. Розв’язування вправ",
            "time": "12:20 - 13:05", "room": "37", 
            "teacher": "Решетар Мар'яна Василівна", 
            "hw_text": ""
        },
        {
            "num": 6,"title": "Хімія","hw": true,
            "desc": "- Алотропія. Алотропні модифікації неметалічних елементів.",
            "time": "13:15 - 14:00","room": "43", 
            "teacher": "Хиля Світлана Андріївна",
            "hw_text": "Конспектувати параграфи 14, 15, виконати завдання 102 - 113"
        },
        {
            "num": 7,"title": "Іноземна мова (англійська)","hw": false,
            "desc": "- Колонізація Америки. Формування навичок читання",
            "time": "14:20 - 15:05","room": "30", 
            "teacher": "Хиля Світлана Андріївна",
            "hw_text": ""
        },
    ],

    "2": [
           {
            "num": 1, "title": "Історія: Україна і світ", "hw": true,
            "desc": "- Практичне заняття. Молодіжні рухи і рок-культура як соціальне явище 1960-70 –хр.р.",
            "time": "08:30 - 09:15", "room": "40", 
            "teacher": "Боберська Антоніна Миколаївна",
            "hw_text": " Опрацювати параграф 15, просканувавши QR - код ст. 6-10"
        },
        {
            "num": 2, "title": "Історія: Україна і світ", "hw": false,
            "desc": "- Повоєнне врегулювання. Урок узагальнення. (Тематична) №4",
            "time": "09:25 - 10:10", "room": "40", 
            "teacher": "Боберська Антоніна Миколаївна",
            "hw_text": ""
        },
        {
            "num": 3, "title": "Біологія", "hw": false,
            "desc": "- Вплив навколишнього середовища на здоров’я людини. Вплив стресових факторів на організм людини.",
            "time": "10:20 - 11:05", "room": "26", 
            "teacher": "Лариса Михайлівна",
            "hw_text": ""
        },
        {
            "num": 4, "title": "Зарубіжна література", "hw": false,
            "desc": "- Тему не вказано",
            "time": "11:20 - 12:05", "room": "32", 
            "teacher": "Чобаль Діана Валеріївна",
            "hw_text": ""
        },
        {
            "num": 5, "title": "Українська мова", "hw": false,
            "desc": "- Пунктуаційні норми. Пунктуаційна помилка. Складні випадки використання розділових знаків.",
            "time": "12:20 - 13:05", "room": "29", 
            "teacher": "Сивак Леся Миколаївна",
            "hw_text": ""
        },
    ],

    "3": [
           {
            "num": 1, "title": "Іноземна мова (англійська)", "hw": false,
            "desc": "- Кумири американців Удосконалення монологічного мовлення",
            "time": "08:30 - 09:15", "room": "30", 
            "teacher": "Тирпак Таісія Ігорівна",
            "hw_text": ""
        },
        {
            "num": 2, "title": "Фізична культура", "hw": false,
            "desc": "- Шикування. Нападаючий удар. Навч. гра волейбол.",
            "time": "09:25 - 10:10", "room": "спортзал", 
            "teacher": "Передчук Антон Васильович",
            "hw_text": ""
        },
        {
            "num": 3, "title": "Геометрія", "hw": false,
            "desc": "- Тему не вказано",
            "time": "10:20 - 11:05", "room": "37",
            "teacher": "Решетар Мар'яна Василівна",
            "hw_text": ""
        },
        {
            "num": 4, "title": "Фізика", "hw": false,
            "desc": "- Коливання. Види коливань. Фізичні величини, що характеризують коливання",
            "time": "11:20 - 11:05", "room": "35",
            "teacher": "Лукачович Михайло Миколайович",
            "hw_text": "Захист проекту"
        },
        {
            "num": 5, "title": "Інформатика", "hw": false,
            "desc": "- Інструктаж з БЖД. Просування веб-сайтів.",
            "time": "12:20 - 13:05", "room": "46",
            "teacher": "Фабіан Олена Іванівна",
            "hw_text": ""
        },
        {
            "num": 5, "title": "Фізика", "hw": false,
            "desc": "- Розв'язування задач",
            "time": "13:15 - 14:00", "room": "35",
            "teacher": "Лукачович Михайло Миколайович",
            "hw_text": ""
        },
    ],

    "4": [
           {
            "num": 1, "title": "Мистецтво", "hw": true,
            "desc": "- Театральне мистецтво XX століття.",
            "time": "08:30 - 09:15", "room": "40", 
            "teacher": "Фрінцко Світлана Михайлівна",
            "hw_text": " Виготовлення афіші до вистави."
        },
        {
            "num": 2, "title": "Геометрія", "hw": false,
            "desc": "- Тематична контрольна робота № 2",
            "time": "09:25 - 10:10", "room": "37", 
            "teacher": "Решетар Мар'яна Василівна",
            "hw_text": ""
        },
        {
            "num": 3, "title": "Історія: Україна і світ", "hw": false,
            "desc": "- Нові кордони. Входження Кримської області до складу УРСР",
            "time": "10:20 - 11:05", "room": "32",
            "teacher": "Боберська Антоніна Миколаївна",
            "hw_text": ""
        },
        {
            "num": 4, "title": "Українська мова", "hw": false,
            "desc": "- Урок мовленнєвого розвитку. Контрольний есей.",
            "time": "11:20 - 12:05", "room": "28",
            "teacher": "Сивак Леся Миколаївна",
            "hw_text": ""
        },
        {
            "num": 5, "title": "Фізична культура", "hw": false,
            "desc": "- Рівномірний біг - 5 хв. Загально розвиваючі вправи. Передачі в.м. в парах. Техніка приймання подачі.",
            "time": "12:20 - 13:05", "room": "спортзал",
            "teacher": "Передчук Антон Васильович",
            "hw_text": ""
        },
        {
            "num": 6, "title": "Хімія", "hw": false,
            "desc": "- Явище адсорбції.",
            "time": "13:15 - 14:00", "room": "43",
            "teacher": "Хиля Світлана Андріївна",
            "hw_text": ""
        },
        {
            "num": 7, "title": "Біологія", "hw": false,
            "desc": "- Профілактика неінфекційних, інфекційних захворювань, що передаються статевим шляхом.",
            "time": "14:20 - 15:05", "room": "26",
            "teacher": "Мигалина Лариса Іванівна",
            "hw_text": ""
        },
    ],

    "5": [
           {
            "num": 1, "title": "Мистецтво", "hw": true,
            "desc": "- Театральне мистецтво XX століття.",
            "time": "08:30 - 09:15", "room": "40", 
            "teacher": "Фрінцко Світлана Михайлівна",
            "hw_text": "Підготувати повідомлення про видатних акторів театру."
        },
        {
            "num": 2, "title": "Іноземна мова (англійська)", "hw": false,
            "desc": "- Досліджуємо Канаду Розвиток навичок читання Контроль читання",
            "time": "09:25 - 10:10", "room": "30", 
            "teacher": "Тирпак Таісія Ігорівна",
            "hw_text": ""
        },
        {
            "num": 3, "title": "Фізика", "hw": false,
            "desc": "- Коливання. Види коливань. Фізичні величини, що характеризують коливання",
            "time": "10:20 - 11:05", "room": "35",
            "teacher": "Лукачович Михайло Миколайович",
            "hw_text": ""
        },
        {
            "num": 3, "title": "Астрономія", "hw": true,
            "desc": "-  Космічні дослідження об’єктів Сонячної системи.",
            "time": "10:20 - 11:05", "room": "35",
            "teacher": "Лукачович Михайло Миколайович",
            "hw_text": "§4 вивчити ст. 61"
        },
        {
            "num": 5, "title": "Українська мова", "hw": false,
            "desc": "- Розділові знаки у простих реченнях, ускладнених звертаннями, однорідними членами речення.",
            "time": "12:20 - 13:05", "room": "29",
            "teacher": "Сивак Леся Миколаївна",
            "hw_text": ""
        },
        {
            "num": 6, "title": "Фізична культура", "hw": false,
            "desc": "- Загально розвиваючі вправи. Блокування, передачі в.м., нижня та верхня прямі подачі.",
            "time": "13:15 - 14:00", "room": "спортзал",
            "teacher": "Передчук Антон Васильович",
            "hw_text": ""
        },
        {
            "num": 7, "title": "Година спілкування", "hw": false,
            "desc": '- Година спілкування "Безпечний маршрут."',
            "time": "14:20 - 15:05", "room": "40",
            "teacher": "Фрінцко Світлана Михайлівна",
            "hw_text": ""
        },
    ],
};

/* === CALENDAR GENERATION === */
for (let i = startDay; i <= endDay; i++) {
    const div = document.createElement("div");
    div.className = "day";

    const dayOfMonth = i;
    const baseIndex = 1;
    const dayIndex = (baseIndex + i - 1) % 7;

    div.dataset.day = dayOfMonth;
    div.dataset.month = ACTIVE_MONTH;

    div.innerHTML = `
        <p>${daysOfWeek[dayIndex]}</p>
        <span>${dayOfMonth}</span>
    `;

    if (dayOfMonth === ACTIVE_DAY) {
        div.classList.add("active");
        document.getElementById("monthTitle").textContent = monthNames[ACTIVE_MONTH];
    }
    daysScroll.append(div);
}

/* === NAVIGATION & EVENTS === */
function switchTo(day, month) {
    const newPage = document.querySelector(`.schedule-page[data-day='${day}'][data-month='${month}']`);
    const oldPage = document.querySelector(".schedule-page.active");
    if (!newPage || newPage === oldPage) return;

    document.querySelector(`.day[data-day='${day}'][data-month='${month}']`)
        ?.scrollIntoView({ inline: "center", behavior: "smooth" });

    const oldDay = Number(oldPage.dataset.day);
    const direction = day > oldDay ? "left" : "right";

    newPage.style.transform = direction === "left" ? "translateX(100%)" : "translateX(-100%)";
    newPage.classList.add("active");

    requestAnimationFrame(() => {
        newPage.style.transform = "translateX(0)";
        oldPage.style.transform = direction === "left"
            ? "translateX(-100%)"
            : "translateX(100%)";
        oldPage.classList.remove("active");
    });

    document.querySelector(".day.active")?.classList.remove("active");
    document.querySelector(`.day[data-day='${day}'][data-month='${month}']`).classList.add("active");
    document.getElementById("monthTitle").textContent = monthNames[month];
}

daysScroll.addEventListener("click", e => {
    const d = e.target.closest(".day");
    if (!d) return;
    switchTo(Number(d.dataset.day), Number(d.dataset.month));
});

document.getElementById("backButton").addEventListener("click", () => {
    document.getElementById("lessonPanel").classList.remove("open");
});

document.getElementById("victor-gontar").addEventListener("click", () => {
    document.getElementById("children-splash").classList.add("hide");
});

/* === RENDER LOGIC === */
function createLessonHTML(l) {
    const tmpl = document.getElementById("lesson-card");
    const node = tmpl.content.cloneNode(true);

    const root = node.querySelector(".lesson");
    root.dataset.full = JSON.stringify(l);

    node.querySelector(".lesson-num-circle").textContent = l.num;
    node.querySelector(".lesson-top-title").textContent = l.title;
    node.querySelector(".lesson-desc").textContent = 
        l.desc.length > 100 ? l.desc.substring(0,100)+"..." : l.desc;

    if (l.hw) node.querySelector(".hw").style.display = "block";

    const [start] = l.time.split("-");
    node.querySelector(".lesson-time").textContent = l.time;
    node.querySelector(".lesson-room").textContent = l.room;

    return node;
}

// РЕНДЕР СТРАНИЦ РАСПИСАНИЯ
function renderPages(data) {
    wrapper.innerHTML = "";

    for (let i = startDay; i <= endDay; i++) {
        const page = document.createElement("div");
        page.className = "schedule-page";
        page.dataset.day = i;
        page.dataset.month = ACTIVE_MONTH;

        if (i === ACTIVE_DAY) page.classList.add("active");

        const lessons = data[String(i)];

        if (!lessons || lessons.length === 0) {
            page.classList.add("no-scroll");
            page.innerHTML = `
                <div class="empty-message">
                    <img src="assets/school.png">
                    <p>Розклад відсутній</p>
                </div>
            `;
        } else {
            lessons.forEach(l => page.appendChild(createLessonHTML(l)));
        }

        wrapper.appendChild(page);
    }
}

/* === LESSON PANEL === */
document.addEventListener("click", e => {
    const lesson = e.target.closest(".lesson");
    if (!lesson) return;

    const data = JSON.parse(lesson.dataset.full);
    if (!data.hw) return;

    const title = data.title;
    const teacher = data.teacher;
    const room = data.room;
    const startTime = data.time;

    const rawStart = data.time.split(" - ")[0];  
    const [h, m] = rawStart.split(":").map(Number);

    const end = new Date(0, 0, 0, h, m + 45);
    const timeEnd = end.toTimeString().slice(0, 5);

    const theme = data.desc.replace(/^- /, '');
    const hwText = data.hw_text;

    document.getElementById("panelTitle").textContent = title;

    const template = document.getElementById("lesson-template");
    const clone = template.content.cloneNode(true);

    clone.querySelector(".lesson-avatar").textContent = teacher.charAt(0);
    clone.querySelector(".teacher-name").textContent = teacher;
    clone.querySelector(".room").innerHTML += room;
    clone.querySelector(".time-text").textContent = data.time;
    clone.querySelector(".theme").textContent = theme;
    clone.querySelector(".hw-text").textContent = hwText;

    document.getElementById("panelContent").innerHTML = "";
    document.getElementById("panelContent").appendChild(clone);

    document.getElementById("lessonPanel").classList.add("open");
});


/* === APP START === */
window.addEventListener("load", () => {
    renderPages(scheduleData);

    const animateScroll = (element, target, duration) => {
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            let progress = elapsed / duration;
            progress--;
            const val = change * (progress * progress * progress + 1) + start;
            element.scrollLeft = val;

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            } else {
                element.scrollLeft = target;
            }
        };
        requestAnimationFrame(animate);
    };

    setTimeout(() => {
        document.getElementById("splash").classList.add("hide");
        setTimeout(() => {
            document.getElementById("splash")?.remove();
            const activeEl = document.querySelector(".day.active");
            if (activeEl) {
                const containerCenter = daysScroll.clientWidth / 2;
                const elCenter = activeEl.clientWidth / 2;
                const targetPos = activeEl.offsetLeft - containerCenter + elCenter;
                daysScroll.scrollLeft = 25;
                animateScroll(daysScroll, targetPos, 500);
            }
        }, 500);
    }, 500);
});