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

const thisYear = document.querySelector('.this-year');
thisYear.textContent += new Date().getFullYear();    //2022숫자 나옴