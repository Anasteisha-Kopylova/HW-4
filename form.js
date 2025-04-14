let birthYear = prompt("Введіть ваш рік народження:");
if (!birthYear) {
    alert('Шкода, що Ви не захотіли ввести свою дату народження');
}

let city = prompt('В якому місті ви живете?');
if (!city) {
    alert('Шкода, що Ви не захотіли ввести своє місто');
}

let sport = prompt('Який ваш улюблений вид спорту?');
if (!sport) {
    alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту');
}

let message = '';

if (birthYear) {
    const age = new Date().getFullYear() - Number(birthYear);
    message += `Вам: ${age} років.\n`;
}

if (city) {
    if (city === 'Київ') {
        message += 'Ти живеш у столиці України!\n';
    } else if (city === 'Вашингтон') {
        message += 'Ти живеш у столиці США!\n';
    } else if (city === 'Лондон') {
        message += 'Ти живеш у столиці Великобританії!\n';
    } else {
        message += `Ти живеш у місті ${city}.\n`;
    }
}

if (sport) {
    if (sport === 'футбол') {
        message += 'Круто! Хочеш стати як Ліонель Мессі?';
    } else if (sport === 'теніс') {
        message += 'Круто! Хочеш стати як Джиммі Коннорс?';
    } else if (sport === 'баскетбол') {
        message += 'Круто! Хочеш стати як Тім Данкан?';
    }
}

if (message) {
    alert(message);
}
