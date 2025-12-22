// $('.hero-top-image').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
// 	arrows: false,
// 	dots: true,
// 	autoplay: true,
// 	autoplaySpeed: 3000,
// 	dotsClass: 'hero-top-dots'
// 	// appendDots: $('.hero-top-dots'),
// });
// $('.hero-top-image-mob').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
// 	arrows: false,
// 	dots: true,
// 	autoplay: true,
// 	autoplaySpeed: 3000,
// 	dotsClass: 'hero-top-dots-mob',
// 	adaptiveHeight: true,
// 	// appendDots: $('.hero-top-dots'),
// });
$(document).ready(function(){
  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,  // Включаем стрелки
    prevArrow: '<button type="button" class="slick-prev"><img src="img/path-to-left-arrow.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/path-to-right-arrow.png" alt="Next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
});

// $(document).ready(function(){
//   // Инициализация слайдера для hero-top-img
//   $('.hero-top-slider .slick-slider').slick({
//     dots: true, // Включение пагинации
//     infinite: true, // Зацикливание слайдов
//     speed: 500, // Скорость перехода
//     slidesToShow: 1, // Отображаем по одному слайду
//     slidesToScroll: 1, // Прокрутка одного слайда
//     autoplay: true, // Автопрокрутка
//     autoplaySpeed: 3000, // Интервал автопрокрутки
//     arrows: false, // Отключаем стрелки
//   });
// });


if (window.screen.width > 550) {
	$('.rez-body-slider').slick({
		// slidesToShow: 3,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		// autoplay: true,
    infinite: false,
		autoplaySpeed: 3000,
		// adaptiveHeight: true,
    // centerMode: true, 
		prevArrow: '<button type="button" class="slick-prev"><img src="img/path-to-left-arrow.png" alt="Previous"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/path-to-right-arrow.png" alt="Next"></button>',
	});

}
if (window.screen.width > 550 && window.screen.width < 1024) {
	if (window.devicePixelRatio !== 1) {
		var dpt = window.devicePixelRatio;
		var widthM = window.screen.width * dpt;
		var widthH = window.screen.height * dpt;
		document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');  
	}
}


//нормальный слайдер
new Swiper('.rez-slider', {
  navigation:{
    nextEl: '.rez-slider-next',
    prevEl: '.rez-slider-prev'
  },
  // pagination: {
  //   el: ".coach-pagination",
  //   type: "progressbar"
  // }
  // loop: true,
  spaceBetween: 20,
  
  slidesPerView: 2,
  watchOverFlow: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
    },
    "@0.75": {
      slidesPerView: 2,
    },
    "@1.00": {
      slidesPerView: 2,
    },
  }
});

// if (window.screen.width < 550) {
//   $('.rez-body-slider').slick({
//   slidesToShow: 1,
//   });
// }

let rezItem = document.querySelectorAll('.rez-item')
let modaRezItem = document.querySelectorAll('.modal-rez-wrapper')
let modaRezItemClose = document.querySelectorAll('.modal-rez-close')
let html = document.querySelector('html')





// faq.js
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const plus = item.querySelector(".plus");

      question.addEventListener("click", () => {
          const isOpen = answer.style.display === "block";
          document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
          document.querySelectorAll(".plus").forEach(p => p.textContent = "+");

          if (!isOpen) {
              answer.style.display = "block";
              plus.textContent = "-";
              question.style = "color: #046d53;";
          }
          if (!isOpen) {
              question.style = "color: #046d53;";
          } else {
            question.style = "color: #333";
          }
      });
  });
});


let headerMenuWrapper = document.querySelector('.header-menu-wrapper')
let headerBurger = document.querySelector('.header-burger')

headerBurger.addEventListener('click', ()=> {
	if (!headerBurger.classList.contains('active')) {
		headerMenuWrapper.classList.add('active')
		headerBurger.classList.add('active')
		html.style.overflow = 'hidden'
	} else {
		headerMenuWrapper.classList.remove('active')
		headerBurger.classList.remove('active')
		html.style.overflow = 'scroll'
	}
})


// $('.hero-top-slider').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   dots: true,
//   dotsClass: 'hero-top-dots',
//   // autoplay: true,
//   autoplaySpeed: 5000,
//   adaptiveHeight: true
// });

$(document).ready(function(){
  // Убираем лишнюю инициализацию
  $('.hero-top-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'hero-top-dots',
    autoplay: true,
    infinite: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true
  });
});

// $(document).ready(function(){
//   $('.hero-top-slider').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: true,
//     dotsClass: 'hero-top-dots',
//     autoplay: true, // Добавляем автопрокрутку
//     autoplaySpeed: 5000,
//     adaptiveHeight: false, // Отключаем адаптивную высоту
//     fade: true, // Плавное переключение слайдов
//     cssEase: 'linear', // Линейная анимация
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           dots: true // Оставляем точки на мобильных устройствах
//         }
//       }
//     ]
//   });
// });



