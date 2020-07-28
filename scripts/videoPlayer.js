export const videoPlayerInit = () => {
    // video-player
    // video-button__play
    // video-button__stop
    // video-time__passed
    // video-progress
    // video-time__total

    let videoPlayer = document.querySelector('.video-player');
    let videoButtonPlay = document.querySelector('.video-button__play');
    let videoButtonStop = document.querySelector('.video-button__stop');
    let videoTimePassed = document.querySelector('.video-time__passed');
    let videoProgress = document.querySelector('.video-progress');
    let videoTimeTotal = document.querySelector('.video-time__total');

    let toggleIcon = () => {
        if (videoPlayer.paused) {
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } else {
            videoButtonPlay.classList.add('fa-pause');
            videoButtonPlay.classList.remove('fa-play');
        }
    }

    let togglePlay = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    
        toggleIcon();
        
    }

    let playStop = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;

        toggleIcon();
    }

    let addZero = (n) => n < 10 ? '0' + n : n;      //0 перед минутами и секундами

videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);
videoButtonStop.addEventListener('click', playStop);

videoPlayer.addEventListener('timeupdate', () => {
    let currentTime = videoPlayer.currentTime;   //текущее время видео
    let duration = videoPlayer.duration;  //общее время видео

    videoProgress.value = (currentTime / duration) * 100;        //движение ползунка

    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    videoTimePassed.textContent = addZero(minutePassed) + ':' + addZero(secondsPassed);   //отображение текущее время видео
    videoTimeTotal.textContent = addZero(minuteTotal) + ':' + addZero(secondsTotal);      //общее время видео
})

videoProgress.addEventListener('change', () => {
    let duration = videoPlayer.duration;  //общее время видео
    let value = videoProgress.value;

    videoPlayer.currentTime = (value * duration) / 100;
})
    };