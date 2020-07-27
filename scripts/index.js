import {
    radioPlayerInit
} from './radioPlayer.js';
import {
    musicPlayerInit
} from './musicPlayer.js';
import {
    videoPlayerInit
} from './videoPlayer.js';

let playerBtn = document.querySelectorAll('.player-btn');
let playerBlock = document.querySelectorAll('.player-block');
let temp = document.querySelector('.temp');


let deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach((item) => {
        item.classList.remove('active')
    });
    playerBlock.forEach((item) => {
        item.classList.remove('active')
    });
}

playerBtn.forEach((btn, i) => {                    //перебирает все кнопки и клиент по ним
    btn.addEventListener('click', () => {
        deactivationPlayer();                      //скрывает другие элементы
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
})

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();