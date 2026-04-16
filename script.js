// 1. Переменные и константы
const appConfig = {
  appTitle: "Учёт обращений студентов",
  defaultStatus: "new",
  minValueForFilter: 5,
};

let actionCount = 0;
actionCount++;
actionCount++;
console.log("Количество действий:", actionCount);

appConfig.defaultStatus = "new";
appConfig.minValueForFilter = 500;
console.log("Текущая конфигурация приложения:", appConfig);

// 2. Типы данных
const requests = [
  { id: 1, title: "Проблема с расписанием", value: 3, status: "new", CreatedAt:'2026-03-01'},
  { id: 2, title: "Ошибка в оценках", value: 8, status: "in_progress", CreatedAt:'2026-03-02'},
  { id: 3, title: "Нет доступа к курсу", value: 6, status: "new", CreatedAt:'2026-03-03'},
  { id: 4, title: "Вопрос по оплате", value: 9, status: "closed", CreatedAt:'2026-03-04'}
];
console.log("Массив обращений клиентов:", requests);
// 3. Приведение типов
const inputMinValue = "7";
const minValue = Number(inputMinValue);

if (Number.isNaN(minValue)) {
  console.log("Ошибка ввода");
}
console.log(minValue);

// 4. Операторы
const studentAge = 20;
const isBlocked = false;

const hasAccess = studentAge >= 18 && !isBlocked;
console.log("Доступ:", hasAccess);

// 5. Условия
let statusDescription;

  switch (requests[0].status) {
    case "new":
      statusDescription = "Новое";
    case "in_progress":
      statusDescription = "В работе";
    case "closed":
      statusDescription = "Закрыто";
    default:
      statusDescription = "Неизвестно";
  }
  console.log(statusDescription);

  let valueCategory;

  if(requests[0].value >= 1000){
    valueCategory = "Высокое значение";
  } else if (requests[0].value >= 700){
    valueCategory = "Среднее значение";
  } else{
    valueCategory = "Низкое значение";
  }

  console.log(valueCategory);


// 6. Циклы

  let newWount = 0;

  for (let i = 0; i < requests.length; i++) {
    if (requests[i].status === "new") {
      newWount++;
    }
  }

  console.log(newWount)


// Вывод
const output = document.getElementById("output");

document.getElementById("btnAll").onclick = function () {
  output.textContent = JSON.stringify(requests, null, 2);
};

document.getElementById("btnNew").onclick = function () {
  const filtered = requests.filter(r => r.status === "new");
  output.textContent = JSON.stringify(filtered, null, 2);
};

document.getElementById("btnStats").onclick = function () {
  const newCount = countNewRequests();

  let text = "Статистика:\n";
  text += "Всего: " + requests.length + "\n";
  text += "Новых: " + newCount + "\n";

  output.textContent = text;
};