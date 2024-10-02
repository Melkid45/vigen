function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


$('.main__body-feedback-form-item-choose-wrap').on('click', function(e){
    if ($(this).hasClass('active')){
        $(this).removeClass('active')
        $(this).children('.input__menu').removeClass('active')
    }else{
        $(this).addClass('active')
        $('.main__body-feedback-form-item-choose-wrap').not(this).removeClass('active')
        $(this).children('.input__menu').addClass('active')
        $('.main__body-feedback-form-item-choose-wrap').not(this).children('.input__menu').removeClass('active')
    }
})

$('.type__item').on('click', function(e){
    $(this).addClass('active')
    $('.type__item').not(this).removeClass('active')
    let Val = $(this).children('span').text()
    $('.type__inp').val(Val)
})

$('.bouquet__item').on('click', function(e){
    $(this).addClass('active')
    $('.bouquet__item').not(this).removeClass('active')
    let price = $(this).children('span').attr('data-price')
    let src = $(this).children('.bouquet__item-top').children('img').attr('src')
    let name = $(this).children('.bouquet__item-top').children('p').text()
    $('.bouquet__input').attr('placeholder', '')
    $('.bouquet__menu-val').children('img').attr('src', `${src}`)
    $('.bouquet__menu-val').children('span').text(name)
    $('.bouquet__menu-val').addClass('active')
    $('.price__btn').addClass('active')
    $('.price__btn').children('span').text(` на сумму ${price * $('.main__body-feedback-form-item-choose-result').text()}`)
    $('.price__btn').children('span').attr('data-price', price)
})

$('.main__body-feedback-form-item-choose-plus').on('click', function(e){
    let col = $('.main__body-feedback-form-item-choose-result').text()
    col++
    $('.main__body-feedback-form-item-choose-result').text(col)
    $('.price__btn').children('span').text(` на сумму ${$('.price__btn').children('span').attr('data-price') * col}`)
})

$('.main__body-feedback-form-item-choose-minus').on('click', function(e){
    let col = $('.main__body-feedback-form-item-choose-result').text()
    if (col == 0){
        col = 0
    }else{
        col--
    }
    $('.main__body-feedback-form-item-choose-result').text(col)
    $('.price__btn').children('span').text(` на сумму ${$('.price__btn').children('span').attr('data-price') * col}`)
})