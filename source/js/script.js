var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    pageHeader.classList.add('page-header--nojs');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--nojs');
  }
});

var sliderItemBefore = document.querySelector('.slider__item--before');
var sliderItemAfter = document.querySelector('.slider__item--after');
var sliderBeforeButton = document.querySelector('.slider__button--before');
var sliderAfterButton = document.querySelector('.slider__button--after');
var sliderRange = document.querySelector('.slider__range')



sliderAfterButton.addEventListener('click', function() {
  if (sliderItemAfter.classList.contains('slider__item--hidden')) {
    sliderItemAfter.classList.remove('slider__item--hidden');
    sliderItemAfter.classList.add('slider__item--shown');
    sliderItemBefore.classList.remove('slider__item--shown');
    sliderItemBefore.classList.add('slider__item--hidden');
    sliderRange.classList.add('slider__range--after');
  }
});

sliderBeforeButton.addEventListener('click', function() {
  if (sliderItemBefore.classList.contains('slider__item--hidden')) {
    sliderItemBefore.classList.remove('slider__item--hidden');
    sliderItemBefore.classList.add('slider__item--shown');
    sliderItemAfter.classList.remove('slider__item--shown');
    sliderItemAfter.classList.add('slider__item--hidden');
    sliderRange.classList.remove('slider__range--after');
  }
});

const mapBlock = document.querySelector('#map');
const breakpointMd = window.matchMedia('(min-width:768px)');
const breakpointLg = window.matchMedia('(min-width:1440px)');

const mapState = {
  latitude: 59.938635,
  longitude: 30.323118,
  iconWidth: 56,
  iconHeight: 52
};

if (breakpointMd.matches) {
  mapState.iconWidth = 113;
  mapState.iconHeight = 106;
}

if (breakpointLg.matches) {
  mapState.longitude =  30.320546;
}

if (map) {
  ymaps.ready(init);
  function init() {
    const myMap = new ymaps.Map(map, {
      center: [mapState.latitude, mapState.longitude],
      zoom: 17,
    });
    const myPlacemark = new ymaps.Placemark(
      [59.938635, 30.323118],
      {
        hintContent: 'ул. Большая Конюшенная, д. 19/8',
      },
      {
        iconLayout: 'default#image',
        iconImageHref: 'img/svg/map-pin.svg',
        iconImageSize: [mapState.iconWidth, mapState.iconHeight],
        iconImageOffset: [-mapState.iconWidth / 2, -mapState.iconHeight],
      },
    );

    myMap.geoObjects.add(myPlacemark);
  }
}
