const watchBtn = document.querySelector('.btn');
const posterContainer = document.querySelector('.container');
const videoContainer = document.querySelector('.trailer-container');
const videoEl = document.querySelector('video');

const closeBtn  = document.querySelector('.close');

watchBtn.addEventListener('click', () => {
    videoContainer.classList.remove('active');
    posterContainer.classList.add('none');
});

closeBtn.addEventListener('click', () => {
    videoContainer.classList.add('active');
    posterContainer.classList.remove('none');
    videoEl.pause();
    videoEl.currentTime = 0;
});