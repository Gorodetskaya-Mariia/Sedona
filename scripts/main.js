var map = document.querySelector(".map");
var popup = document.querySelector(".modal-search-hotels");
var isStorageSupport = true;
var storage="";

try {
  storage = localStorage.getItem("userName");
} catch (err) {
  isStorageSupport = false;
}

window.addEventListener("click", function (evt) {
  if(evt.target.classList.contains("search-hotels__button")){
		popup.classList.toggle("modal-show");
  } else if(evt.target.classList.contains("button--search-hotels")){
      popup.classList.remove("modal-show");
  } else if(evt.target.classList.contains("search-hotels__number-switch")){
      switchNumbers(evt.target);
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal-show");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

window.addEventListener("scroll", function(){
    parallax();
    svgAnimation();
});

//datapicker
options1 = {
    dateSelected: new Date(2019,1,12),
    customMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'],
    customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
	}
};

options2 = {
    dateSelected: new Date(2019,1,26),
    customMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек'],
    customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
}
};

const picker1 = datepicker(".search-hotels__input", options1);
const picker2 = datepicker(".search-hotels__input--departure", options2);

function parallax() {
    var background = document.querySelector(".parallax");
    var yPos = window.pageYOffset / background.dataset.speed;
        yPos = -yPos;
    
        var coords = '0% '+ yPos + 'px';
    
        background.style.backgroundPosition = coords;
}

//features animation
function svgAnimation() {
    var section = document.querySelector(".features__heading"),
            sectionTop = section.offsetTop,
            elsToAnimate = document.querySelectorAll(".feature__sub-icon");
    
    if ((window.pageYOffset >= sectionTop)) {
        for (var i = 0; i < elsToAnimate.length; i++) {
            elsToAnimate[i].classList.add("animate");
        }
    } else {
        for (var i = 0; i < elsToAnimate.length; i++) {
            elsToAnimate[i].classList.remove("animate");
        }
    }
}

function switchNumbers(param) {
    var current = param,
        currentParent = param.parentElement,
        input = currentParent.querySelector("input"),
        inputValue = input.value;
       
    if (current.classList.contains("search-hotels__number-switch-plus")) {
        inputValue++;
        if (inputValue > 0) {
            currentParent.querySelector(".search-hotels__number-switch-minus").classList.remove("disabled");
        }
        input.value = inputValue;
    }
    if (current.classList.contains("search-hotels__number-switch-minus")) {
        inputValue--;
        if (inputValue <= 0) {
            if(inputValue === 0)  input.value = inputValue;
            current.classList.add("disabled");
            return false;
        } else {
            current.classList.remove("disabled");
        }
        input.value = inputValue;
    }
}

