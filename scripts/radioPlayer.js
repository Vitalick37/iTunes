export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeader = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');

    let audio = new Audio();  //вызываем глобальную функцию конструктор, которая создает аудио объекты
    audio.type = "audio/aac";

    radioStop.disabled = true;    //блокировать кнопку атрибутом disabled

    let chageIconPlay = () => {      //смена кнопки плей-пауза
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    }

    const selectItem = elem => {            //серая обводка вокрую радиостанций
        radioItem.forEach(item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    radioNavigation.addEventListener('change', event => {
        let target = event.target;

        const parrent = target.closest('.radio-item');  //ищет нужный класс выше по DOM
        selectItem(parrent);

        let title = parrent.querySelector('.radio-name').textContent;   //получил текст названия
        radioHeader.textContent = title; //записал название в поле

        let img = parrent.querySelector('.radio-img').src;   //получил путь изображения
        radioCoverImg.src = img; //записал путь в изображение

        radioStop.disabled = false;
        audio.src = target.dataset.radioStantion;     // dataset олучает дата-атрибут, radioStantion - значение атрибута в камелкейс
        audio.play();
        chageIconPlay();
    })

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        chageIconPlay();
    })
};