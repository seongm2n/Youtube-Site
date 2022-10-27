const moreBtn = document.querySelector('.info .metadata .titleAndButton .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => { 
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});

const x = document.querySelector('.actions');

if(x < 800) {
    console.log(q);
}