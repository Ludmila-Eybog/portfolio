$(document).ready(function () {
    // NAV-PAGE - подсветка пагинации
    $('#page-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {},
        end: function () {},
        scrollChange: function ($currentListItem) {}
    });    

    // фильтрация проекта
    $('.portfolio-works').mixItUp();

    // let allHideWorks = $('.hide-work');

    // ---  PLACEHOLDER
    const formRows = document.querySelectorAll('.form-row')
    const formRowsInputs = document.querySelectorAll('.form-row_input')

    // ---  поднимаем PLACEHOLDER вверх:
    for (let i = 0; i < formRows.length; i++) {

        formRows[i].addEventListener('click', function () {
            const placeholderElement = this.querySelector('.fake-placeholder')
            placeholderElement.classList.add('active')
        })
    }

    // ---  уводим курсор с INPUT:
    for (let i = 0; i < formRowsInputs.length; i++) {
        formRowsInputs[i].addEventListener('blur', function () {

            const thisParent = this.parentElement;

            if (this.value == '') {
                thisParent.querySelector('span').classList.remove('active');
            }
        })
    }

    // ---  FORM VALIDATE - отправка формы (заполненной)
    $('#contact-form').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            theme: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите Ваш email',
                email: 'Отсутствует символ @'
            },
            theme: {
                required: 'Введите тему сообщения'
            },
            message: {
                required: 'Введите текст сообщения'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    });

    // Функция AJAX запроса на сервер (отправка формы)
    function ajaxFormSubmit() {
        let string = $("#contact-form").serialize(); //Сохраняем данные, введенные в форму в строку.

        // Формируем ajax запрос
        $.ajax({
            type: "POST", //Тип запроса - POST
            url: "php/mail.php", // Куда отправляем запрос
            data: string, // Какие данные отправляем, в данном случае отправляем переменную string

            // Функция, если все прошло успешно
            success: function (html) {
                $("#contact-form").slideUp(800);
                $('#answer').html(html);
            }
        });

        // Чтобы по Submit больше ничего не выполнялось - делаем возврат false, чтобы прервать цепочку срабатывания остальных функций
        return false;
    }

    // BACK TOP BUTTON - Кнопка быстрой прокрутки вверх
    $('#backTop').hide();
    
    $(window).scroll( function () {

        if($(this).scrollTop() > 200){
            $('#backTop').fadeIn();
        }
        else{
            $('#backTop').fadeOut();
        }
    })
})