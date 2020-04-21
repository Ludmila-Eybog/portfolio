// Переменная
// console.log("Hello world!");
// let price = 500;
// console.log(price);
// price = 300;
// console.log(price);
// let name = "Людмила";
// console.log(name);

// Типы значений
// name = "Ludmila"; // Строка
// let age = 33; // Число
// console.log(age)
// const logical = true; // тип данных - правда или falce - ложь
// age = "33";
// console.log({
//     name
// }, '\n', {
//     age
// });


// $('.calc-heading');
// console.log(".calc-heading");
// $(".calc-heading").text("ghbdtn asdlfasd;fladfj; ");

//-------------------------

// Получаем форму и записываем ее в переменную form
const form = $('#price-form');

// сериализуем форму с пом-ю библиотеки serializeJSON,
// получаем объект (преобразовываем в объект) с значениями формы - делаем для того, чтобы было удобнее получать данные,
// записываем этот объект в переменную formData
let formData = form.serializeJSON(); // Получаем все данные из формы 

// Выводим в консоль объект formData 
console.log(formData); // Увидеть в консоли


// Увидеть изменения
// Отслеживаем изменения в форме, и при изменении запускаем свой код
form.on('keyup change paste', 'input, select, textarea', function () {
    console.log('Changed!');

    // Обновляем данные из формы в объекте formData
    formData = form.serializeJSON();
    console.log(formData);

    // Рассчитываем стоимость
    let totalPrice = 0; // создаем переменную totalPrice равную нулю

    totalPrice =
        formData['pages-unique'] * 4000 +
        formData['pages-general'] * 2500 +
        formData['carousel'] * 1200 +
        formData['modals'] * 900 +
        formData['forms'] * 1500;

    // Расчет  мультипликатора стоимости мобильной верси
    let multiplicatorMobile = 1;

    if (formData['mobile-number'] == 2) {
        multiplicatorMobile = 1.3;
    } else if (formData['mobile-number'] == 3) {
        multiplicatorMobile = 1.5;
    }

    // Pixel perfect мультипликатор
    let mPixelPerfect = 1;
    if (formData['pixelPerfect'] == 'on') {
        mPixelPerfect = 1.2;
    } // on - кнопка включена

    // Retina Ready мультипликатор
    let mRetinaReady = 1;
    if (formData['retinaReady'] == 'on') {
        mRetinaReady = 1.2;
    }

    // Google Page Speed мультипликатор
    let mGooglePageSpeed = 1;
    if (formData['googlePageSpeed'] == 'on') {
        mGooglePageSpeed = 1.2;
    }

    // Urgent Order мультипликатор
    let mUrgentOrder = 1;
    if (formData['urgentOrder'] == 'on') {
        mUrgentOrder = 1.5;
    }

    // Пересчет цены с учетом мультипликаторов
    totalPrice = totalPrice * multiplicatorMobile * mPixelPerfect * mRetinaReady * mGooglePageSpeed * mUrgentOrder;

    console.log(totalPrice);

    $('#total-price').text(totalPrice);

});