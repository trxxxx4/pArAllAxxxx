

if (window.screen.width >= 475){
    const sliderMain = new Swiper('.slider__main', {
        freeMode : true,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
        parallax: true,
        breakpoints:{
            0:{
                slidesPerView: 2.5,
                spaceBetween: 20
    
            }
            , 680:{
                slidesPerView: 3.5,
                spaceBetween: 60
            }
        }
    })
    
    
    
    const sliderBg = new Swiper('.slider__bg', {
        freeMode : true,
        centeredSlides: true,
        slidesPerView: 3,
        mousewheel: true,
        parallax: true,
        slidesPerView: 3.5,
        spaceBetween: 60
    })
    
    
    sliderMain.controller.control = sliderBg;
    
    
    
    const textContainer = document.querySelector('.text__container');
    sliderMain.on('slideChange', e =>{
        sliderMain.activeIndex > 0 ? textContainer.classList.add('text__disappear') : textContainer.classList.remove('text__disappear')
    })
    
}


if (window.screen.width <= 475){
    const sliderMain = new Swiper('.slider__main', {
        freeMode : true,
        slidesPerView: 1.2,
        parallax: true,
       
        spaceBetween: 30,
        
    })
    
    
    
    const sliderBg = new Swiper('.slider__bg', {
        freeMode : true,
        slidesPerView: 1.5,
        parallax: true,
        spaceBetween: 40,
        
        
    })
    
    
    sliderMain.controller.control = sliderBg;
    
    
    
    const textContainer = document.querySelector('.text__container');
    sliderMain.on('slideChange', e =>{
        sliderMain.activeIndex > 0 ? textContainer.classList.add('text__disappear') : textContainer.classList.remove('text__disappear')
    })
    
}