// ВЫПАДАШКА-ОКНО \select\

// Нашли контейнер с select
const selectAllElements = document.querySelectorAll("[data-select]");

// Обходим каждый из этих элементов
selectAllElements.forEach(function (item) {
    // Ловим click по этим элементам
    item.addEventListener("click", function () {

        // выбираем след.эл-т по соседству - ниже
        const realSelect = this.nextElementSibling;

        // Делаем проверку где произошел клик
        // event.target - показыает на каком именно HTML эл-те произошел клик 
        // Если кликнули по пунктам в дропдауне
        if (event.target.hasAttribute("data-select-item")) {
            console.log("Click on ITEM!");

            // Нашли заголовок data-select-title у данного dropdown
            // далее Обращаемся к его текстовому контенту и в него записываем текст с атрибута data-select-item того элемента, по которому кликнули 
            var itemTitle = event.target.getAttribute("data-select-item")
            this.querySelector("[data-select-title]").textContent = event.target.getAttribute("data-select-item"); // RUR или EURO

            // Скрываем dropdown
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

            // Связка с реальным select
            // Изменяем значение value у реального select
            if (realSelect) {
                realSelect.value = itemTitle;
            }

        } else {
            // ИНАЧЕ: Если кликнули по заголовку
            console.log("Click on TITLE and AROUND");
            // Скрываем или открываем dropdown, а toggle делает переключение
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");
        }
    })
})