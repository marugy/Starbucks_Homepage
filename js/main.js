const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    // 속성 값 지정
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    // 속성 값 지정
    searchInputEl.setAttribute('placeholder','통합검색');
});


const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');  //이 요소를 찾아서

// 부하방지를 위해서 300ms 단위로 실행 lodash cdn을 통해 사용
window.addEventListener('scroll',_.throttle( function () {
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지숨기기
        //gsap.to(요소, 지속시간, 옵션(객체속성));  
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
        // 버튼 보이기
        gsap.to(toTopEl, .2, {
            x:0,
        });
    }
    else{
         //배지보이기
         gsap.to(badgeEl, .6, {
            opacity :1,
            display:'block'
         })
        // 버튼 숨기기
        gsap.to(toTopEl, .2, {    // '#to-top'선택자만 입력해도 알아서 집어넣는다. 하지만 매번 그러면 시간이 걸리니까 위에서 변수로 할당
            x:100,
        });
    }
},300));
// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function (){  //함수 = 이벤트 = 핸들러
    gsap.to(window, .7, { //.7초에 거쳐 scrollTo 위치로 가겠다
        scrollTo : 0
    });    
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {  //index는 zero base
    //gsap.to(요소, 지속시간(초 단위), 옵션(객체속성));  
    gsap.to(fadeEl, 1 ,{
        // 몇초 뒤에 시작될건지
        delay: (index + 1) * .7,    //0.7, 1.4, 2.1, 2.8 초마다 1초에 거쳐 opacity를 1로
        opacity: 1

    });
});


// swiper js 사용하기 위해서 생성자(클래스) 생성 //선택자를 인수로
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

new Swiper('.promotion .swiper', {
    // direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop:true,
    // autoplay: {
    //     delay: 5000
    // },
    pagination:{
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true,
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});
new Swiper('.awards .swiper', {
    direction:'horizontal',
    autoplay:true,
    loop:true,
    spaceBetween: 30,   //사이 사이 여백 30px
    slidesPerView: 5,
    navigation:{
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next'
    }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        // 숨김처리
        promotionEl.classList.add('hide');
    }
    else{
        // 보임 처리
        promotionEl.classList.remove('hide');
    }
    
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
    // gsap.to(요소, 지속 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {   //선택자, 애니메이션 동작 시간
        // 옵션
        y: size,
        repeat: -1,  //무한반복
        yoyo: true,  //한번 재생한걸 거꾸로 재생
        ease:"power1.inOut",    //gsap easing 함수
        delay: random(0,delay)    //몇초 뒤에 애니메이션 시작?
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 25);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,   //보여짐 여부를 감시할 요소를 지정
        triggerHook: .8,    //뷰포트 상단0 하단1 > .8부분에 걸리면 트리거가 걸린다.
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent += new Date().getFullYear();    //2022숫자 나옴