//quiz:
const quizQuestions = [
  {
    question: "В какой ситуации сейчас находитесь?",
    answers: [
      "Работаем только на сарафане - то перегружено, то пусто",
      "Приход мелких селлеры, а нужны крупные от 1000+ ед.",
      "Клиенты уходят после расчета стоимости",
      "Вкладывали деньги в рекламу, но не окупились",
      "Демпингуем - выбирают более дешевых",
      "Другой вариант"
    ],
    fieldType: "radio"
  },
  {
    question: "Что важно при привлечении клиентов?",
    answers: [
      "Привлекать крупных клиентов от 1000+ ед",
      "Снизить отказы после расчета",
      "Четко понимать, куда идут рекламные бюджеты",
      "Контролировать приход стабильных заявок",
      "Отказ от демпинга - работать с теми, кто ценит сервис, а не цену",
      "Другой вариант"
    ],
    fieldType: "checkbox" // Можно выбрать несколько вариантов
  },
  {
    question: "Как пытались привлекать клиентов?",
    answers: [
      "Рекламировались в Яндексе, Вк, Телеграм",
      "Размещали объявления на Авито",
      "Заказывали сайт у фрилансеров/агентств/по рекомендациям",
      "Брали клиентов из сторонних телеграм-каналов",
      "Использовали холодные звонки",
      "Исключительно на сарафане",
      "Другой вариант"
    ],
    fieldType: "checkbox"
  },
  {
    question: "Какой клиент ваш нужен?",
    answers: [
      "Малые от 500-1000 ед.",
      "Крупные от 1000+ ед.",
      "Крупные от 10000+ ед.",
      "Любые клиенты, главное - заявки"
    ],
    fieldType: "radio"
  },
  {
    question: "Что еще для вас важно?",
    answers: [
      "Прозрачная аналитика - какие заявки окупаются, а какие нет",
      "Долгосрочные клиенты, а не разовые заказы",
      "Другой вариант"
    ],
    fieldType: "checkbox"
  },
  {
    question: "Какую главную цель хотите достичь в ближайшие 3 месяца?",
    answers: [
      "Увеличить поток клиентов",
      "Снизить отказы после расчета стоимости",
      "Оптимизировать рекламу, чтобы она окупалась",
      "Кнопка бабла - просто получать больше прибыли",
      "Другой вариант"
    ],
    fieldType: "radio"
  }
];


$(document).ready(function() {
  let currentQuestion = 0;
  let userAnswers = [];
  
  // Инициализация первого вопроса
  showQuestion(currentQuestion);
  
  // Обработчик кнопки "Далее"
  $('.quiz-next').click(function() {
    const selectedAnswer = $('input[name="q' + (currentQuestion + 1) + '"]:checked').val();
    const textAnswer = $('input[name="q' + (currentQuestion + 1) + '"]').val();
    
    if (selectedAnswer || textAnswer) {
      userAnswers.push({
        question: quizQuestions[currentQuestion].question,
        answer: selectedAnswer ? quizQuestions[currentQuestion].answers[selectedAnswer - 1] : textAnswer
      });
      
      currentQuestion++;
      
      if (currentQuestion < quizQuestions.length) {
        showQuestion(currentQuestion);
      } else {
        // Все вопросы отвечены, показываем результаты
        showResults();
      }
    } else {
      alert('Пожалуйста, выберите ответ или введите свой вариант');
    }
  });
  // Обработчик клика по вариантам ответа
$(document).on('click', '.quiz-option', function() {
  const input = $(this).find('input');
  const isRadio = input.attr('type') === 'radio';
  
  if (isRadio) {
    // Для радио-кнопок - снимаем выделение со всех и ставим на текущий
    $('.quiz-option').removeClass('selected');
    $(this).addClass('selected');
  } else {
    // Для чекбоксов - переключаем состояние
    $(this).toggleClass('selected');
  }
});
  
  function showQuestion(index) {
    const question = quizQuestions[index];
    let answersHtml = '';
    
    question.answers.forEach((answer, i) => {
      answersHtml += `
        <div class="quiz-option">
          <input type="radio" name="q${index + 1}" value="${i + 1}">
          <label>${answer}</label>
        </div>
      `;
    });
    
    // Добавляем поле для своего ответа
    answersHtml += `
      <div class="quiz-option quiz-option-answer">
        <input type="text" name="q${index + 1}" placeholder="Свой ответ" class="quiz-text-answer">
      </div>
    `;
    
    $('.quiz-question h2').text(question.question);
    $('.quiz-answers').html(answersHtml);
    
    // Обновляем текст кнопки
    if (index === quizQuestions.length - 1) {
      $('.quiz-next').text('Получить стратегию');
    } else {
      $('.quiz-next').text('Далее');
    }


  }
  
  function showResults() {
    // Скрываем квиз
    $('.quiz-container').hide();
    
    // Показываем попап
    $('#quizPopup').fadeIn();
  }

  // Закрытие попапа по крестику
$(document).on('click', '.popup-close-btn', function() {
  $('#quizPopup').fadeOut();
});

// Закрытие попапа по клику вне контента
$(document).on('click', '.quiz-popup', function(e) {
  if ($(e.target).hasClass('quiz-popup')) {
    $('#quizPopup').fadeOut();
  }
});
  
});





//скролл
let buttons = document.getElementsByClassName("mistakes-action")
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function() {
    document.getElementById("quiz").scrollIntoView({behavior: "smooth"});
  }
}





$(document).ready(function(){
  $('.cases-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});