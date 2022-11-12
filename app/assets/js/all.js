////////swiper deisgn
const swiper = new Swiper('.swiper', {
  slidesPerView: 6,
  slidesPerGroup: 2,
  grid: {
    column: 3,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
  speed: 300,
  spaceBetween: 50,
})

/*const swiper2 = document.querySelector('.swiper').swiper;
swiper2.slideNext();*/

////////curosr deisgn
/*const cursorSmall = document.querySelector('.small');
const cursorBig = document.querySelector('.big');

const positionElement = (e) =>{
  const mouseY = e.clientY;
  const mouseX = e.clientX;
  
  cursorSmall.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
  
  cursorBig.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
}

window.addEventListener('mousemove', positionElement);*/

const heads = document.querySelectorAll('.head')
heads.forEach((head) => {
  head.addEventListener('click', (e) => {
    console.dir(e.target)
    const arrow = e.target.nextElementSibling.children[1]
    if (e.target.checked) {
      arrow.style.display = 'block'
    } else {
      arrow.style.display = 'none'
    }
  })
})
