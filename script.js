var models = [
    {
        name: 'BMW 418d',
        image: 'img/bmw.jpg',
        link: 'http://www.arabalar.com.tr/'
    },
    {
        name: 'HONDA 418d',
        image: 'img/honda.jpg',
        link: 'http://www.arabalar.com.tr/'
    },
    {
        name: 'MAZDA 418d',
        image: 'img/mazda.jpg',
        link: 'http://www.arabalar.com.tr/'
    },
    {
        name: 'SKODA 418d',
        image: 'img/skoda.jpg',
        link: 'http://www.arabalar.com.tr/'
    },
    {
        name: 'VOLVO 418d',
        image: 'img/volvo.jpg',
        link: 'http://www.arabalar.com.tr/'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration: '1000',
    random: false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter', function(){
        clearInterval(interval);
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function(){
        init(settings);
    })
})

function init(settings) {
    // setTimeout = belli bir süre içinde bir işlem başlar ve biter 1 kerede
    // setInterval = clearInterval() ile durdurmadığımız sürece devam eder

    var prev;

    interval = setInterval(function () {
        if (settings.random) {
            //random index
            do {
                index = Math.floor(Math.random() * slaytCount);
            } while (index == prev);
            prev=index;
        } else {
            // artan index
            if(slaytCount == index +1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}

function showSlide(i) {

    index = i;
    if (i < 0) {
        index = slaytCount - 1;
    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}

